import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getInsightBySlug, getInsightSlugs, getAllInsights } from "@/lib/mdx";

export async function generateStaticParams() {
  const slugs = getInsightSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ''),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const insight = getInsightBySlug(resolvedParams.slug);
  return {
    title: `${insight.frontmatter.title} | OFFEE Insights`,
    description: insight.frontmatter.excerpt,
    openGraph: {
      title: insight.frontmatter.title,
      description: insight.frontmatter.excerpt,
      type: "article",
    },
  };
}

function extractToc(content: string) {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const toc = [];
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    toc.push({ level, text, id });
  }
  return toc;
}

const mdxComponents = {
  h2: (props: any) => {
    const text = props.children?.toString() || '';
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    return <h2 id={id} className="scroll-mt-32" {...props} />;
  },
  h3: (props: any) => {
    const text = props.children?.toString() || '';
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    return <h3 id={id} className="scroll-mt-32" {...props} />;
  }
};

export default async function InsightArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const insight = getInsightBySlug(resolvedParams.slug);
  
  const allInsights = getAllInsights();
  const relatedInsights = allInsights
    .filter(a => a.slug !== resolvedParams.slug)
    .slice(0, 2);

  const toc = extractToc(insight.content);

  return (
    <>
      <Navbar />
      
      {/* Dark Hero Section (Inspired by Expeons) */}
      <section className="pt-32 pb-24 bg-brand-black text-white relative overflow-hidden">
        {/* Subtle background glow/noise could go here if needed */}
        <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
          <Link href="/insights" className="inline-flex items-center gap-2 text-brand-cream/70 font-medium mb-12 hover:text-brand-cream transition-colors">
            <ArrowLeft size={16} /> Back to Insights
          </Link>
          
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full">
              {insight.frontmatter.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-8 leading-tight max-w-4xl">
            {insight.frontmatter.title}
          </h1>
          
          <p className="text-xl text-brand-cream/80 max-w-3xl mb-8 leading-relaxed font-medium">
            {insight.frontmatter.excerpt}
          </p>
          
          <div className="flex items-center gap-6 text-sm text-brand-cream/60 font-medium">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              {insight.frontmatter.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              {insight.frontmatter.readTime}
            </div>
          </div>
        </div>
      </section>

      {/* 2-Column Content Area */}
      <main className="py-20 bg-bg-primary">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: MDX Content (Span 8) */}
            <article className="lg:col-span-8">
              <div className="prose prose-lg md:prose-xl prose-headings:font-display prose-headings:text-brand-black prose-a:text-brand-gold prose-a:no-underline hover:prose-a:underline prose-p:text-brand-black/80 prose-li:text-brand-black/80 max-w-none">
                <MDXRemote source={insight.content} components={mdxComponents} />
              </div>
            </article>

            {/* Right Column: Sticky Sidebar (Span 4) */}
            <aside className="lg:col-span-4 hidden lg:block">
              <div className="sticky top-32 space-y-8">
                
                {/* Table of Contents Card */}
                {toc.length > 0 && (
                  <div className="glass-card bg-surface-1 p-6 rounded-[24px]">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-brand-black/50 mb-4">
                      On this page
                    </h3>
                    <ul className="space-y-3">
                      {toc.map((item, index) => (
                        <li 
                          key={index} 
                          className={`${item.level === 3 ? 'ml-4' : ''}`}
                        >
                          <a 
                            href={`#${item.id}`} 
                            className="text-sm font-medium text-brand-black/70 hover:text-brand-green transition-colors"
                          >
                            {item.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Related Insights Card */}
                <div className="glass-card bg-surface-1 p-6 rounded-[24px]">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-brand-black/50 mb-4">
                    Related
                  </h3>
                  <div className="space-y-6">
                    {relatedInsights.map((related) => (
                      <Link 
                        key={related.slug} 
                        href={`/insights/${related.slug}`}
                        className="block group"
                      >
                        <h4 className="text-brand-black font-display font-bold leading-snug group-hover:text-brand-green transition-colors mb-2">
                          {related.frontmatter.title}
                        </h4>
                        <span className="text-xs font-medium text-brand-black/50">
                          {related.frontmatter.readTime}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            </aside>
            
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

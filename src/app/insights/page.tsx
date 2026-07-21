import Link from "next/link";
import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getAllInsights } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Insights | Future of Work",
  description: "Read thoughts, research, and stories on the future of distributed work, coworking spaces, and productive cafes.",
  keywords: ["coworking spaces", "remote work", "work from cafes", "on-demand meeting rooms"],
};

export default function InsightsPage() {
  const articles = getAllInsights();
  const featuredArticle = articles.find(a => a.frontmatter.featured);
  const regularArticles = articles.filter(a => !a.frontmatter.featured);

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-bg-primary min-h-[80vh]">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-green mb-4">Insights</h1>
            <p className="text-lg text-brand-black/70">Thoughts, research, and stories on the future of distributed work.</p>
          </div>

          {/* Featured Article */}
          {featuredArticle && (
            <div className="mb-16">
              <Link href={`/insights/${featuredArticle.slug}`} className="group block">
                <div className="glass-card bg-surface-1 p-8 md:p-12 lg:p-16 rounded-[32px] hover:-translate-y-2 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-green bg-brand-green/10 px-3 py-1 rounded-full">
                      {featuredArticle.frontmatter.category}
                    </span>
                    <span className="text-xs text-brand-black/50 font-medium">
                      {featuredArticle.frontmatter.date} • {featuredArticle.frontmatter.readTime}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-black mb-6 leading-tight">
                    {featuredArticle.frontmatter.title}
                  </h2>
                  <p className="text-lg text-brand-black/70 mb-8 max-w-2xl leading-relaxed">
                    {featuredArticle.frontmatter.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-gold uppercase tracking-widest">
                    Read Article &rarr;
                  </span>
                </div>
              </Link>
            </div>
          )}

          {/* Grid Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regularArticles.map((article, idx) => (
              <Link key={idx} href={`/insights/${article.slug}`} className="group block h-full">
                <div className="glass-card bg-white/60 p-8 md:p-10 h-full flex flex-col hover:-translate-y-2 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-green bg-brand-green/10 px-3 py-1 rounded-full">
                      {article.frontmatter.category}
                    </span>
                    <span className="text-xs text-brand-black/50 font-medium">
                      {article.frontmatter.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-brand-black mb-4 leading-snug group-hover:text-brand-green transition-colors">
                    {article.frontmatter.title}
                  </h3>
                  <p className="text-brand-black/70 text-sm leading-relaxed mb-6">
                    {article.frontmatter.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand-gold uppercase tracking-widest">
                    Read Article &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const insightsDirectory = path.join(process.cwd(), 'src/content/insights');

export type InsightFrontmatter = {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
};

export type Insight = {
  slug: string;
  frontmatter: InsightFrontmatter;
  content: string;
};

export function getInsightSlugs() {
  if (!fs.existsSync(insightsDirectory)) return [];
  return fs.readdirSync(insightsDirectory).filter((file) => file.endsWith('.mdx'));
}

export function getInsightBySlug(slug: string): Insight {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(insightsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    frontmatter: data as InsightFrontmatter,
    content,
  };
}

export function getAllInsights(): Insight[] {
  const slugs = getInsightSlugs();
  const insights = slugs.map((slug) => getInsightBySlug(slug));
  
  // Sort insights by date in descending order
  return insights.sort((insight1, insight2) => 
    new Date(insight1.frontmatter.date) > new Date(insight2.frontmatter.date) ? -1 : 1
  );
}

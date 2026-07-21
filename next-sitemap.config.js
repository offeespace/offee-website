/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://offee.space',
  generateRobotsTxt: true, // (optional)
  sitemapSize: 7000,
  exclude: ['/server-sitemap.xml'], // Exclude server generated sitemaps if any
  priority: 0.7,
  changefreq: 'monthly',
  transform: async (config, path) => {
    // Custom logic to set priority and changefreq based on path
    let priority = config.priority;
    let changefreq = config.changefreq;

    if (path === '/') {
      priority = 1.0;
      changefreq = 'weekly';
    } else if (path === '/for-partners') {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path.startsWith('/insights')) {
      priority = 0.8;
      changefreq = 'weekly';
    }

    return {
      loc: path,
      changefreq: changefreq,
      priority: priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.nexomark.agency",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/admin", "/secret"],
};

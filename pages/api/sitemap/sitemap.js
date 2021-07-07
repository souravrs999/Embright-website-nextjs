const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

export default async (req, res) => {
  const constructedLinks = [];

  async function crawlLinks() {
    const blogLinks = await (
      await fetch(`${process.env.STRAPI_URL}/embright-blogs`)
    ).json();
    const newsLinks = await (
      await fetch(`${process.env.STRAPI_URL}/embright-events`)
    ).json();

    console.log(blogLinks);

    Object.keys(blogLinks).map((link) => {
      constructedLinks.push({
        url: `/blogs/${blogLinks[link].id}`,
        changefreq: "daily",
        priority: 0.3,
      });
    });
    Object.keys(newsLinks).map((news) => {
      constructedLinks.push({
        url: `/events/news/${newsLinks[news].id}`,
        changefreq: "daily",
        priority: 0.3,
      });
    });

    console.log(constructedLinks);
    return constructedLinks;
  }

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  const xmlString = await streamToPromise(
    Readable.from(constructedLinks).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};

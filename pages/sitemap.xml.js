import React from "react";

const MAIN_URL = "https://www.embrightinfotech.com";
const BLOG_URL = `${process.env.STRAPI_URL}/embright-blogs`;
const NEWS_URL = `${process.env.STRAPI_URL}/embright-events`;

const createSitemap = (
  posts,
  subdomain
) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://www.embrightinfotech.com/</loc>
      <priority>1.00</priority>
    </url>
    <url>
      <loc>https://www.embrightinfotech.com/services/xr-services</loc>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>https://www.embrightinfotech.com/events/news</loc>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>https://www.embrightinfotech.com/events/publications</loc>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>https://www.embrightinfotech.com/blogs</loc>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>https://www.embrightinfotech.com/contact</loc>
      <priority>0.80</priority>
    </url>
        ${posts[0]
          .map(({ id }) => {
            return `
                    <url>
                        <loc>${`${MAIN_URL}/${subdomain[0]}/${id}`}</loc>
                        <priority>0.64</priority>
                    </url>
                `;
          })
          .join("")}
          ${posts[1]
            .map(({ id }) => {
              return `
                      <url>
                          <loc>${`${MAIN_URL}/${subdomain[1]}/${id}`}</loc>
                          <priority>0.64</priority>
                      </url>
                  `;
            })
            .join("")}
    </urlset>
    `;

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    const blogs = await (await fetch(BLOG_URL)).json();
    const news = await (await fetch(NEWS_URL)).json();

    res.setHeader("Content-Type", "text/xml");
    res.write(createSitemap([blogs, news], ["blogs", "events/news"]));
    res.end();
  }
}

export default Sitemap;

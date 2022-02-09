import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { navLinks } from "../../../utils/nav-links";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import dateFormatter from "../../../lib/formatDate";
import Head from "next/head";
import { SEO } from "../../../utils/seo";

export default function Blog({ eventData }) {
  const { pathname } = useRouter();

  useEffect(() => {
    document
      .getElementById("menu-button-toggler")
      .addEventListener("click", function () {
        const navBarToggler = document.getElementById("toggle-nav");
        if (navBarToggler.getAttribute("data-nav-menu-open") === null) {
          navBarToggler.setAttribute("data-nav-menu-open", 1);
        } else {
          navBarToggler.removeAttribute("data-nav-menu-open");
        }
      });
  }, []);

  return (
    <>
      <Head>
        <title>{eventData.Title}</title>
        <meta content={eventData.Body.slice(0, 150)} name="description" />
        <meta content={eventData.Title} name="og:title" />
        <meta content={eventData.coverImage.url} name="og:image" />
        <meta name="og:url" content={SEO.news.ogUrl + "/" + eventData.id} />
        <meta content={eventData.Body.slice(0, 150)} name="og:description" />
        <meta content={eventData.Title} name="twitter:title" />
        <meta
          content={eventData.Body.slice(0, 150)}
          name="twitter:description"
        />
        <meta name="og:type" content={SEO.news.ogType} />
        <meta content={SEO.news.twitCard} name="twitter:card" />
      </Head>
      {/* <!-- Nav Section --> */}
      <div className="home-hero-section">
        <div
          data-collapse="medium"
          data-animation="default"
          data-duration="400"
          role="banner"
          className="navbar w-nav"
        >
          <div className="nav-wrapper">
            <a
              href="index.html"
              aria-current="page"
              className="brand w-nav-brand w--current"
            >
              <div className="brand-logo">
                <Image
                  src="/images/logo/embright-logo-white.png"
                  width={200}
                  height={100}
                  alt=""
                />
              </div>
            </a>
            <div
              className="menu-button w-nav-button w--open"
              aria-label="menu"
              role="button"
              aria-controls="w-nav-overlay-0"
              aria-haspopup="menu"
              aria-expanded="tre"
              id="menu-button-toggler"
            >
              <Image
                src="/images/common/icon-menu.svg"
                height={24}
                width={24}
                alt=""
              />
            </div>
            <nav
              role="navigation"
              className="nav-menu w-nav-menu"
              id="toggle-nav"
            >
              {/* this code block map through all the links */}
              {Object.keys(navLinks).map((item) =>
                navLinks[item].sublinks ? (
                  <div className="dropdown" key={navLinks[item].id}>
                    <a className="nav-link w-nav-link dropbtn">
                      {navLinks[item].name}
                    </a>
                    <div className="dropdown-content">
                      {/* this code block maps through all the sub links */}
                      {Object.keys(navLinks[item].dpLinks).map((subItem) => (
                        <a
                          href={navLinks[item].dpLinks[subItem].link}
                          key={navLinks[item].dpLinks[subItem].id}
                          target={
                            navLinks[item].dpLinks[subItem].ntab ? "_blank" : ""
                          }
                          rel="noreferrer"
                        >
                          {navLinks[item].dpLinks[subItem].name}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link href={navLinks[item].link} key={navLinks[item].id}>
                    <a
                      className={
                        navLinks[item].type === "normal"
                          ? `nav-link w-nav-link ${
                              pathname === navLinks[item].link
                                ? "w--current"
                                : ""
                            }`
                          : "button-colored margin-left-1x w-button"
                      }
                    >
                      {navLinks[item].name}
                    </a>
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* <!-- Hero section --> */}
        </div>

        <div
          data-poster-url=""
          data-video-urls=""
          data-autoplay="true"
          data-loop="true"
          data-wf-ignore="true"
          className="background-video w-background-video w-background-video-atom"
        >
          <video
            loop=""
            style={{
              backgroundImage:
                "url(/images/events-section/events-section-cover.jpeg)",
            }}
            muted=""
            data-wf-ignore="true"
            data-object-fit="cover"
          ></video>
        </div>
        <div
          className="w-layout-grid home-hero-grid"
          style={{
            display: "-webkit-box",
            display: "-webkit-flex",
            display: "-ms-flexbox",
            display: "flex",
            width: "100%",
            maxWidth: "52.5em",
            paddingTop: "6em",
            paddingBottom: "6em",
            flexDirection: "column",
            WebkitBoxOrient: "vertical",
            WebkitBoxDirection: "normal",
            WebkitFlexDirection: "column",
          }}
        >
          <div className="hero-grid-column-1">
            <h1 className="hero-title-text">
              <span className="text-color">News</span>
            </h1>
            <div className="div-line"></div>
          </div>
        </div>
      </div>

      {/* Blogs section */}
      <div className="aux-section">
        <div className="aux-block top-margin-negative">
          <div className="outline-block padding-bottom-1-2x w-clearfix">
            <div
              style={{
                backgroundImage: `url(${eventData.coverImage.url})`,
              }}
              className="news-image"
            ></div>
            <h6>
              {dateFormatter(eventData.publishDate.split(":")[0].split("T")[0])}
            </h6>
            <div className="w-richtext">
              <h3>{eventData.Title}</h3>
              <ReactMarkdown>{eventData.Body}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.STRAPI_URL}/embright-events`);
  const blogList = await res.json();

  return {
    paths: blogList.map((item) => ({
      params: {
        slug: String(item.id),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await fetch(
    `${process.env.STRAPI_URL}/embright-events?id=${params.slug}`
  );
  const eventData = await data.json();

  return {
    props: {
      eventData: eventData[0],
    },
    revalidate: 60,
  };
}

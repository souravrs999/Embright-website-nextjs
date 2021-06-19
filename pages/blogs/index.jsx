import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { navLinks } from "../../utils/nav-links";

export default function Blogs({ blogList }) {
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
      {/* <!-- Nav Section --> */}
      <div class="home-hero-section">
        <div
          data-collapse="medium"
          data-animation="default"
          data-duration="400"
          role="banner"
          class="navbar w-nav"
        >
          <div class="nav-wrapper">
            <a
              href="index.html"
              aria-current="page"
              class="brand w-nav-brand w--current"
            >
              <div class="brand-logo">
                <img src="/images/logo/embright-logo-white.png" />
              </div>
            </a>
            <div
              class="menu-button w-nav-button w--open"
              aria-label="menu"
              role="button"
              aria-controls="w-nav-overlay-0"
              aria-haspopup="menu"
              aria-expanded="tre"
              id="menu-button-toggler"
            >
              <img
                src="/images/common/icon-menu.svg"
                loading="lazy"
                height="24"
                alt=""
              />
            </div>
            <nav role="navigation" class="nav-menu w-nav-menu" id="toggle-nav">
              {/* this code block map through all the links */}
              {Object.keys(navLinks).map((item) =>
                navLinks[item].sublinks ? (
                  <div className="dropdown">
                    <a className="nav-link w-nav-link dropbtn">
                      {navLinks[item].name}
                    </a>
                    <div className="dropdown-content">
                      {/* this code block maps through all the sub links */}
                      {Object.keys(navLinks[item].dpLinks).map((subItem) => (
                        <a href={navLinks[item].dpLinks[subItem].link}>
                          {navLinks[item].dpLinks[subItem].name}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link href={navLinks[item].link}>
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
          class="background-video w-background-video w-background-video-atom"
        >
          <video
            autoplay=""
            loop=""
            style={{
              backgroundImage:
                "url(/images/services-section/services-section-cover.jpeg)",
            }}
            muted=""
            playsinline=""
            data-wf-ignore="true"
            data-object-fit="cover"
          ></video>
        </div>
        <div
          class="w-layout-grid home-hero-grid"
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
            webkitBoxOrient: "vertical",
            webkitBoxDirection: "normal",
            webkitFlexDirection: "column",
          }}
        >
          <div class="hero-grid-column-1">
            <h1 class="hero-title-text">
              <span class="text-color">Blogs</span>
            </h1>
            <div class="div-line"></div>
          </div>
        </div>
      </div>

      {/* Blogs section */}
      <div class="aux-section">
        <div class="aux-block top-margin-negative">
          <div class="home-news-list-wrapper w-dyn-list">
            <div role="list" class="home-news-list w-dyn-items">
              {blogList.map((item) => (
                <div
                  role="listitem"
                  class="home-news-item w-dyn-item"
                  key={item.id}
                >
                  <Link href={`/blogs/${String(item.id)}`}>
                    <a class="home-news-item-link-block w-inline-block">
                      <div class="blog-item-image-wrapper">
                        <img
                          loading="lazy"
                          src={item.CoverImage.url}
                          alt=""
                          class="blog-item-image"
                        />
                      </div>
                      <div class="blog-item-text-wrapper">
                        <h6>{item.PublishDate}</h6>
                        <h3 class="blog-item-title-text">{item.Title}</h3>
                        <div class="horizontal-line"></div>
                        <p class="blog-item-short-desciption-text">
                          {`${item.Body.slice(0, 100)}...`}
                        </p>
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await fetch(`${process.env.STRAPI_URL}/articles`);
  const blogList = await data.json();

  return {
    props: {
      blogList,
    },
    revalidate: 60,
  };
};

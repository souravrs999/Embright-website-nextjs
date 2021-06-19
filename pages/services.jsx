import { useRouter } from "next/router";
import { useEffect } from "react";
import { navLinks } from "../utils/nav-links";
import { serviceItems } from "../utils/service-items";
import Link from "next/link";

export default function Services() {
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
              {Object.keys(navLinks).map((item) =>
                navLinks[item].sublinks ? (
                  <div className="dropdown">
                    <a className="nav-link w-nav-link dropbtn">
                      {navLinks[item].name}
                    </a>
                    <div className="dropdown-content">
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
        </div>

        {/* <!-- Hero section --> */}

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
          >
            <source
              src=""
              data-wf-ignore="true"
            />
            <source
              src=""
              data-wf-ignore="true"
            />
          </video>
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
              <span class="text-color">Services</span>
            </h1>
            <div class="div-line"></div>
          </div>
        </div>
      </div>

      {/* <!-- Home section --> */}
      <div class="home-features-section" id="home-section">
        <div class="home-features-wrapper">
          <div id="Features" class="w-layout-grid home-features-grid">
            {Object.keys(serviceItems).map((item) => (
              <a href={serviceItems[item].link}>
                <div class="home-features-block">
                  <div class="home-features-icon-wrapper">
                    <img
                      src={serviceItems[item].img}
                      loading="lazy"
                      height="150"
                      alt=""
                      class="image"
                    />
                  </div>
                  <h3 class="home-features-title-text">
                    {serviceItems[item].name}
                  </h3>
                  <div class="div-line"></div>
                  <p>{serviceItems[item].desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

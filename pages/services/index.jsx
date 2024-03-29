import { useRouter } from "next/router";
import { useEffect } from "react";
import { navLinks } from "../../utils/nav-links";
import { serviceItems } from "../../utils/service-items";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { SEO } from "../../utils/seo";
import { testimonialItems } from "../../utils/testimonial-items";

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
      <Head>
        <title>{SEO.services.title}</title>
        <meta content={SEO.services.desc} name="description" />
        <meta content={SEO.services.ogTitle} name="og:title" />
        <meta name="og:url" content={SEO.services.ogUrl} />
        <meta content={SEO.services.ogDesc} name="og:description" />
        <meta content={SEO.services.twitTitle} name="twitter:title" />
        <meta content={SEO.services.twitDesc} name="twitter:description" />
        <meta name="og:type" content={SEO.services.ogType} />
        <meta content={SEO.services.twitCard} name="twitter:card" />
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
              {Object.keys(navLinks).map((item) =>
                navLinks[item].sublinks ? (
                  <div className="dropdown" key={navLinks[item].id}>
                    <a className="nav-link w-nav-link dropbtn">
                      {navLinks[item].name}
                    </a>
                    <div className="dropdown-content">
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
        </div>

        {/* <!-- Hero section --> */}

        <div
          data-poster-url=""
          data-video-urls=""
          data-autoplay="true"
          data-loop="true"
          data-wf-ignore="true"
          className="background-video w-background-video w-background-video-atom"
        >
          <video
            autoPlay=""
            loop=""
            style={{
              backgroundImage:
                "url(/images/services-section/services-section-cover.jpeg)",
            }}
            muted=""
            playsInline=""
            data-wf-ignore="true"
            data-object-fit="cover"
          >
            <source src="" data-wf-ignore="true" />
            <source src="" data-wf-ignore="true" />
          </video>
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
              <span className="text-color">Services</span>
            </h1>
            <div className="div-line"></div>
          </div>
        </div>
      </div>

      <div className="aux-block top-margin-negative">
        <div className="w-layout-grid contact-grid">
          <div className="map-wrapper">
              <div className="contact-form-div">
                <img
                  src="/images/services-section/app-dev.png"
                  width="100"
                  height="100"
                  alt=""
                  className="item-image"
                  style={{ paddingBottom: "10px" }}
                />
                <h3 className="contact-form-title-text">App Development</h3>
                <div className="div-line"></div>
                <div className="contact-form-block w-form">{/* content */}</div>
                <div
                  className="contact-info-container"
                  style={{ zIndex: "1 !important" }}
                >
                  <p style={{ textAlign: "center" }}>
                    <strong>
                      • Web app Development
                      <br />
                      <br />
                      • Android App Development
                      <br />
                      <br />
                      • iOS App Development
                      <br />
                      <br />
                      • Hybrid Application
                      <br />
                      <br />
                      • Native Application
                      <br />
                      <br />
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          <div
            className="contact-form-div"
          >
            <img
              src="/images/services-section/des-dev.png"
              width="100"
              height="100"
              alt=""
              className="item-image"
              style={{ paddingBottom: "10px" }}
            />
            <h3 className="contact-form-title-text">Design & Development</h3>
            <div className="div-line"></div>
            <div className="contact-form-block w-form">{/* content */}</div>
            <div className="contact-info-container">
              <p style={{ textAlign: "center" }}>
                <strong>
                  • 3D Modelling
                  <br />
                  <br />
                  • 3D Animation
                  <br />
                  <br />
                  • Concept Design
                  <br />
                  <br />
                  • UI/UX Design
                  <br />
                  <br />
                  • VFX Effect
                  <br />
                  <br />
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- About section --> */}
      <div className="home-about-section">
        {Object.keys(serviceItems).map((item) => (
          <div
            className="w-layout-grid home-about-grid"
            key={serviceItems[item].id}
          >
            <div className="home-about-grid-column-1">
              <div className="lightbox-wrapper">
                <a
                  className="lightbox-gallery w-inline-block"
                  href={serviceItems[item].link}
                >
                  <div className="lightbox-icon">
                    <Image
                      src="/images/common/icon-play.svg"
                      alt=""
                      height={150}
                      width={150}
                      className="lightbox-icon"
                    />
                  </div>
                  <Image
                    src={serviceItems[item].img}
                    alt=""
                    height={300}
                    width={300}
                    className="lightbox-thumb"
                  />
                </a>
              </div>
              <Image
                src={serviceItems[item].bg}
                height={600}
                width={600}
                alt=""
              />
            </div>
            <div className="home-about-grid-column-2">
              <h2>{serviceItems[item].name}</h2>
              <div className="div-line"></div>
              <p>{serviceItems[item].desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

import { useRouter } from "next/router";
import { useEffect } from "react";
import { navLinks } from "../utils/nav-links";
import Link from "next/link";

export default function Events() {
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
                <img src="/images/logo/embright-logo-white.png" />
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
              <img
                src="/images/common/icon-menu.svg"
                loading="lazy"
                height="24"
                alt=""
              />
            </div>
            <nav role="navigation" className="nav-menu w-nav-menu" id="toggle-nav">
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
          className="background-video w-background-video w-background-video-atom"
        >
          <video
            autoplay=""
            loop=""
            style={{
              backgroundImage:
                "url(/images/events-section/events-section-cover.jpeg)",
            }}
            muted=""
            playsinline=""
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
            webkitBoxOrient: "vertical",
            webkitBoxDirection: "normal",
            webkitFlexDirection: "column",
          }}
        >
          <div className="hero-grid-column-1">
            <h1 className="hero-title-text">
              <span className="text-color">Events</span>
            </h1>
            <div className="div-line"></div>
          </div>
        </div>
      </div>

      <div className="home-about-section" id="about-section">
        <div className="vertical-line-top"></div>
        <div className="w-layout-grid home-about-grid">
          <div className="home-about-grid-column-1">
            <img
              src="/images/events-section/ascend-kerala.jpg"
              loading="lazy"
              alt=""
              className="home-about-place-holder"
            />
          </div>
          <div className="home-about-grid-column-2">
            <h2>ASCEND KERALA</h2>
            <div className="div-line"></div>
            <p>
              Embright at ASCEND 2020 Kochi 09-10 January 2020 Government of
              Kerala organized Global Investors Meet ASCEND 2020 from 9th to
              10th of January 2020 at Grand Hyatt, Cochin. The event was to
              showcase the advancements of the state, its investor-friendly
              nature, initiatives of the state government and the business
              opportunities across various sectors. The event hosted around 750
              serious investors and entrepreneurs, who actively participated in
              the event. Embright Infotech displayed the product Auticare which
              is an XR-AI based Assistive Technology Platform for Autism
              Spectrum Disorder and Special Education. The device Auticare was
              one among the major exhibit at the two dozen stalls that exhibited
              products of different start-ups in the event. Embright Infotech
              had a great time meeting many professionals and investors from
              different sectors. The representatives of the company received
              many encouraging comments and networks from entrepreneurs and
              investors of different sectors for the innovative solution aimed
              at assisting autistic children. ASCEND 2020 saw 100-odd projects,
              ratified by KPMG as viable, presented across sectors such as
              petrochemicals, agro and food-processing, defence, life sciences,
              aeropolis, tourism and hospitality, ports and harbours, fisheries,
              infrastructure, mobility development, logistics, and electronic
              hardware
            </p>
          </div>
        </div>

        {/* <!-- Gallery section --> */}
        <div className="vertical-line-bottom"></div>
      </div>
    </>
  );
}

import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { navLinks } from "../utils/nav-links";
import { galleryItems } from "../utils/gallery-items";
import { partnersList } from "../utils/partners-list";
import { mentorsList } from "../utils/mentors-list";

import { testimonialItems } from "../utils/testimonial-items";

export default function Home({ props }) {
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
              // className="w-nav-overlay"
              aria-label="menu"
              role="button"
              // ariaControls="w-nav-overlay-0"
              ariaHaspopup="menu"
              ariaExpanded="tre"
              id="menu-button-toggler"
            >
              <img
                src="/images/common/icon-menu.svg"
                loading="lazy"
                height="24"
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
        <div className="w-layout-grid home-hero-grid" id="hero-section">
          <div className="hero-grid-column-1">
            <h1 className="hero-title-text">
              Take one step to
              <span className="text-color">the inevitable future,</span> Start
              automating your dream!
            </h1>
            <div className="div-line"></div>
            <p className="hero-paragraph-text">
              We’re constantly pushing ourselves to step beyond what’s possible
              in Virtual Reality, Augmented Reality, Mixed Reality, AI and IoT
              to give our clients an experience like never before. Break down
              the physical and virtual world barriers using our innovative
              solutions to solve real-world problems. Start today & embrace the
              change.
            </p>
            <div className="buttons-grid">
              <a href="#about-section" className="button-colored w-button">
                read more
              </a>
            </div>
          </div>
          <div
            id="w-node-e144d25f-7afe-486a-710f-6126f7df7365-b5fb5723"
            className="hero-grid-column-2"
          >
            <div className="lightbox-wrapper">
              <a
                className="lightbox-gallery w-inline-block w-lightbox"
                href="https://www.youtube.com/embed/zPv3Zh2qh9E?autoplay=1"
                target="_blank"
                data-lity
              >
                <img
                  src="/images/hero-section/icon-play.svg"
                  loading="lazy"
                  height="24"
                  alt=""
                  className="lightbox-icon"
                />
                <img
                  src="/images/hero-section/hero-section-lightbox-thumbnail.jpeg"
                  loading="lazy"
                  height=""
                  sizes="(max-width: 479px) 42vw, (max-width: 767px) 41vw, (max-width: 991px) 31vw, (max-width: 1279px) 42vw, 40vw"
                  srcSet="
                  /images/hero-section/hero-section-lightbox-thumbnail.jpeg  800w,
                  /images/hero-section/hero-section-lightbox-thumbnail.jpeg 1024w
                "
                  alt=""
                  className="lightbox-thumb"
                />
              </a>
            </div>
            <img
              src="/images/hero-section/hero-hexagon-icon.svg"
              loading="lazy"
              alt=""
              className="hero-image-placeholder"
            />
          </div>
        </div>
        <div className="background-video w-background-video w-background-video-atom">
          <video autoPlay>
            <source src="/video/hero-section-poster-video-1.mp4" />
          </video>
        </div>
      </div>

      {/* <!-- Home section --> */}

      <div class="home-features-section" id="home-section">
        <div class="home-features-wrapper">
          <div id="Features" class="w-layout-grid home-features-grid">
            <div class="home-features-block">
              <div class="home-features-icon-wrapper">
                <img
                  src="/images/home-section/home-section-vr-thumb.svg"
                  loading="lazy"
                  height="64"
                  alt=""
                  class="home-features-icon"
                />
                <img
                  src="/images/home-section/home-section-icon-hex-left.svg"
                  loading="lazy"
                  height=""
                  alt=""
                  class="image"
                />
              </div>
              <h3 class="home-features-title-text">Auticare</h3>
              <div class="div-line"></div>
              <p>
                XR-AI based Assistive Technology Learning platform for Autism
                Spectrum Disorder and Special Education.
              </p>
            </div>
            <div class="home-features-block">
              <div class="home-features-icon-wrapper">
                <img
                  src="/images/home-section/home-section-crypto-thumb.svg"
                  loading="lazy"
                  height="64"
                  width="64"
                  alt=""
                  class="home-features-icon"
                />
                <img
                  src="/images/home-section/home-section-icon-hex-right.svg"
                  loading="lazy"
                  height="128"
                  alt=""
                />
              </div>
              <h3 class="home-features-title-text">Mindcare XR</h3>
              <div class="div-line"></div>
              <p>
                XR unique platform to achieve optimal wellness through online
                therapy sessions
              </p>
            </div>
            <div class="home-features-block">
              <div class="home-features-icon-wrapper">
                <img
                  src="/images/home-section/home-section-ai-thumb.svg"
                  loading="lazy"
                  height=""
                  width="64"
                  alt=""
                  class="home-features-icon"
                />
                <img
                  src="/images/home-section/home-section-icon-hex-left.svg"
                  loading="lazy"
                  height="128"
                  alt=""
                />
              </div>
              <h3 class="home-features-title-text">Eduoskus XR</h3>
              <div class="div-line"></div>
              <p>One stop platform for all teaching and learning solutions</p>
            </div>
            <div class="home-features-block">
              <div class="home-features-icon-wrapper">
                <img
                  src="/images/home-section/home-section-cpu-thumb.svg"
                  loading="lazy"
                  height="64"
                  alt=""
                  class="home-features-icon"
                />
                <img
                  src="/images/home-section/home-section-icon-hex-right.svg"
                  loading="lazy"
                  height=""
                  alt=""
                  class="home-features-icon-placeholder"
                />
              </div>
              <h3 class="home-features-title-text">XR Event</h3>
              <div class="div-line"></div>
              <p>
                A stunning user-friendly virtual event platform for events,
                trade shows, exhibitions etc
              </p>
            </div>
          </div>
        </div>

        {/* <!-- Partner Section --> */}
        <div class="w-layout-grid partners-grid" id="partner-section">
          <div class="partners-grid-vertical-spacing-block"></div>
          <div class="partners-grid-vertical-spacing-block"></div>
          <div class="partners-grid-vertical-spacing-block"></div>
          <div class="partners-grid-vertical-spacing-block"></div>
          {Object.keys(partnersList).map((logo) => (
            <div class="partners-block">
              <img
                src={partnersList[logo].img}
                loading="lazy"
                height=""
                alt={partnersList[logo].name}
                class="partners-logo-image"
              />
            </div>
          ))}
        </div>
      </div>

      {/* <!-- About section --> */}
      <div class="home-about-section" id="about-section">
        <div class="vertical-line-top"></div>
        <div class="w-layout-grid home-about-grid">
          <div class="home-about-grid-column-1">
            <div class="lightbox-wrapper">
              <a class="lightbox-gallery w-inline-block">
                <img
                  src="/images/about-section/about-section-camera-icon.svg"
                  loading="lazy"
                  height="24"
                  alt=""
                  class="lightbox-icon"
                />
                <img
                  src="/images/about-section/about-section-cover.jpeg"
                  loading="lazy"
                  sizes="(max-width: 479px) 42vw, (max-width: 767px) 41vw, (max-width: 991px) 31vw, (max-width: 1279px) 42vw, 40vw"
                  srcset="
                  /images/about-section/about-section-cover.jpeg  800w,
                  /images/about-section/about-section-cover.jpeg 1024w
                "
                  alt=""
                  class="lightbox-thumb"
                />
              </a>
            </div>
            <img
              src="/images/about-section/about-section-hex-left.svg"
              loading="lazy"
              alt=""
              class="home-about-place-holder"
            />
          </div>
          <div class="home-about-grid-column-2">
            <h6>About Us</h6>
            <h2>
              Embright
              <span class="text-color">Infotech</span>
            </h2>
            <div class="div-line"></div>
            <p>
              <strong>
                An XR (Extended Reality) based startup recognized by Govt. of
                India Startup Policy
              </strong>
              <br />
              <br />
              Developing interactive therapy rehabilitation module based
              standard modes of therapy for Children and Adults with Autism and
              related disabilities and specializes in products and services
              related to Virtual Reality, Augmented Reality, Mixed Reality, AI
              and IoT. <br />
              <br />
              Founded by a team of engineers , occupational therapists,
              Psychologists from India, brings an affordable and immersive
              platform for faster diagnosis and precise intervention of Autism
              Spectrum Disorder, other neuro developmental disorders and special
              education.
            </p>
          </div>
        </div>

        {/* <!-- Gallery section --> */}
        <div class="vertical-line-bottom"></div>
      </div>
      <div class="home-classes-section">
        <div class="home-classes-text">
          <div class="light-section-text-wrapper">
            <h6>Gallery</h6>
            <h2 class="light-section-title-text">Check out our achievements</h2>
            <div class="div-line"></div>
          </div>
        </div>
        <div class="home-classes-wrapper">
          <div class="classes-list-wrapper w-dyn-list">
            <div role="list" class="classes-list w-dyn-items">
              {/* <!-- item --> */}
              {Object.keys(galleryItems).map((idx) => (
                <div role="listitem" class="classes-item w-dyn-item">
                  <a
                    href={galleryItems[idx]}
                    class="classes-item-link-block w-inline-block"
                  >
                    <div class="classes-item-image-wrapper">
                      <h3 class="classes-item-title-text"></h3>
                      <div
                        style={{
                          backgroundImage: `url(${galleryItems[idx]})`,
                        }}
                        class="classes-item-image"
                      ></div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* <!-- counter section --> */}
          <div class="w-layout-grid facts-grid">
            <div class="partners-grid-vertical-spacing-block"></div>
            <div class="partners-grid-vertical-spacing-block"></div>
            <div class="partners-grid-vertical-spacing-block"></div>
            <div class="partners-grid-vertical-spacing-block"></div>
            <div class="facts-block">
              <div class="facts-title-text">+235K</div>
              <div class="facts-detail-text">Cup of Coffees</div>
            </div>
            <div class="facts-block">
              <div class="facts-title-text">+100</div>
              <div class="facts-detail-text">VR Scenarios</div>
            </div>
            <div class="facts-block">
              <div class="facts-title-text">+30</div>
              <div class="facts-detail-text">Employees</div>
            </div>
            <div class="facts-block">
              <div class="facts-title-text">+100</div>
              <div class="facts-detail-text">Happy Clients</div>
            </div>
          </div>

          {/* <!-- testimonial section --> */}
          <div class="w-layout-grid testimonials-grid">
            {/* <!-- block --> */}
            {Object.keys(testimonialItems).map((quote) => (
              <div class="testimonial-block">
                <img
                  src={testimonialItems[quote].img}
                  loading="lazy"
                  width="200"
                  height="200"
                  alt=""
                  class="quote-image"
                />
                <blockquote>{testimonialItems[quote].quote}</blockquote>
                <h6>{testimonialItems[quote].desg}</h6>
                <h3 class="testimonial-title-text">
                  {testimonialItems[quote].name}
                </h3>
                <div class="w-layout-grid testimonials-social-buttons-grid">
                  {Object.keys(testimonialItems[quote].social).map((social) => (
                    <a
                      href={testimonialItems[quote].social[social].link}
                      class="button-social w-inline-block"
                    >
                      <img
                        src={testimonialItems[quote].social[social].icon}
                        loading="lazy"
                        height="24"
                        alt=""
                        class="button-icon"
                      />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <!-- Team Section --> */}
      <div class="trainers-section">
        <div class="vertical-line-top"></div>
        <div class="dark-section-text-wrapper">
          <h6>Mentors</h6>
          {/* <h2 class="dark-section-title-text">
          The guys at work behind the sceces
        </h2> */}
          <div class="div-line"></div>
        </div>
        <div class="aux-block">
          <div class="home-trainers-list-wrapper w-dyn-list">
            <div role="list" class="trainers-list w-dyn-items">
              {Object.keys(mentorsList).map((mentor) => (
                <div role="listitem" class="trainers-item w-dyn-item">
                  <a class="trainers-item-link-block w-inline-block">
                    <div class="trainers-image-wrapper-tilt-left">
                      <div class="trainers-image-wrapper">
                        <img
                          loading="lazy"
                          src={mentorsList[mentor].img}
                          alt={mentorsList[mentor].name}
                          class="trainers-image"
                        />
                      </div>
                      <img
                        src={mentorsList[mentor].bg}
                        loading="lazy"
                        class="trainers-image-placeholder"
                      />
                    </div>
                    <div
                      class="
                    trainers-image-wrapper-tilt-right
                    w-condition-invisible
                  "
                    >
                      <div class="trainers-image-wrapper"></div>
                      <img
                        src={mentorsList[mentor].bg}
                        loading="lazy"
                        alt=""
                        class="trainers-image-placeholder"
                      />
                    </div>
                    <h3>{mentorsList[mentor].name}</h3>

                    <div class="div-line"></div>
                    <h6 className="ps-50">{mentorsList[mentor].desc}</h6>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div class="vertical-line-bottom"></div>
      </div>
    </>
  );
}

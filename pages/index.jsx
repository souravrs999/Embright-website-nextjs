import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { navLinks } from "../utils/nav-links";
import { galleryItems } from "../utils/gallery-items";
import { partnersList } from "../utils/partners-list";
import { mentorsList } from "../utils/mentors-list";
import { testimonialItems } from "../utils/testimonial-items";
import { certificates } from "../utils/certificates";
import Image from "next/image";
import Head from "next/head";
import { SEO } from "../utils/seo";

export default function Home() {
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
        <title>{SEO.home.title}</title>
        <meta content={SEO.home.desc} name="description" />
        <meta content={SEO.home.ogTitle} name="og:title" />
        <meta name="og:url" content={SEO.home.ogUrl} />
        <meta content={SEO.home.ogDesc} name="og:description" />
        <meta content={SEO.home.twitTitle} name="twitter:title" />
        <meta content={SEO.home.twitDesc} name="twitter:description" />
        <meta name="og:type" content={SEO.home.ogType} />
        <meta content={SEO.home.twitCard} name="twitter:card" />
      </Head>

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
              href="#"
              aria-current="page"
              className="brand w-nav-brand w--current"
            >
              <div className="brand-logo">
                <Image
                  src="/images/logo/embright-logo-white.png"
                  width={220}
                  height={100}
                  alt=""
                />
              </div>
            </a>
            <div
              className="menu-button w-nav-button w--open"
              // className="w-nav-overlay"
              aria-label="menu"
              role="button"
              // ariaControls="w-nav-overlay-0"
              aria-haspopup="menu"
              aria-expanded="tre"
              id="menu-button-toggler"
            >
              <Image
                src="/images/common/icon-menu.svg"
                width={24}
                height={24}
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
        <div className="w-layout-grid home-hero-grid" id="hero-section">
          <div className="hero-grid-column-1">
            <h1 className="hero-title-text">
              Take one step to
              <span className="text-color"> the inevitable future,</span> Start
              automating your dream!
            </h1>
            <div className="div-line"></div>
            <p className="hero-paragraph-text">
              We are constantly pushing ourselves to step beyond what’s possible
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
                href="https://youtu.be/zPv3Zh2qh9E"
                target="_blank"
                rel="noreferrer"
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
                  src="/images/hero-section/hero-section-lightbox-thumbnail.jpeg"
                  loading="lazy"
                  height={300}
                  width={300}
                  alt=""
                  className="lightbox-thumb"
                />
              </a>
            </div>
            <Image
              src="/images/hero-section/hero-hexagon-icon.svg"
              alt=""
              height={600}
              width={600}
              className="hero-image-placeholder"
            />
          </div>
        </div>
        <div className="background-video w-background-video w-background-video-atom">
          <video autoPlay loop>
            <source
              src="/video/hero-section-poster-video-1.mp4"
              type="video/mp4"
            />
            Your browser do not support video tag.
          </video>
        </div>
      </div>

      {/* <!-- Home section --> */}

      <div className="home-features-section" id="home-section">
        <div className="home-features-wrapper">
        <div className="dark-section-text-wrapper">
        <h6>Products</h6>
          {/* <h2 className="dark-section-title-text">
          The guys at work behind the sceces
        </h2> */}
          <div className="div-line"></div>
          </div>
          <div id="Features" className="w-layout-grid home-features-grid">
            <a
              href="https://www.myauticare.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="home-features-block">
              <h6>Digital Healthcare</h6>
            <h3>
              Virtual<br />
              <span className="text-color">Teletherapy</span>
            </h3>
                <div className="home-features-icon-wrapper">
                  <div className="home-features-icon">
                    <Image
                      src="/images/home-section/auticare-logo.png"
                      layout="fill"
                      alt=""
                    />
                  </div>
                  <div className="image">
                    <Image
                      src="/images/home-section/home-section-icon-hex-left.svg"
                      height={150}
                      width={150}
                      alt=""
                    />
                  </div>
                </div>
                <h3 className="home-features-title-text">Auticare</h3>
                <div className="div-line"></div>
                <p>
                  XR-AI based Assistive Technology Learning platform for Autism
                  Spectrum Disorder and Special Education.
                </p>
                
              </div>
            </a>
            <a href="https://mindcarexr.com/" target="_blank" rel="noreferrer">
              <div className="home-features-block">
              <h6>Mind and Wellness</h6>
            <h3>
              Virtual<br />
              <span className="text-color">Teletherapy</span>
            </h3>
                <div className="home-features-icon-wrapper">
                  <div className="home-features-icon">
                    <Image
                      src="/images/home-section/mindcare-logo.png"
                      layout="fill"
                      alt=""
                    />
                  </div>
                  <div className="image">
                    <Image
                      src="/images/home-section/home-section-icon-hex-right.svg"
                      height={150}
                      width={150}
                      alt=""
                    />
                  </div>
                </div>

                <h3 className="home-features-title-text">Mindcare XR</h3>
                <div className="div-line"></div>
                <p>
                  XR unique platform to achieve optimal wellness through online
                  therapy sessions
                </p>
              </div>
            </a>
            <a
              href="https://www.eduoskus.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="home-features-block">
              <h6>Education</h6>
            <h3>
              EduTech &
              <span className="text-color"> Skill Development</span>
            </h3>
                <div className="home-features-icon-wrapper">
                  <div className="home-features-icon">
                    <Image
                      src="/images/home-section/eduoskus-logo.png"
                      layout="fill"
                      alt=""
                    />
                  </div>
                  <div className="image">
                    <Image
                      src="/images/home-section/home-section-icon-hex-left.svg"
                      height={150}
                      width={150}
                      alt=""
                    />
                  </div>
                </div>

                <h3 className="home-features-title-text">Eduoskus XR</h3>
                <div className="div-line"></div>
                <p>One stop platform for all teaching and learning solutions</p>
              </div>
            </a>
            <a
              href="https://www.xr-event.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="home-features-block">
              <h6>Marketing</h6>
            <h3>
              Virtual<br />
              <span className="text-color">Solutions</span>
            </h3>
                <div className="home-features-icon-wrapper">
                  <div className="home-features-icon">
                    <Image
                      src="/images/home-section/xr-event-logo.png"
                      layout="fill"
                      alt=""
                    />
                  </div>
                  <div className="image">
                    <Image
                      src="/images/home-section/home-section-icon-hex-right.svg"
                      height={150}
                      width={150}
                      alt=""
                    />
                  </div>
                </div>
                <h3 className="home-features-title-text">XR Event</h3>
                <div className="div-line"></div>
                <p>
                  A stunning user-friendly virtual event platform for events,
                  trade shows, exhibitions etc
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* <!-- Partner Section --> */}
        <div className="w-layout-grid partners-grid" id="partner-section">
          <div className="partners-grid-vertical-spacing-block"></div>
          <div className="partners-grid-vertical-spacing-block"></div>
          <div className="partners-grid-vertical-spacing-block"></div>
          <div className="partners-grid-vertical-spacing-block"></div>
          {Object.keys(partnersList).map((logo) => (
            <div className="partners-block" key={partnersList[logo].name}>
              <img
                src={partnersList[logo].img}
                alt={partnersList[logo].name}
                className="partners-logo-image"
              />
            </div>
          ))}
        </div>
      </div>

      {/* <!-- About section --> */}
      <div className="home-about-section" id="about-section">
        <div className="vertical-line-top"></div>
        <div className="w-layout-grid home-about-grid">
          <div className="home-about-grid-column-1">
            <div className="lightbox-wrapper">
              <a className="lightbox-gallery w-inline-block">
                <Image
                  src="/images/about-section/about-section-cover.jpeg"
                  alt=""
                  height={300}
                  width={300}
                  className="lightbox-thumb"
                />
              </a>
            </div>
            <Image
              src="/images/about-section/about-section-hex-left.svg"
              height={600}
              width={600}
              alt=""
              // className="home-about-place-holder"
            />
          </div>
          <div className="home-about-grid-column-2">
            <h6>About Us</h6>
            <h2>
              Embright
              <span className="text-color"> Infotech</span>
            </h2>
            <div className="div-line"></div>
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
        <div className="vertical-line-bottom"></div>
      </div>
      <div className="home-classes-section">
        <div className="home-classes-text">
          <div className="light-section-text-wrapper">
            <h6>Gallery</h6>
            <h2 className="light-section-title-text">
              Check out our achievements
            </h2>
            <div className="div-line"></div>
          </div>
        </div>
        <div className="home-classes-wrapper">
          <div className="classes-list-wrapper w-dyn-list">
            <div role="list" className="classes-list w-dyn-items">
              {/* <!-- item --> */}
              {Object.keys(galleryItems).map((idx) => (
                <div
                  role="listitem"
                  className="classes-item w-dyn-item"
                  key={galleryItems[idx].id}
                >
                  <a
                    href={galleryItems[idx].img}
                    target="_blank"
                    rel="noreferrer"
                    className="classes-item-link-block w-inline-block"
                  >
                    <div className="classes-item-image-wrapper">
                      <h3 className="classes-item-title-text"></h3>
                      <div
                        style={{
                          backgroundImage: `url(${galleryItems[idx].img})`,
                        }}
                        className="classes-item-image"
                      ></div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* <!-- counter section --> */}
          <div className="w-layout-grid facts-grid">
            <div className="partners-grid-vertical-spacing-block"></div>
            <div className="partners-grid-vertical-spacing-block"></div>
            <div className="partners-grid-vertical-spacing-block"></div>
            <div className="partners-grid-vertical-spacing-block"></div>
            <div className="facts-block">
              <div className="facts-title-text">+235K</div>
              <div className="facts-detail-text">Cup of Coffees</div>
            </div>
            <div className="facts-block">
              <div className="facts-title-text">+100</div>
              <div className="facts-detail-text">VR Scenarios</div>
            </div>
            <div className="facts-block">
              <div className="facts-title-text">+30</div>
              <div className="facts-detail-text">Employees</div>
            </div>
            <div className="facts-block">
              <div className="facts-title-text">+100</div>
              <div className="facts-detail-text">Happy Clients</div>
            </div>
          </div>

          {/* <!-- testimonial section --> */}
          <div className="w-layout-grid testimonials-grid">
            {/* <!-- block --> */}
            {Object.keys(testimonialItems).map((quote) => (
              <div
                className="testimonial-block"
                key={testimonialItems[quote].id}
              >
                <Image
                  src={testimonialItems[quote].img}
                  width={200}
                  height={200}
                  alt=""
                  className="quote-image"
                />
                {/* <blockquote>{testimonialItems[quote].quote}</blockquote> */}
                <h6>{testimonialItems[quote].desg}</h6>
                <h3 className="testimonial-title-text">
                  {testimonialItems[quote].name}
                </h3>
                <div className="w-layout-grid testimonials-social-buttons-grid">
                  {Object.keys(testimonialItems[quote].social).map((social) => (
                    <a
                      href={testimonialItems[quote].social[social].link}
                      className="button-social w-inline-block"
                      key={testimonialItems[quote].social[social].id}
                    >
                      <Image
                        src={testimonialItems[quote].social[social].icon}
                        height={24}
                        width={24}
                        alt=""
                        className="button-icon"
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
      <div className="trainers-section">
        <div className="vertical-line-top"></div>
        <div className="dark-section-text-wrapper">
          <h6>Mentors</h6>
          {/* <h2 className="dark-section-title-text">
          The guys at work behind the sceces
        </h2> */}
          <div className="div-line"></div>
        </div>
        <div className="aux-block">
          <div className="home-trainers-list-wrapper w-dyn-list">
            <div role="list" className="trainers-list w-dyn-items">
              {Object.keys(mentorsList).map((mentor) => (
                <div
                  role="listitem"
                  className="trainers-item w-dyn-item"
                  key={mentorsList[mentor].id}
                >
                  <a className="trainers-item-link-block w-inline-block">
                    <div className="trainers-image-wrapper-tilt-left">
                      <div className="trainers-image-wrapper">
                        <Image
                          src={mentorsList[mentor].img}
                          alt={mentorsList[mentor].name}
                          height={100}
                          width={100}
                          className="trainers-image"
                        />
                      </div>
                      <Image
                        src={mentorsList[mentor].bg}
                        height={200}
                        width={200}
                        alt=""
                      />
                    </div>
                    <div
                      className="
                    trainers-image-wrapper-tilt-right
                    w-condition-invisible
                  "
                    ></div>
                    <h3>{mentorsList[mentor].name}</h3>

                    <div className="div-line"></div>
                    <h6 className="ps-50">{mentorsList[mentor].desc}</h6>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Team Section --> */}
      <div className="trainers-section">
        <div className="vertical-line-top"></div>
        <div className="dark-section-text-wrapper">
          <h6>Certifications</h6>
          {/* <h2 className="dark-section-title-text">
          The guys at work behind the sceces
        </h2> */}
          <div className="div-line"></div>
        </div>
        <div className="aux-block">
          <div className="home-trainers-list-wrapper w-dyn-list">
            <div role="list" className="trainers-list w-dyn-items">
              {/* item */}
              <div role="listitem" className="trainers-item w-dyn-item">
                <a className="trainers-item-link-block w-inline-block">
                  <div className="trainers-image-wrapper-tilt-left">
                    <div className="trainers-image-wrapper">
                      <Image
                        src="/images/certificates/cert-13485.png"
                        alt=""
                        height={100}
                        width={100}
                        className="trainers-image"
                      />
                    </div>
                    <Image
                      src="/images/team-section/team-section-icon-hex-left.svg"
                      height={200}
                      width={200}
                      alt=""
                    />
                  </div>
                  {/* <div
                      className="
                    trainers-image-wrapper-tilt-right
                    w-condition-invisible
                  "
                    ></div> */}
                  {/* <h3>{mentorsList[mentor].name}</h3>

                    <div className="div-line"></div>
                    <h6 className="ps-50">{mentorsList[mentor].desc}</h6> */}
                </a>
              </div>
              {/* /item */}
              {/* item */}
              <div role="listitem" className="trainers-item w-dyn-item">
                <a className="trainers-item-link-block w-inline-block">
                  <div className="trainers-image-wrapper-tilt-left">
                    <div className="trainers-image-wrapper">
                      <Image
                        src="/images/certificates/cert-9000.jpg"
                        alt=""
                        height={100}
                        width={100}
                        className="trainers-image"
                      />
                    </div>
                    <Image
                      src="/images/team-section/team-section-icon-hex-right.svg"
                      height={200}
                      width={200}
                      alt=""
                    />
                  </div>
                  {/* <div
                      className="
                    trainers-image-wrapper-tilt-right
                    w-condition-invisible
                  "
                    ></div> */}
                  {/* <h3>{mentorsList[mentor].name}</h3>

                    <div className="div-line"></div>
                    <h6 className="ps-50">{mentorsList[mentor].desc}</h6> */}
                </a>
              </div>
              {/* /item */}
              {/* item */}
              <div role="listitem" className="trainers-item w-dyn-item">
                <a className="trainers-item-link-block w-inline-block">
                  <div className="trainers-image-wrapper-tilt-left">
                    <div className="trainers-image-wrapper">
                      <Image
                        src="/images/certificates/cert-2001.png"
                        alt=""
                        height={100}
                        width={100}
                        className="trainers-image"
                      />
                    </div>
                    <Image
                      src="/images/team-section/team-section-icon-hex-left.svg"
                      height={200}
                      width={200}
                      alt=""
                    />
                  </div>
                  {/* <div
                      className="
                    trainers-image-wrapper-tilt-right
                    w-condition-invisible
                  "
                    ></div> */}
                  {/* <h3>{mentorsList[mentor].name}</h3>

                    <div className="div-line"></div>
                    <h6 className="ps-50">{mentorsList[mentor].desc}</h6> */}
                </a>
              </div>
              {/* /item */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

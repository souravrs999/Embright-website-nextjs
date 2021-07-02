import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { navLinks } from "../../utils/nav-links";
import Link from "next/link";
import Image from "next/image";

export default function Services() {
  const { pathname } = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subj, setSubj] = useState("");
  const [msg, setMsg] = useState("");
  const [service, setService] = useState("");

  const [submitted, setSubmitted] = useState(false);

  function clearFields() {
    setName("");
    setEmail("");
    setPhone("");
    setSubj("");
    setMsg("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(service)

    // let data = { name, email, phone, subj, msg };
    // fetch("api/contact/contact", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json, text/plain, */*",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // }).then((res) => {
    //   if (res.status === 200) {
    //     setSubmitted(true);
    //     clearFields();
    //   }
    // });
  }

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
                "url(/images/contact-section/contact-header-cover.webp)",
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
              <span className="text-color">Contact</span>
            </h1>
            <div className="div-line"></div>
          </div>
        </div>
      </div>
      <div className="aux-section">
        <div className="aux-block top-margin-negative">
          <div className="w-layout-grid contact-grid">
            <div className="map-wrapper">
              <div className="map w-widget w-widget-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.409416834253!2d76.87979391411373!3d8.556570798566623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05befa945e2447%3A0x9622564b6e405dce!2sKerala%20Startup%20Mission!5e0!3m2!1sen!2sin!4v1624858874807!5m2!1sen!2sin"
                  style={{ border: 0, height: "100%", width: "100%" }}
                  allowFullScreen={false}
                ></iframe>
              </div>
            </div>
            <div className="contact-form-div">
              <h3 className="contact-form-title-text">Give Us a Shout</h3>
              <div className="div-line"></div>
              <div className="contact-form-block w-form">
                <form
                  id="Contact-Form"
                  name="wf-form-Contact-Form"
                  data-name="Contact Form"
                  method="post"
                  className="contact-form"
                >
                  <input
                    type="text"
                    className="form-text-field w-input"
                    maxLength="256"
                    name="Name"
                    data-name="Name"
                    placeholder="Name"
                    id="Contact-Name"
                    required=""
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    value={name}
                  />
                  <input
                    type="email"
                    className="form-text-field w-input"
                    maxLength="256"
                    name="Email"
                    data-name="Email"
                    placeholder="Email"
                    id="Contact-Email"
                    required=""
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                  />
                  <input
                    type="tel"
                    className="form-text-field w-input"
                    maxLength="12"
                    name="Phone"
                    data-name="Phone"
                    placeholder="Phone"
                    id="Contact-Phone"
                    required=""
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    value={phone}
                  />
                  <input
                    type="text"
                    className="form-text-field w-input"
                    maxLength="256"
                    name="Subject"
                    data-name="Subject"
                    placeholder="Subject"
                    id="Contact-Subject"
                    required=""
                    onChange={(e) => {
                      setSubj(e.target.value);
                    }}
                    value={subj}
                  />
                  <label for="service">
                    <p>Select your required service:</p>
                  </label>
                  <select
                    name="service"
                    className="form-text-field w-input"
                    onChange={(e) => {
                      setService(e.target.value);
                    }}
                  >
                    <option value="auticare">Auticare</option>
                    <option value="auticare1">Auticare1</option>
                    <option value="auticare2">Auticare2</option>
                    <option value="auticare3">Auticare3</option>
                  </select>
                  <textarea
                    id="Contact-Message"
                    name="Message"
                    placeholder="Message"
                    maxLength="5000"
                    data-name="Message"
                    required=""
                    className="
                    form-text-area
                    w-input
                  "
                    onChange={(e) => {
                      setMsg(e.target.value);
                    }}
                    value={msg}
                  ></textarea>
                  <input
                    type="submit"
                    value="send message"
                    data-wait="Please wait..."
                    className="button-colored w-button"
                    onClick={(e) => handleSubmit(e)}
                  />
                </form>
                {submitted ? (
                  <div
                    className="error-message w-form-fail"
                    style={{ display: "block" }}
                  >
                    <div className="error-message-text">
                      Mail sent succesfully our team will get back to you soon.
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              <div className="contact-info-container">
                <div className="contact-info">
                  <strong>Phone: </strong>+91 9895496049, +91 8792975982
                </div>
                <div className="contact-info">
                  <span>
                    <strong>Location: </strong>
                  </span>
                  Kerala Startup Mission - Accelerator for Electronics
                  Technologies (ACE)CDAC Building, Technopark, Kazhakkoottam,
                  Thiruvananthapuram
                </div>
                <div className="contact-info">
                  <strong>Email: </strong>mail@embrightinfotech.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

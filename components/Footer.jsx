import { socialLinks } from "../utils/social-links";
import { navLinks } from "../utils/nav-links";
import Link from "next/link";

export default function FooterComponent() {
  return (
    <>
      {/* <!-- footer section --> */}
      <div className="footer-section">
        <div className="w-layout-grid footer-grid">
          <div
            id="w-node-_2f8980ea-3aa4-c827-8d37-d20573d50104-bfc55b0f"
            className="footer-column-1"
          >
            <div className="w-layout-grid footer-links-grid">
              {Object.keys(navLinks).map((item) => (
                <Link href={navLinks[item].link} key={navLinks[item].id}>
                  <a className="footer-link">{navLinks[item].name}</a>
                </Link>
              ))}
            </div>
            <div className="footer-copyright-text"></div>
          </div>
          <div className="newsletter-form-block w-form"></div>
          <div className="footer-column-2">
            <div className="w-layout-grid footer-links-grid">
              {Object.keys(socialLinks).map((sm) => (
                <a
                  href={socialLinks[sm].link}
                  className="footer-link"
                  target="_blank"
                  rel="noopener"
                  key={socialLinks[sm].id}
                >
                  {socialLinks[sm].name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

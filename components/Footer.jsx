import { socialLinks } from "../utils/social-links";
import { navLinks } from "../utils/nav-links";
import Link from "next/link";

export default function FooterComponent() {
  return (
    <>
      {/* <!-- footer section --> */}
      <div class="footer-section">
        <div class="w-layout-grid footer-grid">
          <div
            id="w-node-_2f8980ea-3aa4-c827-8d37-d20573d50104-bfc55b0f"
            class="footer-column-1"
          >
            <div class="w-layout-grid footer-links-grid">
              {Object.keys(navLinks).map((item) => (
                <Link href={navLinks[item].link}>
                  <a class="footer-link">{navLinks[item].name}</a>
                </Link>
              ))}
            </div>
            <div class="footer-copyright-text"></div>
          </div>
          <div class="newsletter-form-block w-form"></div>
          <div class="footer-column-2">
            <div class="w-layout-grid footer-links-grid">
              {Object.keys(socialLinks).map((sm) => (
                <a
                  href={socialLinks[sm].link}
                  class="footer-link"
                  target="_blank"
                  rel="noopener"
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

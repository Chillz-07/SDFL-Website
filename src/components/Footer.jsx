
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  const quickLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Programmes", link: "#services" },
    { name: "Services", link: "#services" },
  ];

  const supportLinks = [
    { name: "Contact Us", link: "#contact" },
    { name: "FAQs", link: "/faqs" },
    { name: "Downloads", link: "/downloads" },
    { name: "Privacy Policy", link: "/privacy-policy" },
  ];

  // Replace with SDFL's verified office address
  const officeAddress = "SDFL Office Address, Sri Lanka";

  // Add verified official social media URLs
  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      className: "facebook",
      url: "",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      className: "linkedin",
      url: "",
    },
    {
      name: "YouTube",
      icon: <FaYoutube />,
      className: "youtube",
      url: "",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      className: "instagram",
      url: "",
    },
  ];

  return (
    <footer className="sdfl-footer">
      <div className="footer-container">

        {/* QUICK LINKS */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <ul>
            {quickLinks.map((item) => (
              <li key={item.name}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* SUPPORT */}
        <div className="footer-column">
          <h3>Support</h3>

          <ul>
            {supportLinks.map((item) => (
              <li key={item.name}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* LOCATION */}
        <div className="footer-column footer-location">
          <h3>Our Location</h3>

          <div className="footer-address">
            <FaMapMarkerAlt
              className="footer-location-icon"
              aria-hidden="true"
            />

            <div>
              <p>{officeAddress}</p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Skill+Development+Fund+Limited+Sri+Lanka"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-map-link"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* SOCIAL MEDIA */}
        <div className="footer-column footer-social">
          <h3>Connect With Us</h3>

          <div className="footer-social-icons">
            {socialLinks.map((social) =>
              social.url ? (
                <a
                  key={social.name}
                  href={social.url}
                  className={`social-icon ${social.className}`}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ) : (
                <span
                  key={social.name}
                  className={`social-icon ${social.className}`}
                  title={`${social.name} link coming soon`}
                  aria-label={`${social.name} link coming soon`}
                >
                  {social.icon}
                </span>
              )
            )}
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Skill Development
          Fund Limited. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

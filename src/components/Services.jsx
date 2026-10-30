
import {
  GraduationCap,
  FileText,
  ChartNoAxesColumnIncreasing,
  UsersRound,
} from "lucide-react";

import "./Services.css";

function Services() {
  const services = [
    {
      title: "Training Programs",
      description:
        "Access industry-relevant programs to gain practical skills and certifications.",
      icon: GraduationCap,
      color: "#3158e8",
    },
    {
      title: "Registration & Enrollment",
      description:
        "Simple and convenient registration process for individuals and organizations.",
      icon: FileText,
      color: "#e58a47",
    },
    {
      title: "Certification Verification",
      description:
        "Verify certificates easily and securely through our online system.",
      icon: ChartNoAxesColumnIncreasing,
      color: "#4a9c69",
    },
    {
      title: "Industry Collaboration",
      description:
        "Partnering with industries to create better opportunities for a skilled workforce.",
      icon: UsersRound,
      color: "#7b45b2",
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-container">

        <div className="services-heading">
          <h2>
            Everything You Need to{" "}
            <span>Build Your Future</span>
          </h2>

          <p>
            Comprehensive services designed for individuals,
            businesses, and communities.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const IconComponent = service.icon;

            return (
              <article
                className="service-card"
                key={service.title}
              >
                <div
                  className="service-icon"
                  style={{ color: service.color }}
                >
                  <IconComponent
                    size={62}
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Services;

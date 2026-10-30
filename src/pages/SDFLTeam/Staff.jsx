
import "./SDFLTeam.css";

const staffMembers = [
  {
    id: 1,
    name: "Ms. Tilda De Alwis",
    role: "General Manager",
    email: "generalmanager.sdfl@gmail.com",
    phone: "Unfortunately Unavailable",
    image: null,
  },
  {
    id: 2,
    name: "Mr. Hiran Radeesha",
    role: "Accountant",
    email: "acc.sdfl@gmail.com",
    phone: "Unfortunately Unavailable",
    image: null,
  },
  {
    id: 3,
    name: "Ms. Sadhna Gunawardane",
    role: "Programme Officer (Division 01)",
    email: "sadhee19@gmail.com",
    phone: "Unfortunately Unavailable",
    image: null,
  },
  {
    id: 4,
    name: "Mr. Gayan Muthukumarane",
    role: "Programme Coordinator (Division 01)",
    email: "gayanskillsdevelopment@gmail.com",
    phone: "Unfortunately Unavailable",
    image: null,
  },
  {
    id: 5,
    name: "Ms. Suraji Wadduwage",
    role: "Programme Officer (Division 02)",
    email: "division2sdfl@gmail.com",
    phone: "Unfortunately Unavailable",
    image: null,
  },
  {
    id: 6,
    name: "Mr. Kasun Wickramarathne",
    role: "Programme Coordinator (Division 02)",
    email: "kasunsdfl@gmail.com",
    phone: "Unfortunately Unavailable",
    image: null,
  },
  {
    id: 7,
    name: "Ms. Dhanushka Paththinige",
    role: "Programme Coordinator (Division 02)",
    email: "dpaththinigama1@gmail.com",
    phone: "Unfortunately Unavailable",
    image: null,
  },
  {
    id: 8,
    name: "Ms. Isuri Anjana",
    role: "Programme Officer (Division 03)",
    email: "isurisenarathsdfl@gmail.com",
    phone: "Unfortunately Unavailable",
    image: null,
  },
  {
    id: 9,
    name: "Ms. Kaveesha Kumarasiri",
    role: "Programme Coordinator (Division 03)",
    email: "kaveeshasdfl@gmail.com",
    phone: "Unfortunately Unavailable",
    image: null,
  },
  {
    id: 10,
    name: "Mr. Namod Gimhana",
    role: "Management Assistant (IT & Digitalization)",
    email: "udnamod98@gmail.com",
    phone: "Unfortunately Unavailable",
    image: null,
  },
  {
    id: 11,
    name: "Ms. Madubhashini Saddhamangala",
    role: "Administrative Officer",
    email: "sumedhamadhu@yahoo.com",
    phone: "Unfortunately Unavailable",
    image: null,
  },
];

export default function Staff() {
  return (
    <div className="team-listing">
      <div className="team-listing-heading">
        <span>OUR PEOPLE</span>
        <h2>Meet Our Staff</h2>
        <p>
          The dedicated professionals supporting
          the mission of Skill Development Fund Limited.
        </p>
      </div>

      <div className="staff-grid">
        {staffMembers.map((member) => (
          <article className="staff-card" key={member.id}>
            <div className="staff-image-wrapper">
              {member.image ? (
                <img src={member.image} alt={member.name} />
              ) : (
                <div className="staff-image-placeholder">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    width="65"
                    height="65"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21v-2a8 8 0 0 1 16 0v2" />
                  </svg>
                </div>
              )}
            </div>

            <div className="staff-card-content">
              <h3>{member.name}</h3>
              <p className="staff-role">{member.role}</p>

              <div className="staff-contact-details">
                <p>
                  <span aria-hidden="true">✉</span>
                  <a href={`mailto:${member.email}`}>
                    {member.email}
                  </a>
                </p>

                <p>
                  <span aria-hidden="true">☎</span>
                  {member.phone}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

import { Briefcase } from "lucide-react";
import styles from "./Experience.module.css";

interface Role {
  title: string;
  period: string;
  highlights?: string[];
}

interface Company {
  company: string;
  location: string;
  stack: string[];
  roles: Role[];
}

const experience: Company[] = [
  {
    company: "Uberall",
    location: "Remote",
    stack: ["Kotlin", "Spring", "Python", "LangGraph", "AWS", "Kubernetes"],
    roles: [
      {
        title: "Principal Software Engineer",
        period: "Aug 2026 — Present",
        highlights: [
          "Steering long-term technical vision and architectural standards to build resilient, ultra-performant backend systems across our AWS ecosystem.",
          "Establishing security frameworks, threat modeling and governance for production AI orchestration — secure LLM integrations, robust guardrails and enterprise-grade data privacy.",
          "Architecting high-throughput, fault-tolerant microservices with a focus on platform reliability, low-latency execution and system elasticity.",
          "Empowering engineers through technical mentorship, fostering a culture of operational excellence, and bridging deep technical strategy with business goals.",
        ],
      },
      {
        title: "Staff Software Engineer",
        period: "Jul 2024 — Aug 2026",
      },
      {
        title: "Senior Software Engineer",
        period: "Aug 2022 — Jul 2024",
      },
    ],
  },
  {
    company: "AGCO Corporation",
    location: "Remote",
    stack: ["Java", "Spring", "Kubernetes", "Amazon EKS"],
    roles: [
      {
        title: "Senior Software Engineer",
        period: "Mar 2021 — Aug 2022",
      },
    ],
  },
  {
    company: "GE Healthcare",
    location: "Hungary",
    stack: ["Java", "Reactive", "WebSockets", "Kubernetes"],
    roles: [
      {
        title: "Software Engineer",
        period: "Apr 2020 — Mar 2021",
      },
    ],
  },
  {
    company: "EPAM Systems",
    location: "Hungary",
    stack: ["Java", "Kotlin", "Spring", "Kubernetes"],
    roles: [
      {
        title: "Software Engineer",
        period: "Aug 2019 — Apr 2020",
      },
      {
        title: "Junior Software Engineer",
        period: "Sep 2018 — Aug 2019",
      },
    ],
  },
  {
    company: "simpleSoft Ltd.",
    location: "Hungary",
    stack: ["Java", "Spring", "Liferay", "Angular"],
    roles: [
      {
        title: "Web Application Developer",
        period: "Mar 2017 — Aug 2018",
      },
    ],
  },
  {
    company: "Telekom",
    location: "Hungary",
    stack: ["Java", "Android"],
    roles: [
      {
        title: "Student Intern",
        period: "Aug 2015 — Mar 2017",
      },
    ],
  },
];

export function Experience() {
  return (
    <section className={styles.section} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.timeline}>
        {experience.map((entry) => (
          <div key={entry.company} className={styles.item}>
            <div className={styles.marker}>
              <Briefcase size={16} />
            </div>
            <div className={`${styles.card} glass`}>
              <div className={styles.companyHeader}>
                <span className={styles.company}>{entry.company}</span>
                <span className={styles.location}>{entry.location}</span>
              </div>
              <div className={styles.stack}>
                {entry.stack.map((tech) => (
                  <span key={tech} className={styles.tech}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className={styles.roles}>
                {entry.roles.map((role) => (
                  <div key={role.title} className={styles.role}>
                    <div className={styles.roleHeader}>
                      <h3 className={styles.roleTitle}>{role.title}</h3>
                      <span className={styles.period}>{role.period}</span>
                    </div>
                    {role.highlights && (
                      <ul className={styles.highlights}>
                        {role.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

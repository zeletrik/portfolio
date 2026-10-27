import { Terminal, Server, Cloud, BrainCircuit, ArrowUpRight } from 'lucide-react';
import styles from './Hero.module.css';

// Year earned. AWS and CKAD have since expired, so no "active" wording here.
const certifications = [
    {
        name: 'Large Language Model Operations (LLMOps)',
        year: 2026,
        url: 'https://www.coursera.org/account/accomplishments/specialization/QK7HJ885UN5Y',
        icon: BrainCircuit,
    },
    {
        name: 'AWS Certified Solutions Architect – Associate',
        year: 2023,
        url: 'https://www.credly.com/badges/199e645d-3012-4d55-b35e-cfe5a152eb0e',
        icon: Cloud,
    },
    {
        name: 'CKAD: Kubernetes Application Developer',
        year: 2019,
        url: 'https://www.credly.com/badges/4f31f18f-fbaa-4150-a3b8-27e5f3db8167',
        icon: Server,
    },
];

export function Hero() {
    return (
        <section className={styles.hero} id="top">
            <div className={styles.content}>
                <div className={styles.badge}>
                    <Terminal size={16} />
                    <span>Creating the cornerstones of AI platforms</span>
                </div>

                <h1 className={styles.title}>
                    Patrik <span className={styles.accent}>Zelena</span>
                </h1>

                <h2 className={styles.subtitle}>
                    Principal Software Engineer
                </h2>

                <p className={styles.description}>
                    Currently, I'm building the <strong>Kotlin & Spring Boot</strong> foundations other teams use to ship <strong>LLM-powered agents</strong>: MCP integration, message routing, memory and guardrails, running on <strong>AWS</strong> and <strong>Kubernetes</strong>.
                    <br /><br />
                    Off the clock: <strong>specialty coffee</strong> enthusiast and a <strong>homelab</strong> builder to self-host my side projects and experiments.
                </p>

                <div className={styles.certs}>
                    {certifications.map(({ name, year, url, icon: Icon }) => (
                        <a key={name} href={url} target="_blank" rel="noopener noreferrer" className={`${styles.certItem} surface`}>
                            <Icon className={styles.icon} />
                            <span>{name}</span>
                            <span className={styles.year}>{year}</span>
                            <ArrowUpRight size={16} className={styles.arrow} aria-hidden="true" />
                        </a>
                    ))}
                </div>
            </div>

            <div className={styles.visual}>
                {/* Abstract decorative element */}
                <div className={styles.glow} />
            </div>
        </section>
    );
}

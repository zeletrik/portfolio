import { Terminal, Server, Cloud } from 'lucide-react';
import styles from './Hero.module.css';

export function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <div className={styles.badge}>
                    <Terminal size={16} />
                    <span>Backend & AI Developer - Software Architect</span>
                </div>

                <h1 className={styles.title}>
                    Patrik <span className="text-gradient">Zelena</span>
                </h1>

                <h2 className={styles.subtitle}>
                    Staff Backend Software Engineer
                </h2>

                <p className={styles.description}>
                    Specializing in scalable <strong>Backend</strong> systems with <strong>Kotlin & Spring Boot</strong> running on <strong>Kubernetes</strong> and <strong>AWS</strong>.
                    <br />
                    Currently exploring the frontier of <strong>AI Development</strong> with <strong>Python & LangChain</strong>.
                </p>

                <div className={styles.certs}>
                    <a href="https://www.credly.com/badges/199e645d-3012-4d55-b35e-cfe5a152eb0e" target="_blank" rel="noopener noreferrer">
                        <div className={`${styles.certItem} glass`}>
                            <Cloud className={styles.icon} />
                            <span>AWS Certified Solutions Architect</span>
                        </div>
                    </a>
                    <a href="https://www.credly.com/badges/4f31f18f-fbaa-4150-a3b8-27e5f3db8167" target="_blank" rel="noopener noreferrer">
                        <div className={`${styles.certItem} glass`}>
                            <Server className={styles.icon} />
                            <span>CKAD: Kubernetes Application Developer</span>
                        </div>
                    </a>
                </div>
            </div>

            <div className={styles.visual}>
                {/* Abstract decorative element */}
                <div className={styles.glow} />
                <div className={styles.grid} />
            </div>
        </section>
    );
}

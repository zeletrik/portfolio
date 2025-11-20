import { Github, Linkedin, Mail } from 'lucide-react';
import styles from './Footer.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.socials}>
                    <a href="https://github.com/zeletrik" target="_blank" rel="noopener noreferrer" className={styles.link}>
                        <Github size={24} />
                    </a>
                    {/* Placeholder links for LinkedIn/Email as they weren't provided, but good to have structure */}
                    <a href="https://linkedin.com/in/zeletrik" target="_blank" rel="noopener noreferrer" className={styles.link}>
                        <Linkedin size={24} />
                    </a>
                    <a href="mailto:zeletrik@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
                        <Mail size={24} />
                    </a>
                </div>
                <p className={styles.copyright}>
                    © {new Date().getFullYear()} Patrik Zelena. Built with React & Vite.
                </p>
            </div>
        </footer>
    );
}

import styles from './Header.module.css';

const links = [
    { href: '#skills', label: 'Expertise' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
];

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <a href="#top" className={styles.brand}>
                    Patrik <span className={styles.brandAccent}>Zelena</span>
                </a>
                <nav className={styles.nav} aria-label="Section navigation">
                    {links.map(link => (
                        <a key={link.href} href={link.href} className={styles.link}>{link.label}</a>
                    ))}
                </nav>
            </div>
        </header>
    );
}

import type { CSSProperties } from 'react';
import { Briefcase, FolderGit2, Layers, Mail, UserRound } from 'lucide-react';
import { useActiveSection } from '../hooks/useActiveSection';
import styles from './Header.module.css';

const sections = [
    { id: 'top', label: 'About', icon: UserRound },
    { id: 'skills', label: 'Expertise', icon: Layers },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'contact', label: 'Contact', icon: Mail },
];

const ids = sections.map(section => section.id);

export function Header() {
    const [active, pin] = useActiveSection(ids);
    const current = (id: string) => (active === id ? 'location' : undefined);

    return (
        <>
            <header className={styles.header}>
                <div className={styles.inner}>
                    <a href="#top" className={styles.brand} onClick={() => pin('top')}>
                        Patrik <span className={styles.brandAccent}>Zelena</span>
                    </a>
                    <nav className={styles.nav} aria-label="Section navigation">
                        {sections.slice(1).map(({ id, label }) => (
                            <a key={id} href={`#${id}`} className={styles.link} aria-current={current(id)} onClick={() => pin(id)}>
                                {label}
                            </a>
                        ))}
                    </nav>
                </div>
            </header>

            {/* Phones get a floating tab bar instead of the top links. It lives outside
                <header> because the header's backdrop-filter would become its containing block. */}
            <nav
                className={styles.tabBar}
                aria-label="Section navigation"
                style={{ '--index': ids.indexOf(active), '--count': sections.length } as CSSProperties}
            >
                <span className={styles.indicator} aria-hidden="true" />
                {sections.map(({ id, label, icon: Icon }) => (
                    <a key={id} href={`#${id}`} className={styles.tab} aria-current={current(id)} onClick={() => pin(id)}>
                        <Icon size={22} className={styles.tabIcon} aria-hidden="true" />
                        <span>{label}</span>
                    </a>
                ))}
            </nav>
        </>
    );
}

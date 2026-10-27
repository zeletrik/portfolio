import { ArrowUpRight } from 'lucide-react';
import styles from './SideProjects.module.css';

interface SideProject {
    name: string;
    blurb: string;
    url: string;
    // Flip to true when the app ships; until then the name stays plain text with "Coming soon"
    live: boolean;
}

// Each site shares the portfolio's look via websites/initial/assets/zeletrik-family.css in its repo
const sideProjects: SideProject[] = [
    { name: 'Beancodex', blurb: 'a private coffee logbook', url: 'https://beancodex.zeletrik.eu', live: false },
    { name: 'Shiso', blurb: 'a calm, private recipe keeper', url: 'https://shiso.zeletrik.eu', live: false },
];

export function SideProjects() {
    return (
        <div className={styles.aside}>
            <h3 className={styles.heading}>In the works</h3>
            <ul className={styles.list}>
                {sideProjects.map(({ name, blurb, url, live }) => (
                    <li key={name} className={styles.item}>
                        {live ? (
                            <a href={url} className={styles.link}>
                                {name}
                                <ArrowUpRight size={14} aria-hidden="true" />
                            </a>
                        ) : (
                            <span className={styles.name}>{name}</span>
                        )}
                        <span className={styles.blurb}>, {blurb}</span>
                        {!live && <span className={styles.soon}>Coming soon</span>}
                    </li>
                ))}
            </ul>
        </div>
    );
}

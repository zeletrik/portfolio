import { Star, ArrowUpRight, GitFork } from 'lucide-react';
import type { Repo } from '../services/github';
import { getLanguageColor } from '../utils/languageColors';
import styles from './RepoCard.module.css';

interface RepoCardProps {
    repo: Repo;
}

export function RepoCard({ repo }: RepoCardProps) {
    return (
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className={`${styles.card} surface`}>
            <div className={styles.header}>
                <h3 className={styles.name}>{repo.name}</h3>
                <ArrowUpRight size={18} className={styles.linkIcon} aria-hidden="true" />
            </div>

            <p className={styles.description}>{repo.description || 'No description available.'}</p>

            <div className={styles.footer}>
                <div className={styles.stats}>
                    {repo.language && (
                        <span className={styles.language}>
                            <span
                                className={styles.langDot}
                                style={{ backgroundColor: getLanguageColor(repo.language) }}
                            />
                            {repo.language}
                        </span>
                    )}
                    <span className={styles.stat}>
                        <Star size={14} />
                        {repo.stargazers_count}
                    </span>
                    <span className={styles.stat}>
                        <GitFork size={14} />
                        {repo.forks_count}
                    </span>
                </div>

                <div className={styles.topics}>
                    {repo.topics.slice(0, 3).map(topic => (
                        <span key={topic} className={styles.topic}>{topic}</span>
                    ))}
                </div>
            </div>
        </a>
    );
}

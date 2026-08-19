import { useEffect, useState } from 'react';
import { fetchRepos, type Repo } from '../services/github';
import { RepoCard } from './RepoCard';
import styles from './RepoList.module.css';

type Status = 'loading' | 'ready' | 'error';

export function RepoList() {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [status, setStatus] = useState<Status>('loading');

    useEffect(() => {
        let cancelled = false;
        fetchRepos('zeletrik')
            .then(data => {
                if (cancelled) return;
                setRepos(data);
                setStatus('ready');
            })
            .catch(() => {
                if (cancelled) return;
                setStatus('error');
            });
        return () => {
            cancelled = true;
        };
    }, []);

    return (
        <section className={styles.section} id="projects">
            <h2 className={styles.title}>Featured Projects</h2>

            {status === 'loading' && (
                <div className={styles.grid}>
                    {Array.from({ length: 6 }, (_, i) => (
                        <div key={i} className={`${styles.skeleton} glass`}>
                            <div className={styles.skeletonLine} style={{ width: '50%' }} />
                            <div className={styles.skeletonLine} style={{ width: '90%' }} />
                            <div className={styles.skeletonLine} style={{ width: '75%' }} />
                            <div className={styles.skeletonLine} style={{ width: '40%' }} />
                        </div>
                    ))}
                </div>
            )}

            {status === 'error' && (
                <p className={styles.error}>
                    Couldn’t load projects right now — browse them directly on{' '}
                    <a href="https://github.com/zeletrik" target="_blank" rel="noopener noreferrer">GitHub</a>.
                </p>
            )}

            {status === 'ready' && (
                <div className={styles.grid}>
                    {repos.map(repo => (
                        <RepoCard key={repo.id} repo={repo} />
                    ))}
                </div>
            )}
        </section>
    );
}

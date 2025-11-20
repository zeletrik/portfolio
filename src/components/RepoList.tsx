import { useEffect, useState } from 'react';
import { fetchRepos, type Repo } from '../services/github';
import { RepoCard } from './RepoCard';
import styles from './RepoList.module.css';

export function RepoList() {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadRepos() {
            const data = await fetchRepos('zeletrik');
            setRepos(data);
            setLoading(false);
        }
        loadRepos();
    }, []);

    if (loading) {
        return <div className={styles.loading}>Loading repositories...</div>;
    }

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Featured Projects</h2>
            <div className={styles.grid}>
                {repos.map(repo => (
                    <RepoCard key={repo.id} repo={repo} />
                ))}
            </div>
        </section>
    );
}

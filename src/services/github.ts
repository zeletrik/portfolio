export interface Repo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    language: string;
    updated_at: string;
    topics: string[];
}

// Curated, ordered list of repos to feature. Edit this to change what shows up
// (and in which order) — anything not listed here is hidden.
const FEATURED_REPOS = [
    'kotlin-spring-ai-rag-demo',
    'cloud-native-intro',
    'aws-lambda-kotlin-demo',
    'efk-local-m1',
    'HRecSys',
    'diabetes-diary',
];

export async function fetchRepos(username: string): Promise<Repo[]> {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
    if (!response.ok) {
        throw new Error(`GitHub API responded with ${response.status}`);
    }
    const data: (Repo & { fork: boolean })[] = await response.json();
    const featured = FEATURED_REPOS
        .map(name => data.find(repo => repo.name === name))
        .filter((repo): repo is Repo & { fork: boolean } => repo !== undefined);

    if (featured.length > 0) {
        return featured;
    }

    // Safety net: if the allowlist matches nothing, fall back to the top starred repos.
    return data
        .filter(repo => !repo.fork)
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 6);
}

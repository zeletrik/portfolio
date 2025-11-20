export interface Repo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    language: string;
    updated_at: string;
    topics: string[];
}

export async function fetchRepos(username: string): Promise<Repo[]> {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
        if (!response.ok) {
            throw new Error('Failed to fetch repos');
        }
        const data = await response.json();
        return data
            .filter((repo: any) => !repo.fork)
            .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count);
    } catch (error) {
        console.error('Error fetching repos:', error);
        return [];
    }
}

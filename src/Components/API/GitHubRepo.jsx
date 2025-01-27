import React, { useEffect, useState } from 'react';
import './GitHubRepo.css'

const GitHubRepos = () => {
    const [repos, setRepos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecentRepositories = async () => {
            try {
                const response = await fetch('https://api.github.com/users/Motuma5200/repos?sort=created&direction=desc');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setRepos(data.slice(0, 5)); // Get only the first 6 repositories
            } catch (err) {
                setError(err.message);
            }
        };

        fetchRecentRepositories();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <section className='GitRepo section' id="github-repos">
            <h1 className='section-tittle' >API Repository</h1>
            <span className="section-subtittle">Recent GitHub Repositories</span>
            <div className='repo__container container grid' id="repos">
                {repos.map(repo => (
                    <div className="repo" key={repo.id}>
                        <div className="repo-header">
                            <img src={repo.owner.avatar_url} alt={`${repo.owner.login}'s avatar`} className="avatar" />
                            <h3>
                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                    {repo.name}
                                </a>
                            </h3>
                        </div>
                        <p>{repo.description || 'No description available.'}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default GitHubRepos;




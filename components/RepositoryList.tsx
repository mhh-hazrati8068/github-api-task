import React from "react";
import { Repository } from "../types/user";
import styles from "../styles/RepositoryList.module.scss";

interface RepositoryListProps {
  repositories: Repository[];
}

const RepositoryList: React.FC<RepositoryListProps> = ({ repositories }) => {
  return (
    <div className={styles.repositoryList}>
      <h3>Repositories:</h3>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.name}>
            <p>Name: {repo.name}</p>
            <p>Stars: {repo.stargazers_count}</p>
            <p>Forks: {repo.forks_count}</p>
            <p>
              Last Updated: {new Date(repo.updated_at).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepositoryList;

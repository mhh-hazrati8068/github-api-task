import React, { useEffect, useState } from "react";
import axios from "axios";
import RepositoryList from "../components/RepositoryList";
import SearchInput from "../components/SearchInput";
import { Repository } from "../types/user";
import styles from "../styles/most-popular.module.scss";

const MostPopularPage: React.FC = () => {
  const [popularRepositories, setPopularRepositories] = useState<Repository[]>(
    []
  );

  useEffect(() => {
    fetchPopularRepositories();
  }, []);

  const fetchPopularRepositories = async () => {
    try {
      const response = await axios.get(
        "https://api.github.com/search/repositories?q=stars:>1&sort=stars&order=desc"
      );
      const popularRepos = response.data.items.slice(0, 10);
      setPopularRepositories(popularRepos);
    } catch (error) {
      console.error("Error fetching popular repositories:", error);
    }
  };

  const filterRepositories = (filterText: string) => {
    if (filterText.length >= 3) {
      const filteredRepos = popularRepositories.filter((repo) =>
        repo.name.toLowerCase().includes(filterText.toLowerCase())
      );
      setPopularRepositories(filteredRepos);
    } else {
      fetchPopularRepositories();
    }
  };

  return (
    <div className={styles.mostPopular}>
      <h1>Most Popular Repositories</h1>
      <SearchInput onFilter={filterRepositories} />
      <RepositoryList repositories={popularRepositories} />
    </div>
  );
};

export default MostPopularPage;

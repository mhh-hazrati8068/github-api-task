import React, { useEffect, useState } from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import axios from "axios";
import { ParsedUrlQuery } from "querystring";
import { User } from "../types/user";
import styles from "../styles/username.module.scss";

interface UserPageProps {
  user: User;
}

const UserPage: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ user }) => {
  const [starCount, setStarCount] = useState(0);
  const [forkCount, setForkCount] = useState(0);
  const [latestUpdate, setLatestUpdate] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    fetchUserData(user.login);
    fetchRepositories(user.login);
  }, [user]);

  const fetchUserData = async (username: string) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      const userData = response.data;
      setAddress(userData.location || "Location not available");
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const fetchRepositories = async (username: string) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      const repositories = response.data;
      const stars = repositories.reduce(
        (total: number, repo: any) => total + repo.stargazers_count,
        0
      );
      const forks = repositories.reduce(
        (total: number, repo: any) => total + repo.forks_count,
        0
      );
      setStarCount(stars);
      setForkCount(forks);

      // Find the latest update time among all repositories
      const latestUpdateTime = repositories.reduce((latest: string, repo: any) => {
        return repo.updated_at > latest ? repo.updated_at : latest;
      }, "");
      setLatestUpdate(latestUpdateTime);
    } catch (error) {
      console.error("Error fetching repositories:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>User Details</h1>
      <div>
        <img src={user.avatar_url} alt={`${user.login} avatar`} />
        <h2>name :{user.name}</h2>
        <p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            GitHub Profile
          </a>
        </p>
        <p>Address: {address}</p>
        <p>Stars: {starCount}</p>
        <p>Forks: {forkCount}</p>
        <p>Last Update: {latestUpdate}</p>
        <p>Number of Public Repos: {user.public_repos}</p>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<UserPageProps> = async ({
  params,
}) => {
  const { username } = params || {}; // Check if params is undefined and provide a fallback
  if (!username) {
    return {
      notFound: true,
    };
  }

  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    const user = response.data;
    return {
      props: {
        user,
      },
    };
  } catch (error) {
    console.error("Error fetching user data:", error);
    return {
      notFound: true,
    };
  }
};

export default UserPage;

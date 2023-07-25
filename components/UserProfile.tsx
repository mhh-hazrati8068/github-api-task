import React from "react";
import { User } from "../types/user";
import styles from "../styles/UserProfile.module.scss";

interface UserProfileProps {
  user: User;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className={styles.userProfile}>
      <img src={user.avatar_url} alt={`${user.login} avatar`} />
      <h2>{user.name}</h2>
      <p>
        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
          GitHub Profile
        </a>
      </p>
      <p>Number of Public Repos: {user.public_repos}</p>
    </div>
  );
};

export default UserProfile;

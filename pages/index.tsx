import React from "react";
import Link from "next/link";
import styles from "../styles/index.module.scss";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to GitHub User Search</h1>
      <Link href="/most-popular" className={styles.link}>Most Popular Repositories</Link>
    </div>
  );
};

export default Home;

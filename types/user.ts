export interface User {
  name: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  login: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

export interface Repository {
  name: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

export interface SearchProps {
	onSearch: (username: string) => void;
}

export interface GitHubUser {
	login: string;
	avatar_url: string;
	html_url: string;
	name: string;
	location: string;
	public_repos: number;
}

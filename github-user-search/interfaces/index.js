export interface SearchProps {
	onSearch: (username: string) => void;
}

export interface GitHubUser {
	login: string;
	avater: string;
	html_url: string;
	name: string;
}

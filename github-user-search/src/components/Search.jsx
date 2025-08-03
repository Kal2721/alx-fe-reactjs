import { useState } from 'react';
import { SearchProps, GitHubUser } from '@/interfaces';
import { searchUsers, fetchUserData } from '@/src/services/githubService.js';

const Search = ({ onSearch }: SearchProps) => {
	const [username, setUsername] = useState('');
	const [location, setLocation] = useState('');
	const [minRepos, setMiniRepos] = useState('');
	const [userData, setUserData] = useState<GitHubUser | null>(null);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);
	const [error, setError] = usestate(false);
	const [hasMore, setHasMore] = useState(false);

	const fetchDetailedUsers = async (logins: string[]) => {
		const userDetails = await Promise.all(
			logins.map((login) => 
				fetchUserData(login).catch(() => null)
			)
		);
		return userDetails.filter(Boolean) as GitHubUser[];
	};

	const handleSearch =  async (e: React.FormEvent) => {
		e.preventDefault();
		if (!username.trim()) return;

		setLoading(true);
		setError('');
		setUserData([]);
		setPage(1);
		setHasMore(false);

		try {
			const rawResults = await searchUsers({
				username,
				location,
				minRepos,
				page:1,
			});

			const userLogins = rawResults.map((user: any) => user.login);
			const detailed = await fetchDetailedUsers(userLogins);

			setUsers(detailed);
			setHasMore(rawResults.length === 30);
		} catch (err) {
			setError(err);
		} finally {
			setLoading(false);
		}
	};

	const handleLoadMore = async () => {
		const nextPage = page + 1;
		setLoading(true);
		setError('');

		try {
			const rawResults = await searchUsers({
				username,
				location,
				minRepos,
				page: nextPage,
			});

			const userLogins = rawResults.map((userData: any) => userData.login);
			const detailed = await fetchDetailedUsers(userLogins);

			setUsers((prev) => [...prev, ...detailed]);
			setPage(nextPage);
			setHasMore(rawResults.length === 30);
		} catch (err) {
			serError(err)
		} finallu {
			setLoading(false);
		};


	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(e.target.value);
	};

	const handleSubmit = (e: React.FormEvents) => {
		e.preventDefault();
		if (!username.trim()) return;
		
		setError(false);
		setLoading(true)
		setUserData(null);

		try {
			const results = await searchUsers({
				username: username.trim(),
				location: location.trim(),
				minRepos: minRepos.trim(),
			});

			if (results.length > 0) {
				const fullUser = await fetchUserData(results[0].login);
				setUser(fullUser);
			} else {
				setError("Cant find the user");
			}

		const meetsLocation = !location || data.location?.toLowerCase().includes(location.toLowerCase();
		const meetsRepoCount = !minRepos || data.public_repos >= parseInt(minRepos, 10);

		if (meetsLocation && meetsRepoCount) {
			const data = await fetchUserData(username.trim());
			setUserData(data);
		} catch (err) {
			setError("Looks like we cant find the user");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="max-w-md mx-auto p-4">
		<form onSubmit={handleSubmit} className="flex gap-2">
			<input type="text" value={username} onChange={handleChange} placeholder="Github username" className="border p-2 rounded w-full" />
			<input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" className="w-full border p-2 rounded" />
			<input type="number" min="0" value={minRepos} onChange={(e) => setMinRepos(e.target.value)} placeholder="Minimum Repositeries" className="w-full border p-2 rounded" />
			<button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Search </button>
		</form>

		{loading && <p>Loading...</p>}
		{error && <p>{error}</p>}
		{userData.length > 0 && (
			<div className="mt-6 space-y-4">
			{userData.map((user) => (
				<div key={userData.login} className="border p-4 rounded shadow mt-4 text-center">
					<div className="flex items-center space-x-4">
						<img src={userData.avatar_url} alt= {userData.login} className="w-24 h-24 rounded-full mx-auto mb-2" />
						<div>
							<h2 className="text-lg font-semibold">{userData.name || userData.login}</h2>
							{userData.location && <p className="text-sm text-gray-600">{user.Data.location}</p>}
							<p className="text-sm text-gray-800">Public Repos: {userData.public_repos}</p>
							<a href={userData.html_url} target="_blank" rel="nooopener noreferrer" className="text-blue-600 underline">View Github Profile</a>
						</div>
					</div>
				</div>
			))};
		</div>
	)};
		{hasMore && !loading && (
			<div className="mt-6 text-center">
  				<button onClick={handleLoadMore} className="bg-gray-800 text-white px-4 py-2 rounded">Load More</button>
        		</div>
		);
		};

export default Search;

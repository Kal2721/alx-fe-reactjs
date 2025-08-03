import { useState } from 'react';
import { SearchProps, GitHubUser } from '@/interfaces';

const Search = ({onSearch }: SearchProps) => {
	const [username, setUsername] = useState('');
	const [location, setLocation] = useState('');
	const [minRepos, setMiniRepos] = useState('');
	const [userData, setUserData] = useState<GitHubUser | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = usestate(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(e.target.value);
	};

	const handleSubmit = (e: React.FormEvents) => {
		e.preventDefault();
		if (!username.trim()) return;
		
		setError(false);
		setLoading(true)
		setUserData(null);

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
		{userData && (
			<div className="border p-4 rounded shadow mt-4 text-center">
				<img src={userData.avatar_url} alt= {userData.login} className="w-24 h-24 rounded-full mx-auto mb-2" />
				<h2 className="text-lg font-semibold">{userData.name || userData.login}</h2>
				{userData.location && <p className="text-sm text-gray-600">{user.Data.location}</p>}
					<p className="text-sm text-gray-800">Public Repos: {userData.public_repos}</p>
				<a href={userData.html_url} target="_blank" rel="nooopener noreferrer" className="text-blue-600 underline">View Github Profile</a>
			</div>
		};
		</div>
	);
};

export default Search;

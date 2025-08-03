import axios from 'axios';

const Base_url = "https://api.github.com";

const searchUsers = async ({ userName, location, minRepos }) => {
	try {
		let query = `${username} in:login`;

		if (location){
			query += `location:$(location)`;
		}
		if (minRepos) {
			query += `repos:>=${minRepos}`;
		}
		const response = await axios.get(`$Base_url}/search/users`,{
			params:{
				q: query,
			},
		});

		return response.data.items;
	} catch (error) {
		throw new Error('Failed to search users from Github');
	}
		

const fetchUserData = async (username: string) => {
	try {
		const response = await axios.get(`https://api.github.com/users/{username}`;
		return response.data;
	} catch (error: any) {
		if (error.response && error.response.status === 404) {
			throw new Error('USER IS NOT FOUND');
		} else {
			throw new Error('Failed to fetch new data');
		}
	}
};

export default fetchUserData;
export default searchUsers;

import axios from 'axios';

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

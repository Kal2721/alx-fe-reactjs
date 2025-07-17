import { useContext } from 'react';
import {ProfileContext} from './UserContext';

function UserDetails() {
	const profile = useContext(ProfileContext);
	return (
		<div>
			<p>Name: {profile.name}</p>
			<p>Email: {profile.email}</p>
		</div>
	);
}

export default UserDetails;

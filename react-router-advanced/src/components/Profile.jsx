import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileDetails from "./components/ProfileDetails"
import ProfileSettings from "./components/ProfileSettings"
import { Outlet, Link } from "react-router-dom"

const Profile = () => {
	return (
		<div>
			<h1>Profile Page</h1>
			<nav>
				<Router>
					<Routes>
						 <Route path="/details" element={<ProfileDetails />} />
                                		<Route path="/settings" element={<ProfileSettings />} />
					</Routes>
				</Router>
			</nav>
			
			<Outlet />
		</div>
	);
}

export default Profile;

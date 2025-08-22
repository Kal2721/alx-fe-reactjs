import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails"
import ProfileSettings from "./components/ProfileSettings"
import UserProfile from "./components/UserProfile"
import BlogPost from "./components/BlogPost";

function App() {
  return (
	  <Router>
	  	<Routes>
	  		<Route path="/profile" element={<Profile />}>
	  			<Route path="details" element={<ProfileDetails />} />
	  			<Route path="settings" element={<ProfileSettings />} />
	  		</Route>
	  		<Route path="/user/:userId" element={<UserProfile />} />
	  		<Route path="/blog/:id" element={<BlogPost />} />
	  	</Routes>
	  <Router>
  )
}

export default App

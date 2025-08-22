import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import ProfileDetails from "./pages/ProfileDetails"
import ProfileSettings from "./pages/ProfileSettings"
import UserProfile from "./pages/UserProfile"
import BlogPost from "./pages/BlogPost";

function App() {
  return (
	  <Router>
	  	<Routes>
	  		<Route path="/profile" element={<Profile />}>
	  			<Route path="details" element={<ProfileDetails />} />
	  			<Route path="settings" element={<ProfileSettings />} />
	  		</Route>
	  		<Route path="/user/:userId" element={<UserProfile />} />
	  		<Route path="/blog/:postId" element={<BlogPost />} />
	  	</Routes>
	  <Router>
  )
}

export default App

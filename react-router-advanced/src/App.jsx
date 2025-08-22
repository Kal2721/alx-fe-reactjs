import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails"
import ProfileSettings from "./components/ProfileSettings"
import UserProfile from "./components/UserProfile"
import BlogPost from "./components/BlogPost";
import { AuthProvider } from "./auth"
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
	  <AuthProvider>
	  <Router>
	  	<Routes>
	  		<Route path="/profile/" element={
				<ProtectedRoute>
				<Profile />
				</ProtectedRoute>
			}>
	  			<Route path="details" element={<ProfileDetails />} />
	  			<Route path="settings" element={<ProfileSettings />} />
	  		</Route>
	  		<Route path="/user/:userId" element={<UserProfile />} />
	  		<Route path="/blog/:id" element={<BlogPost />} />
	  	</Routes>
	  <Router>
	  </AuthProvider>
  )
}

export default App

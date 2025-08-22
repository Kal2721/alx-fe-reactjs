import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
import PostsComponent from "./components/PostsComponent"

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
	  <PostsComponet />
	</QueryClientProvider>

    </>
  );
}

export default App

import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'

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

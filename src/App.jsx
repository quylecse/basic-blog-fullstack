import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Blog } from './Blog'
export const App = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Blog></Blog>
    </QueryClientProvider>
  )
}

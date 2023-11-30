import { GlobalStyles } from './styles/global'
import { RoutesMain } from './routes/index.routes';
import { AuthProvider } from './contexts/AuthContext';

function App() {

  return (
    <>
      <GlobalStyles />
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
    </>
  )
}

export default App

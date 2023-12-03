import { GlobalStyles } from './styles/global'
import { RoutesMain } from './routes/index.routes';
import { AuthProvider } from './contexts/AuthContext';
import 'react-toastify/dist/ReactToastify.css';

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

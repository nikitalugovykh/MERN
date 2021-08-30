import { BrowserRouter } from 'react-router-dom'
import { AuthContext } from './context/AuthContext.js';
import { useAuth } from './pages/hooks/auth.hook.js';
import { useRoutes } from './routes.js';
import { Navbar } from './components/Navbar.js';
import 'materialize-css';

function App() {
  const {token, login, logout, userId} = useAuth();
  const isAuthenticated  = !!token;
  const routes = useRoutes(isAuthenticated);

  return (
    <AuthContext.Provider value = {{
      token, login, logout, userId, isAuthenticated
    }}>
      <BrowserRouter>
        { isAuthenticated && <Navbar/>} 
        <div className ="container">
          {routes}
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;

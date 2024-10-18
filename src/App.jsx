import { LoginPage } from './Components/login-page/LoginPage';
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {

  return (
    <LoginPage />
  );
}

export default App;

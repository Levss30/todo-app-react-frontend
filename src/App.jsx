import { LoginPage } from './frontend/Components/login-page/LoginPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import TodoPage from './frontend/Components/todo-page/TodoPage';
import CadastroPage from './frontend/Components/cadastro-page/CadastroPage';
import SenhaPage from './frontend/Components/senha-page/SenhaPage';

const Principal = () =>{
  return(
      <Routes>
        <Route path='/' element={<LoginPage />}/>
        <Route path='home' element={<TodoPage />}/>
        <Route path='register' element={<CadastroPage />} />
        <Route path='forgot-password' element={<SenhaPage />} />
      </Routes>
  
  
  );
};


function App() {
  return (
    <Router>
      <Principal />
    </Router>
  );
};

export default App;

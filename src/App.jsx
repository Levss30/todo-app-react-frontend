import { LoginPage } from './Components/login-page/LoginPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import TodoPage from './Components/todo-page/TodoPage';
import CadastroPage from './Components/cadastro-page/CadastroPage';

const Principal = () =>{
  return(
      <Routes>
        <Route path='/' element={<LoginPage />}/>
        <Route path='home' element={<TodoPage />}/>
        <Route path='register' element={<CadastroPage />} />
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

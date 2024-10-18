import { LoginPage } from './Components/login-page/LoginPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import TodoPage from './Components/todo-page/TodoPage';

const Principal = () =>{
  return(
      <Routes>
        <Route path='/' element={<LoginPage />}/>
        <Route path='home' element={<TodoPage />}/>
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

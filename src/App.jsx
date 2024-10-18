import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter, Route} from 'react-router-dom';

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>

      <Route path='/profile'>

      </Route>

      <Route path='/login'>

      </Route>

      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;

//import { Navbar, Login } from "./components";
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Login from './components/login';
import Register from './components/Register';
 

function App() {

  return (
  <div className="App">
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/dashboard' element={ <Dashboard /> }/>
        <Route path='/login' element={ <Login /> }/>
        <Route path='/register' element={ <Register /> }/>
      </Routes>
      
  </div>
  );
}

export default App;
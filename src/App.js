import logo from './logo.svg';
import './App.css';
import { useNavigate } from 'react-router-dom'
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom'


import Login from './components/Login'
import Home from './components/Home'
import SignUp from './components/SignUp'
import Assignments from './components/Assignments'
import Practice from './components/Practice'
import Journal from './components/Journal'


function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>
          <Route path = '/' element = { <Login /> } />
          <Route path = '/home/:userInfo' element = { <Home /> } />
          <Route path = '/signup' element = { <SignUp /> } />
          <Route path = '/assignments/:userID' element = { <Assignments /> } />
          <Route path = '/practice/:userID' element = { <Practice /> } />
          <Route path = '/journal/:userID' element = { <Journal /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

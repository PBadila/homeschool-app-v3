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
import Chores from './components/Chores'
import Calendar from './components/Calendar'
import Affirmation from './components/Affirmation'
import Administrative from './components/Administrative'
import AddAssignments from './components/AddAssignments';
import AddAffirmations from './components/AddAffirmations';
import AddEvents from './components/AddEvents';
import AddChores from './components/AddChores';
import AddPractice from './components/AddPractice';



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
          <Route path = '/chores/:userID' element = { <Chores /> } />
          <Route path = '/calendar/:userID' element = { <Calendar /> } />
          <Route path = '/affirmation/:userID' element = { <Affirmation /> } />
          <Route path = '/administrative/:userID' element = { <Administrative /> } />
          <Route path = '/addassignments' element = { <AddAssignments /> } />
          <Route path = '/addaffirmations' element = { <AddAffirmations /> } />
          <Route path = '/addevents' element = { <AddEvents /> } />
          <Route path = '/addchores' element = { <AddChores /> } />
          <Route path = '/addpractice' element = { <AddPractice /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

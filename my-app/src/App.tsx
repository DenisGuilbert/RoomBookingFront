import './App.css';
import "./css/global.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Menu } from 'semantic-ui-react';
import Rooms from './components/Rooms/Rooms';
import CreateRooms from './components/Rooms/CreateRoom';
import Bookings from './components/Bookings/Bookings';
import CreateBooking from './components/Bookings/CreateBooking';
import DeleteBooking from './components/Bookings/DeleteBooking';
import CreateUser from './components/Users/CreateUser';
import IntroductionHooks from './components/Hooks/IntroductionHooks';

function App() {
  return (
    // <div className="App">
    //   <Rooms />
    //   <CreateRooms />
    //   <Bookings />
    //   <CreateBooking />
    //   <DeleteBooking />
    //   <CreateUser />
    // </div>

    <Router>
      <div className="menuBar">
        <nav>
          <div className="menuItem">
            <Link to="/Rooms">Rooms</Link>
          </div>
          <div className="menuItem">
            <Link to="/CreateRooms">Create room</Link>
          </div>
          <div className="menuItem">
            <Link to="/Bookings">Bookings</Link>
          </div>
          <div className="menuItem">
            <Link to="/CreateBooking">Create booking</Link>
          </div>
          <div className="menuItem">
            <Link to="/DeleteBooking">Delete booking</Link>
          </div>
          <div className="menuItem">
            <Link to="/CreateUser">Create user</Link>
          </div>
          <div className="menuItem">
            <Link to="/IntroductionHooks">Introduction to hooks</Link>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Rooms">
            <Rooms />
          </Route>
          <Route path="/CreateRooms">
            <CreateRooms />
          </Route>
          <Route path="/Bookings">
            <Bookings />
          </Route>
          <Route path="/CreateBooking">
            <CreateBooking />
          </Route>
          <Route path="/DeleteBooking">
            <DeleteBooking />
          </Route>
          <Route path="/CreateUser">
            <CreateUser />
          </Route>
          <Route path="/IntroductionHooks">
            <IntroductionHooks />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;

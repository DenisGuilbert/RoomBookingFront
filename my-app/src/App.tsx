import './App.css';
import "./css/global.css";
import Rooms from './components/Rooms/Rooms';
import CreateRooms from './components/Rooms/CreateRoom';
import Bookings from './components/Bookings/Bookings';
import CreateBooking from './components/Bookings/CreateBooking';

function App() {
  return (
    <div className="App">
      {/*<Rooms />*/}
      <CreateRooms />
      <Bookings />
      <CreateBooking />
    </div>
  );
}

export default App;

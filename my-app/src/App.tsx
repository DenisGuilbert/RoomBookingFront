import './App.css';
import "./css/global.css";
import Rooms from './components/Rooms/Rooms';
import CreateRooms from './components/Rooms/CreateRoom';
import Bookings from './components/Bookings/Bookings';
import CreateBooking from './components/Bookings/CreateBooking';
import DeleteBooking from './components/Bookings/DeleteBooking';

function App() {
  return (
    <div className="App">
      <Rooms />
      <CreateRooms />
      <Bookings />
      <CreateBooking />
      <DeleteBooking />
    </div>
  );
}

export default App;

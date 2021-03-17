import './App.css';
import Rooms from './components/Rooms/Rooms';
import CreateRooms  from './components/Rooms/CreateRoom';
import Bookings from './components/Bookings/Bookings';

function App() {  
  return (
    <div className="App">
      <Rooms/>
      <CreateRooms/>
      <Bookings/>
    </div>
  );
}

export default App;

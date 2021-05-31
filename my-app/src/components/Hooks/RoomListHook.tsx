import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import client from "../../api";

export default function RoomListHook() {
    const [roomList, setRoomList] = useState([{ id: 0, name: '' }]);

    useEffect(() => {
        getRooms();
    });

    function getRooms() {
        client.get('/Rooms').then((response) => {
            setRoomList(response.data);
        })
        .catch((error) => {
            console.log(error)
        });
    }

    return (
        <div>
            <Table striped bordered hover responsive size="sm">
                <thead>
                    <tr>
                        <th className='centerText' style={{width: 50}}>Id</th>
                        <th className='centerText'>Room's name</th>
                    </tr>
                </thead>
                <tbody>
                    {roomList.map((room, key) =>
                        <tr>
                            <td>
                                {room.id}
                            </td>
                            <td>
                                {room.name}
                            </td>
                        </tr>)}
                </tbody>
            </Table>
        </div>
    )
}
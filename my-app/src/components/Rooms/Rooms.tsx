import { Component } from 'react';
import _ from "lodash";
import { fetchRooms } from '../../actions/RoomActions';
import { Room } from '../../domain/Room'
import { RootState } from '../../app/store'
import { connect } from "react-redux";

export interface ListProps {
  rooms: Room[];
  fetchRooms: () => any;
}

export class Rooms extends Component<ListProps> {

  componentDidMount(): void {
    this.props.fetchRooms();
  }

  renderRooms(): JSX.Element[] | null {
    const { rooms } = this.props;
    const tdRoomStyle = {
      borderBottom: '1px solid black',
      height: 'auto'
    };
    const trRoomStyle = {
      border: '1px solid black'
    };
    if (!rooms) {
      return null;
    }
    return rooms.map((room: Room) => {
      return <tr style={trRoomStyle}><td style={tdRoomStyle} key={room.id}>{room.id} - {room.name}</td></tr>;
    });
  }

  render() {
    const divRoomStyle = {
      padding: '10px 0px 10px 0px', //Top right bottom left
      margin: 'auto',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(#7eb3ab, #1d283a)'
    };
    const tableRoomStyle = {
      margin: 'auto',
      width: '20%',
      borderSpacing: '0',
      border: '1px solid black',
      borderRadius: '7px',
      background: 'linear-gradient(#9adbd1, #2b3c57)',
      color: 'white'
    };
    const thRoomStyle = {
      borderBottom: '1px solid black',
      height: 'auto'
    };
    return (
      <div style={divRoomStyle}>
        <table style={tableRoomStyle}>
          <thead style={thRoomStyle}>
            <tr>
              <td>
                <label>The room's list :</label>
              </td>
            </tr>
          </thead>
          <tbody>
            {this.renderRooms()}
          </tbody>
        </table>
      </div>);
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    rooms: _.values(state.room.items)
  };
};

const mapDispatchToProps = {
  fetchRooms: fetchRooms
};

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);
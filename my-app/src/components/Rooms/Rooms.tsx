import React, { Component } from 'react';
import _ from "lodash";
import { fetchRooms } from '../../actions/RoomActions';
import { Room } from '../../domain/Room'
import {RootState} from '../../app/store'

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
    if (!rooms) {
      return null;
    }
    return rooms.map((room: Room) => {
      return <div key={room.id} className="room">{room.id} - {room.name}</div>;
    });
  }

  render() {
    return <div className="ui rooms">{this.renderRooms()}</div>;
  }
}

const mapStateToProps = (state: RootState) => {
  return {
      rooms: _.rooms(state.room.items)
  };
};

const mapDispatchToProps = {
  fetchRooms: fetchRooms
};

  /*constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }

  onButtonClickCallAxios() {
    console.log('myaxios');
    fetchRooms();
  }*/

  /*state = {
    showComponent: false
  };

  render() {
    return (
      <div className='Rooms'>
        {this.state.showComponent ? <NewComponent /> : null}
        <button onClick={this.onButtonClick}>Make a new component to appear</button>
        <button onClick={this.onButtonClickCallAxios}>Call axios</button>
      </div>
    );
  }
}*/




/*class NewComponent extends React.Component {
  render() {

    const newComponentStyle = {
      color: "white",
      backgroundColor: "lightBlue",
      padding: "10px",
      fontFamily: "Arial",
      fontSize: "30px",
      height: '50px',
      border: '1px solid black'
    };
    return (
      <div style={newComponentStyle}>new component</div>
    );
  }
}*/
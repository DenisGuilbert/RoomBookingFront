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
      'border-bottom': '1px solid black',
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
      'padding': '10px 0px 10px 0px', //Top right bottom left
      'margin': 'auto',
      width : '100%',
      height : '100%',
      background: 'linear-gradient(#7eb3ab, #1d283a)'
    };
    const tableRoomStyle = {
      margin: 'auto',
      //backgroundColor: "lightBlue",
      width: '20%',
      'border-spacing': '0',
      border: '1px solid black',
      'border-radius': '7px',
      background: 'linear-gradient(#9adbd1, #2b3c57)',
      'color': 'white'
    };
    const thRoomStyle = {      
      'border-bottom': '1px solid black',
       height: 'auto'
    };
    return <div style={divRoomStyle}> <table style={tableRoomStyle}><th style={thRoomStyle}>The room's list :</th>{this.renderRooms()}</table></div>;
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
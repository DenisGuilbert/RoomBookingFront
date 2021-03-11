import { Component } from 'react';
import _ from "lodash";

import { fetchRooms } from '../../actions/RoomActions';
import { Room } from '../../domain/Room'
import { RootState } from '../../app/store'
import { connect } from "react-redux";

export interface ListProps {
    name: string;
    //fetchRooms: () => any;
}

export class CreateRooms extends Component<ListProps> {

    componentDidMount(): void {

    }

    handleSubmitForm(e) {
        //alert('The value is: ' + e.roomName);
        console.log(e);
        e.preventDefault();
        
    }

    render() {        
        const divFormStyle = {
            width: '100%',
            //height: '10%',
            border: '1px solid black',
            margin: '0 auto'
        };
        const inputFormStyle = {
            marginLeft: '10px',
        };
        const buttonFormStyle = {
            border: '1px solid black',
        };
        return (
            <div>
                <div style={divFormStyle}>
                    <form onSubmit={this.handleSubmitForm}>
                        Create a room here :
                        <br />
                        <label>Name :<input type="text" className="form-control" placeholder="Enter Room's name" name="roomName"/></label>
                        <br />
                        <input type="submit" value="Create room"/>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {
      //rooms: _.values(state.room.items)
      name: 'test'
    };
  };
  
  const mapDispatchToProps = {
    //fetchRooms: fetchRooms
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(CreateRooms);
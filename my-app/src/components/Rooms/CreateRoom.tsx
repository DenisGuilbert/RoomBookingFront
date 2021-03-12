import { Component } from 'react';
//import _ from "lodash";
import { createRoom } from '../../actions/RoomActions';
//import { fetchRooms } from '../../actions/RoomActions';
//import { Room } from '../../domain/Room'
import { RootState } from '../../app/store'
import { connect } from "react-redux";
import { debug } from 'node:console';

export interface ListProps {
    name: string;
    createRoom: (name: string) => any;
}

export interface ListState {
    name: string;
}

export class CreateRooms extends Component<ListProps, ListState> {

    constructor(props : /*readonly<ListProps>*/ ListProps) {
        super(props);
        this.state = { name: props.name };
    }

    componentDidMount(): void {

    }

    //TODO DG : I must have made a mapping error...
    handleInputChange = e => {
        console.log('e.target.value : ' + e.target.value); //Bug : Write only the last letter wite on keyboard 
        this.setState({name: e.target.value});
    }

    handleSubmitButton = e => {        
        createRoom(this.state.name); //Doesn't seems to work.
    }

    render() {
        const divFormStyle = {
            width: '20%',
            //height: '100%',
            border: '1px solid black',
            borderRadius: '5px',
            margin: '1% 0% 0% 40%',
            padding: '10px'
        };
        const inputFormStyle = {
            //borderRadius: '3px',
        };
        const buttonFormStyle = {
            backgroundColor: '#7eb3ab',
            borderRadius: '5px',
            border: '1px solid #1d283a'
        };
        return (
            <div style={divFormStyle}>
                <label>Create a room here :</label>
                <br />
                <label>Name :<input type="text" placeholder="Enter Room's name" value={this.state.name} onChange={this.handleInputChange} style={inputFormStyle} /*required*/ /></label>
                <br />
                <button value="Create room" onClick={this.handleSubmitButton} style={buttonFormStyle}>Create room</button>

            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        name: state.room.name
    };
};

const mapDispatchToProps = { //evenements
    createRoom: createRoom
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateRooms);
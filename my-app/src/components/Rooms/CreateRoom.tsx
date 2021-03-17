import { Component } from 'react';
import { createRoom } from '../../actions/RoomActions';
import { RootState } from '../../app/store'
import { connect } from "react-redux";
import { debug } from 'node:console';

export interface ListProps {
    name: string;
    creationStatus: boolean;
    createRoom: (name: string) => any;
}

export interface ListState {
    name: string;
    //creationStatus: boolean;
}

export class CreateRooms extends Component<ListProps, ListState> {

    constructor(props: ListProps) {
        super(props);
        this.state = { name: props.name/*, creationStatus: props.creationStatus */};
    }

    componentDidMount(): void {
        //alert(this.props.creationStatus);

    }

    handleInputChange = e => {
        this.setState({ name: e.target.value });
    }

    handleSubmitButton = e => {
        this.props.createRoom(this.state.name);
    }

    render() {
        const divFormStyle = {
            width: '20%',
            //height: '100%',
            border: '1px solid grey',
            borderRadius: '5px',
            margin: '1% 0% 0% 40%',
            padding: '10px'
        };
        const inputFormStyle = {

        };
        const buttonFormStyle = {
            backgroundColor: '#7eb3ab',
            borderRadius: '5px',
            border: '1px solid #1d283a'
        };
        const labelSuccess = {
            color: 'green'
        };
        return (
            <div style={divFormStyle}>
                <label>Create a room here :</label>
                <br />
                <label>Name :<input type="text" placeholder="Enter Room's name" value={this.state.name} onChange={this.handleInputChange} style={inputFormStyle} /*required*/ /></label>
                <br/>
                { this.props.creationStatus && (<label style={labelSuccess}>The room was successfully created</label>) }
                <br/>
                <button value="Create room" onClick={this.handleSubmitButton} style={buttonFormStyle}>Create room</button>    
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        name: state.room.name,
        creationStatus: state.room.creationStatus
    };
};

const mapDispatchToProps = { //Events
    createRoom: createRoom
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateRooms);
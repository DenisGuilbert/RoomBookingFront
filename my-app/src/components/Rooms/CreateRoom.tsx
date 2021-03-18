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
        this.state = { name: props.name/*, creationStatus: props.creationStatus */ };
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
        /*const divFormStyle = {
            width: '20%',
            //height: '100%',
            border: '1px solid grey',
            borderRadius: '5px',
            margin: '1% 0% 0% 40%',
            padding: '10px'
        };
        
        
        */

        const divFormStyle = {
            padding: '10px 0px 10px 0px', //Top right bottom left
            margin: '10px auto auto auto', //Top right bottom left
            width: '20%',
            height: '100%',
            borderRadius: '5px',
            border: '1px solid grey',
        };
        const tableRoomStyle = {
            margin: 'auto',
            borderSpacing: '4px'
        };
        const tdRoomStyleLeft = {
            width: '50%',
            paddingRight: '5px',
            textAlign: 'right' as 'right' //Align text to right for the left column
        };
        const tdRoomStyleRight = {
            width: '50%',
            paddingLeft: '5px',
            textAlign: 'left' as 'left' //Align text to right for the left column
        };
        const labelSuccess = {
            color: 'green'
        };
        const buttonFormStyle = {
            backgroundColor: '#7eb3ab',
            borderRadius: '5px',
            border: '1px solid #1d283a'
        };
        const inputFormStyle = {

        };
        return (
            <div style={divFormStyle}>
                <table style={tableRoomStyle}>
                    <tr>
                        <td colSpan={2}>
                            <label>Create a room here :</label>
                        </td>
                    </tr>
                    <tr>
                        <td style={tdRoomStyleLeft}>
                            <label>Name :</label>
                        </td>
                        <td style={tdRoomStyleRight}>
                            <input type="text" placeholder="Enter Room's name" value={this.state.name} onChange={this.handleInputChange} style={inputFormStyle} required />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>{this.props.creationStatus && (<label style={labelSuccess}>The room was successfully created</label>)}</td>
                    </tr>
                    <tr>
                        <td colSpan={2}><input type='submit' value="Create room" onClick={this.handleSubmitButton} style={buttonFormStyle} /></td>
                    </tr>
                </table>
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
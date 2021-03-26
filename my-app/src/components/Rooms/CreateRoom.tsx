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

        const additionalStyleGlobalDiv = {
            width: "359px"
        }
        return (
            <div className="divGlobal" style={additionalStyleGlobalDiv}>
                <div className="divCenter">
                    <label className="labelTitle">Create a room here :</label>
                </div>
                <div className="divFlex">
                    <div className="divFlexChildLeft">
                        <label>Name :</label>
                    </div>
                    <div className="divFlexChildRight">
                        <input type="text" placeholder="Enter Room's name" value={this.state.name} onChange={this.handleInputChange} />
                    </div>
                </div>
                {this.props.creationStatus && (<div><label className="labelSuccess">The room was successfully created</label></div>)}
                <div className="divCenter">
                    <input type='submit' value="Create room" onClick={this.handleSubmitButton} className="buttonSubmitFormStyle" />
                </div>
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
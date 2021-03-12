import { Component } from 'react';
//import _ from "lodash";

//import { fetchRooms } from '../../actions/RoomActions';
//import { Room } from '../../domain/Room'
import { RootState } from '../../app/store'
import { connect } from "react-redux";

export interface ListProps {
    name: string;
    //fetchRooms: () => any;
}

export class CreateRooms extends Component<ListProps> {

    componentDidMount(): void {

    }

    handleInputChange = e => {
        console.log('e.target.value : ' + e.target.value);
        this.setState({ [this.props.name]: e.target.value });
    }

    handleSubmitForm = e => {
        e.preventDefault();

    }

    render() {
        const divFormStyle = {
            width: '20%',
            //height: '100%',
            border: '1px solid black',
            borderRadius:'5px',
            margin: '1% 0% 0% 40%',
            padding: '10px'
        };
        /*const inputFormStyle = {
            
        };*/
        const buttonFormStyle = {
            backgroundColor:'#7eb3ab',
            borderRadius: '5px',
            border: '1px solid #1d283a'
            /*backgroundColor: '#4CAF50',
            border: 'none',
            color: 'white',
            padding: '15px 32px',
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '16px'*/
        };
        return (
            <div>
                <div style={divFormStyle}>
                    <form onSubmit={this.handleSubmitForm}>
                        Create a room here :
                        <br />
                        <label>Name :<input type="text" className="form-control" placeholder="Enter Room's name" name="roomName" /*value={this.props.name}*/ onChange={this.handleInputChange} required /></label>
                        <br />
                        <input type="submit" value="Create room" style={buttonFormStyle} />
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        //name: ''
    };
};

const mapDispatchToProps = {
    name: 'testdispatchtoprops'
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateRooms);
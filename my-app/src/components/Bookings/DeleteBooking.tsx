import { Component } from 'react';
import { deleteBooking } from '../../actions/BookingActions';
import { RootState } from '../../app/store'
import { connect } from "react-redux";

export interface ListProps {
    idToDelete: number;
    deleteStatus: boolean;
    deleteBooking: (idToDelete: number) => any;
}

export interface ListState {
    idToDelete: number;
    deleteStatus: boolean;
}

export class DeleteBooking extends Component<ListProps, ListState> {

    constructor(props: ListProps) {
        super(props);
        this.state = { idToDelete: props.idToDelete, deleteStatus: props.deleteStatus };
    }

    componentDidMount(): void {
        
    }

    handleInputChange = e => {
        var i: number = e.target.value;
        this.setState({ idToDelete: i });
    }

    handleSubmitButton = e => {
        this.props.deleteBooking(this.state.idToDelete);
    }

    render() {

        const additionalStyleGlobalDiv = {
            width: "359px"
        }
        return (
            <div className="divGlobal" style={additionalStyleGlobalDiv}>
                <div className="divCenter">
                    <label className="labelTitle">Delete a booking by id : </label>
                </div>
                <div className="divFlex">
                    <div className="divFlexChildLeft">
                        <label>Id :</label>
                    </div>
                    <div className="divFlexChildRight">
                        <input type="number" onChange={this.handleInputChange} />
                    </div>
                </div>
                {this.props.deleteStatus && (<div><label className="labelSuccess">The booking was successfully deleted</label></div>)}
                <div className="divCenter">
                    <input type='submit' value="Delete the booking" onClick={this.handleSubmitButton} className="buttonSubmitFormStyle" />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        idToDelete: state.booking.idToDelete,
        deleteStatus: state.booking.deleteStatus
    };
};

const mapDispatchToProps = { //Events
    deleteBooking: deleteBooking
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteBooking);
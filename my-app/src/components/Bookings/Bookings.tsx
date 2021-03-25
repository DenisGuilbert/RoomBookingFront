import { Component } from 'react';
import _ from "lodash";
import { fetchBookingsForDateAndRoom } from '../../actions/BookingActions';
import { Booking } from '../../domain/Booking'
import { RootState } from '../../app/store'
import { connect } from "react-redux";

export interface ListProps {
    bookings: Booking[];
    idRoom: number;
    date: Date;
    fetchBookingsForDateAndRoom: (idRoom: number, date: Date) => any;
}

export interface ListState {
    bookings: Booking[];
    idRoom: number;
    date: Date;
}

export class Bookings extends Component<ListProps, ListState> {

    constructor(props: ListProps) {
        super(props);
        this.state = { bookings: props.bookings, idRoom: props.idRoom, date: props.date };
    }

    componentDidMount(): void {
        this.props.fetchBookingsForDateAndRoom(/*this.state.idRoom, this.state.date*/2, new Date('2021-03-23'));//test, this is ok
    }

    renderBookings(): JSX.Element[] | null {
        const { bookings } = this.props;

        if (!bookings) {
            return null;
        }
        return bookings.map((booking: Booking) => {
            return (<tr>
                <td >{booking.id}</td>
                <td>{booking.roomId}</td>
                <td>{booking.userId}</td>
                <td>{booking.startSlot}</td>
                <td>{booking.endSlot}</td>
                <td>{booking.date}</td>
            </tr>);
        });
    }

    handleInputDateChange = e => {
        console.log(e.target.value);
        this.setState({ date: new Date(e.target.value) });
        //this.setState({ date: new Date('2021-03-04') });
        //console.log('After setState : ' + this.state.date);
    }

    handleInputRoomIdChange = e => {
        console.log(e.target.value);
        var xyz: number = e.target.value;
        this.setState({ idRoom: xyz });
        //this.setState({ idRoom: 1 });
        //console.log('After setState : ' + this.state.idRoom);
    }

    handleButtonClick = e => {
        this.props.fetchBookingsForDateAndRoom(/*this.state.idRoom, this.state.date*/this.state.idRoom, this.state.date);//test
    }

    render() {
        const inputNumberBookingStyle = {
            width: '40px',
        };

        return <div className="divGlobal">
            <div className="divCenter">
                <label className="labelTitle">Get the Booking list by date and by room : </label>
            </div>
            <div className="divFlex">
                <div className="divFlexChild divFlexChildLeft"><label>Booking date : </label></div>
                <div className="divFlexChild divFlexChildRight"><input type="date" id='inputDateBooking' onChange={this.handleInputDateChange} /></div>
            </div>
            <div className="divFlex">
                <div className="divFlexChild divFlexChildLeft"><label>Room's ID : </label></div>
                <div className="divFlexChild divFlexChildRight"><input id='roomId' type='number' min='1' defaultValue='1' onChange={this.handleInputRoomIdChange} style={inputNumberBookingStyle} required /></div>
            </div>
            
            <div className="divCenter">
                <button className="buttonSubmitFormStyle" onClick={this.handleButtonClick}>Check the bookings</button>
                </div>
            

            <table className="tableBookingListStyle">
                <thead>
                    <tr>
                        <th><label>Id :</label></th>
                        <th><label>Room Id :</label></th>
                        <th><label>User Id :</label></th>
                        <th><label>Start slot :</label></th>
                        <th><label>End slot :</label></th>
                        <th><label>Date :</label></th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderBookings()}
                </tbody>
            </table>
        </div >;

    }
}

const mapStateToProps = (state: RootState) => {
    return {
        bookings: _.values(state.booking.items),
        date: state.booking.date,
        idRoom: state.booking.idRoom
    };
};

const mapDispatchToProps = { //For events
    fetchBookingsForDateAndRoom: fetchBookingsForDateAndRoom
};

export default connect(mapStateToProps, mapDispatchToProps)(Bookings);
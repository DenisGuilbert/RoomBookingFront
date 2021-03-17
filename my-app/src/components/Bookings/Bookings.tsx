import { Component } from 'react';
import _ from "lodash";
import { fetchBookings } from '../../actions/BookingActions';
import { Booking } from '../../domain/Booking'
import { RootState } from '../../app/store'
import { connect } from "react-redux";
import { fetchBookingsForDateAndRoom } from '../../api/BookingApi';



export interface ListProps {
    bookings: Booking[];
    fetchBookingsForDateAndRoom: () => any;
}

export class Bookings extends Component<ListProps> {

    componentDidMount(): void {
        //this.props.fetchBookingsForDateAndRoom();
    }

    render() {
        const divBookingStyle = {
            padding: '10px 0px 10px 0px', //Top right bottom left
            margin: 'auto',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(#7eb3ab, #1d283a)'
        };
        const tableBookingStyle = {
            margin: 'auto',
            width: '20%',
            borderSpacing: '0',
            border: '1px solid black',
            borderRadius: '7px',
            background: 'linear-gradient(#9adbd1, #2b3c57)',
            color: 'white'
        };
        const thBookingStyle = {
            borderBottom: '1px solid black',
            height: 'auto'
        };

        return <div style={divBookingStyle}>
            <input type="number" value="1"/>

            <input type="date" /></div>;

    }
}

const mapStateToProps = (state: RootState) => {
    return {
        bookings: _.values(state.booking.items)
    };
};

const mapDispatchToProps = {
    fetchBookingsForDateAndRoom: fetchBookingsForDateAndRoom
};

export default connect(mapStateToProps, mapDispatchToProps)(Bookings);
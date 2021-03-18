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
    idRoom: number;
    date: Date;
}

export class Bookings extends Component<ListProps, ListState> {

    constructor(props: ListProps) {
        super(props);
        this.state = { idRoom: props.idRoom, date: props.date };
    }

    componentDidMount(): void {
        this.props.fetchBookingsForDateAndRoom(/*this.state.idRoom, this.state.date*/1, new Date('2021-03-04'));//test
        document.getElementById('inputDateBooking')
    }

    renderBookings(): JSX.Element[] | null {
        const { bookings } = this.props;
        const tdBookingStyle = {
            border: '1px solid black',
            //borderBottom: '1px solid black',
            //height: 'auto'
        };
        const trBookingStyle = {
            border: '1px solid black'
        };
        if (!bookings) {
            return null;
        }
        return bookings.map((booking: Booking) => {
            return <tr style={trBookingStyle}><td style={tdBookingStyle} key={booking.id}>{booking.date} : {booking.startSlot}-{booking.endSlot}</td></tr>;
        });
    }

    render() {
        const divBookingStyle = {
            padding: '10px 0px 10px 0px', //Top right bottom left
            margin: '10px auto auto auto',
            width: '20%',
            height: '100%',
            borderRadius: '5px',
            border: '1px solid grey',
        };
        const tableBookingStyle = {
            border: '1px solid black',
            margin: 'auto',
            borderSpacing: '4px'
        };
        const tdBookingStyleLeft = {
            width: '50%',
            paddingRight: '5px',
            textAlign: 'right' as 'right' //Align text to right for the left column
        };
        const tdBookingStyleRight = {
            width: '50%',
            paddingLeft: '5px',
            textAlign: 'left' as 'left' //Align text to right for the left column
        };
        const inputNumberBookingStyle = {
            width: '40px',
        };
        const buttonFormStyle = {
            backgroundColor: '#7eb3ab',
            borderRadius: '5px',
            border: '1px solid #1d283a'
        };

        return <div style={divBookingStyle}>
            <table style={tableBookingStyle}>
                <tr>
                    <td style={tdBookingStyleLeft}><label>Booking date : </label></td>
                    <td style={tdBookingStyleRight}><input type="date" id='inputDateBooking' /></td></tr>
                <tr>
                    <td style={tdBookingStyleLeft}><label>Starting slot : </label></td>
                    <td style={tdBookingStyleRight}><input id='minSlotInput' type='number' min='0' max='23' defaultValue='10' style={inputNumberBookingStyle} required /></td>
                </tr>
                <tr>
                    <td style={tdBookingStyleLeft}><label>Ending slot : </label></td>
                    <td style={tdBookingStyleRight}><input id='maxSlotInput' type='number' min='0' max='23' defaultValue='17' style={inputNumberBookingStyle} required /></td>
                </tr>
                <tr>
                    <td style={tdBookingStyleLeft}><label>Room's ID : </label></td>
                    <td style={tdBookingStyleRight}><input id='roomId' type='number' min='1' defaultValue='1' style={inputNumberBookingStyle} required /></td>
                </tr>
                <tr>
                    <td colSpan={2}><input type='submit' value='Check the bookings' style={buttonFormStyle} /></td>
                </tr>

            </table>


            <table style={tableBookingStyle}>
                <thead></thead>
                <tbody>
                {this.renderBookings()}</tbody>
            </table>



        </div >;

    }
}

/*const mapStateToProps = (state: RootState) => {
    return {
        bookings: _.values(state.booking.items)
    };
};*/

const mapStateToProps = (state: RootState) => {
    return {
        bookings: _.values(state.booking.items),
        date: state.booking.date,
        idRoom: state.booking.idRoom
    };
};

const mapDispatchToProps = {
    fetchBookingsForDateAndRoom: fetchBookingsForDateAndRoom
};

export default connect(mapStateToProps, mapDispatchToProps)(Bookings);
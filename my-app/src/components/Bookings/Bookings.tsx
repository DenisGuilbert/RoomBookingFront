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
        //this.props.fetchBookingsForDateAndRoom(/*this.state.idRoom, this.state.date*/1, new Date('2021-03-04'));//test
        document.getElementById('inputDateBooking')
    }

    renderBookings(): JSX.Element[] | null {
        const { bookings } = this.props;
        const tdBookingStyle = {
            //border: '1px solid black',
            borderBottom: '1px solid black',
            //height: 'auto'
        };
        const trBookingStyle = {
            border: '1px solid black'
        };
        if (!bookings) {
            return null;
        }
        return bookings.map((booking: Booking) => {
            return (<tr style={trBookingStyle}>
                <td style={tdBookingStyle}>{booking.id}</td>
                <td style={tdBookingStyle}>{booking.roomId}</td>
                <td style={tdBookingStyle}>{booking.userId}</td>
                <td style={tdBookingStyle}>{booking.startSlot}</td>
                <td style={tdBookingStyle}>{booking.endSlot}</td>
                <td style={tdBookingStyle}>{booking.date.toDateString}</td>
            </tr>);
        });
    }

    handleInputDateChange = e => {
        this.setState({ date: e.target.value });
    }

    handleInputRoomIdChange = e => {
        this.setState({ idRoom: e.target.value });
    }

    handleButtonClick = e => {
        this.props.fetchBookingsForDateAndRoom(/*this.state.idRoom, this.state.date*/this.state.idRoom, new Date('2020-10-23'));//test
    }

    render() {
        const divBookingStyle = {
            padding: '10px 0px 10px 0px', //Top right bottom left
            margin: '10px auto auto auto',
            //width: '20%',
            minWidth: '20%',
            width: 'min-content',
            height: '100%',
            borderRadius: '5px',
            border: '1px solid grey',
        };
        const tableBookingStyle = {
            border: '1px solid grey',
            borderRadius: '5px',
            margin: 'auto',
            borderSpacing: '4px'
        };
        const tableBookingListStyle = {
            //border: '1px solid black',
            margin: '10px auto auto auto',
            borderSpacing: '0px',
            width: '600px'
        };
        const thBookingStyle = {
            borderBottom: '1px solid black',
        }
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
            //backgroundColor: '#7eb3ab',
            background: 'linear-gradient(0.25turn, #A9A9A9, #808080)',
            borderRadius: '5px',
            border: '1px solid #1d283a'
        };

        return <div style={divBookingStyle}>
            <table style={tableBookingStyle}>
                <tbody>
                    <tr>
                        <td style={tdBookingStyleLeft}><label>Booking date : </label></td>
                        <td style={tdBookingStyleRight}><input type="date" id='inputDateBooking' onChange={this.handleInputDateChange}/></td>
                    </tr>
                    {/*<tr>
                        <td style={tdBookingStyleLeft}><label>Starting slot : </label></td>
                        <td style={tdBookingStyleRight}><input id='minSlotInput' type='number' min='0' max='23' defaultValue='10' style={inputNumberBookingStyle} required /></td>
                    </tr>
                    <tr>
                        <td style={tdBookingStyleLeft}><label>Ending slot : </label></td>
                        <td style={tdBookingStyleRight}><input id='maxSlotInput' type='number' min='0' max='23' defaultValue='17' style={inputNumberBookingStyle} required /></td>
                    </tr>*/}
                    <tr>
                        <td style={tdBookingStyleLeft}><label>Room's ID : </label></td>
                        <td style={tdBookingStyleRight}><input id='roomId' type='number' min='1' defaultValue='1' onChange={this.handleInputRoomIdChange} style={inputNumberBookingStyle} required /></td>
                    </tr>
                    <tr>
                        <td colSpan={2}><button style={buttonFormStyle} onClick={this.handleButtonClick}>Check the bookings</button></td>
                    </tr>
                </tbody>
            </table>

            <table style={tableBookingListStyle}>
                <thead>
                    <tr>
                        <th style={thBookingStyle}><label>Id :</label></th>
                        <th style={thBookingStyle}><label>Room Id :</label></th>
                        <th style={thBookingStyle}><label>User Id :</label></th>
                        <th style={thBookingStyle}><label>Start slot :</label></th>
                        <th style={thBookingStyle}><label>End slot :</label></th>
                        <th style={thBookingStyle}><label>Date :</label></th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderBookings()}
                </tbody>
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
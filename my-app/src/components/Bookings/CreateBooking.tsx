import { Component } from 'react';
import _ from "lodash";
import { createBooking } from '../../actions/BookingActions';
import { Booking } from '../../domain/Booking'
import { RootState } from '../../app/store'
import { connect } from "react-redux";
import { Bookings } from './Bookings';

export interface ListProps {
    bookings: Booking[];
    bookingToCreate: Booking;
    createBooking: (booking: Booking) => any;
}

export interface ListState {
    bookings: Booking[];
    bookingToCreate: Booking;
}

export enum BookingActionSetStateType {
    SET_STATE_ROOM_ID,
    SET_STATE_USER_ID,
    SET_STATE_DATE,
    SET_STATE_START_SLOT,
    SET_STATE_END_SLOT,
}

export class CreateBooking extends Component<ListProps, ListState> {

    constructor(props: ListProps) {
        super(props);
        this.state = { bookings: props.bookings, bookingToCreate: props.bookingToCreate };
    }

    componentDidMount(): void {

    }

    //Method with an enum to avoid accessing and deconstructing the Booking State everywhere in the code : 
    setBookingState(action: BookingActionSetStateType, value: any) {
        //Create a copy of the state's object : 
        var bookingToCreateCopyState = { ...this.state.bookingToCreate }

        //Set the value : 
        switch (action) {
            case BookingActionSetStateType.SET_STATE_ROOM_ID:
                bookingToCreateCopyState.roomId = value;
                break;

            case BookingActionSetStateType.SET_STATE_USER_ID:
                bookingToCreateCopyState.userId = value;
                break;

            case BookingActionSetStateType.SET_STATE_DATE:
                bookingToCreateCopyState.date = value;
                break;

            case BookingActionSetStateType.SET_STATE_START_SLOT:
                bookingToCreateCopyState.startSlot = value;
                break;

            case BookingActionSetStateType.SET_STATE_END_SLOT:
                bookingToCreateCopyState.endSlot = value;
                break;
        }

        //Set the object in the state : 
        this.setState({ bookingToCreate: bookingToCreateCopyState })
    }

    handleInputRoomIdChange = e => {
        var rId: number = e.target.value;
        this.setBookingState(BookingActionSetStateType.SET_STATE_ROOM_ID, rId);
        console.log(this.state.bookingToCreate.roomId);
    }

    handleInputUserIdChange = e => {
        var uId: number = e.target.value;
        this.setBookingState(BookingActionSetStateType.SET_STATE_USER_ID, uId);
        console.log(this.state.bookingToCreate.userId);
    }

    handleInputDateChange = e => {
        this.setBookingState(BookingActionSetStateType.SET_STATE_DATE, new Date(e.target.value));
        console.log(this.state.bookingToCreate.date);
    }

    handleInputStartSlotChange = e => {
        var startSlot: number = e.target.value;
        this.setBookingState(BookingActionSetStateType.SET_STATE_START_SLOT, startSlot);
        console.log(this.state.bookingToCreate.startSlot);
    }
    handleInputEndSlotChange = e => {
        var endSlot: number = e.target.value;
        this.setBookingState(BookingActionSetStateType.SET_STATE_END_SLOT, endSlot);
        console.log(this.state.bookingToCreate.endSlot);
    }

    handleButtonCreateClick = e => {
        this.props.createBooking(this.state.bookingToCreate);
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
            <label>Create a new booking : </label>
            <br />
            <label>Booking date : </label>
            <input type="date" id='inputDateBooking' onChange={this.handleInputDateChange} required />
            <br />
            <label>Starting slot : </label>
            <input id='minSlotInput' type='number' min='0' max='23' defaultValue='10' style={inputNumberBookingStyle} required />
            <br />
            <label>Ending slot : </label>
            <input id='maxSlotInput' type='number' min='0' max='23' defaultValue='17' style={inputNumberBookingStyle} required />
            <br />
            <label>Room's ID : </label>
            <input id='roomId' type='number' min='1' defaultValue='1' onChange={this.handleInputRoomIdChange} style={inputNumberBookingStyle} required />
            <br />
            <label>User's ID : </label>
            <input id='userId' type='number' min='1' defaultValue='1' onChange={this.handleInputUserIdChange} style={inputNumberBookingStyle} required />
            <br />
            <button style={buttonFormStyle} onClick={this.handleButtonCreateClick}>Create a booking</button>
        </div >;
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        bookings: _.values(state.booking.items),
        bookingToCreate: state.booking.bookingToCreate
    };
};

const mapDispatchToProps = { //For events
    createBooking: createBooking
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateBooking);
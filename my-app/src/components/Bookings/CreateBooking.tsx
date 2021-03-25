import { Component } from 'react';
import _ from "lodash";
import { createBooking } from '../../actions/BookingActions';
import { Booking } from '../../domain/Booking'
import { RootState } from '../../app/store'
import { connect } from "react-redux";
//import { Bookings } from './Bookings';

export interface ListProps {
    freeBookings: Booking[];
    bookingToCreate: Booking;
    isBookingCreated: boolean;
    createBooking: (booking: Booking) => any;
}

export interface ListState {
    freeBookings: Booking[];
    bookingToCreate: Booking;
    isBookingCreated: boolean;
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
        this.state = { freeBookings: props.freeBookings, bookingToCreate: props.bookingToCreate, isBookingCreated: props.isBookingCreated };
    }

    componentDidMount(): void {

    }

    renderFreeBookings(): JSX.Element[] | null {
        const { freeBookings } = this.props;
        const tdBookingStyle = {
            //border: '1px solid black',
            borderBottom: '1px solid black',
            //height: 'auto'
        };
        const trBookingStyle = {
            border: '1px solid black'
        };
        if (!freeBookings) {
            return null;
        }
        return freeBookings.map((booking: Booking) => {
            console.log('Free booking : ');
            console.log(booking);
            return (<tr style={trBookingStyle}>
                <td style={tdBookingStyle}>{booking.roomId}</td>
                <td style={tdBookingStyle}>{booking.startSlot}</td>
                <td style={tdBookingStyle}>{booking.endSlot}</td>
                <td style={tdBookingStyle}>{booking.date}</td>
            </tr>);
        });
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
        console.log('handleButtonCreateClick. Bookingtocreate : ');
        console.log(this.state.bookingToCreate);
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

        return (<div>
            <div style={divBookingStyle}>
                <div className="divCenter">
                    <label className="labelTitle">Create a new booking : </label>
                </div>
                <div className="divFlex">
                    <div className="divFlexChild divFlexChildLeft"><label>Booking date : </label></div>
                    <div className="divFlexChild divFlexChildRight"><input type="date" id='inputDateBooking' onChange={this.handleInputDateChange} required /></div>
                </div>
                <div className="divFlex">
                    <div className="divFlexChild divFlexChildLeft"><label>Starting slot : </label></div>
                    <div className="divFlexChild divFlexChildRight"><input id='minSlotInput' type='number' min='0' max='23' defaultValue='10' onChange={this.handleInputStartSlotChange} style={inputNumberBookingStyle} required /></div>
                </div>
                <div className="divFlex">
                    <div className="divFlexChild divFlexChildLeft"><label>Ending slot : </label></div>
                    <div className="divFlexChild divFlexChildRight"> <input id='maxSlotInput' type='number' min='0' max='23' defaultValue='17' onChange={this.handleInputEndSlotChange} style={inputNumberBookingStyle} required /></div>
                </div>
                <div className="divFlex">
                    <div className="divFlexChild divFlexChildLeft"><label>Room's ID : </label></div>
                    <div className="divFlexChild divFlexChildRight"><input id='roomId' type='number' min='1' defaultValue='1' onChange={this.handleInputRoomIdChange} style={inputNumberBookingStyle} required /></div>
                </div>
                <div className="divFlex">
                    <div className="divFlexChild divFlexChildLeft"><label>User's ID : </label></div>
                    <div className="divFlexChild divFlexChildRight"><input id='userId' type='number' min='1' defaultValue='1' onChange={this.handleInputUserIdChange} style={inputNumberBookingStyle} required /></div>
                </div>
                <div className="divCenter">
                    <button style={buttonFormStyle} onClick={this.handleButtonCreateClick}>Create a booking</button>
                </div>

                {this.props.freeBookings.length == 0 && this.props.isBookingCreated && (<label> The booking was successfully created ! </label>)}
                {this.props.freeBookings.length > 0 && (<label> Already booked slot ! Check the other free slots : </label>)}
                <table className="tableBookingListStyle">
                    <thead>
                        <tr>
                            <th><label>Room Id :</label></th>
                            <th ><label>Start slot :</label></th>
                            <th ><label>End slot :</label></th>
                            <th ><label>Date :</label></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderFreeBookings()}
                    </tbody>
                </table>
            </div>
        </div>);
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        freeBookings: _.values(state.booking.freeBookings),
        bookingToCreate: state.booking.bookingToCreate,
        isBookingCreated: state.booking.isBookingCreated
    };
};

const mapDispatchToProps = { //For events
    createBooking: createBooking
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateBooking);
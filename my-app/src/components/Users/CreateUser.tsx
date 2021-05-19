import { Component } from 'react';
import { createUser } from '../../actions/UserActions';
import { RootState } from '../../app/store'
import { connect } from "react-redux";
import { debug } from 'node:console';

export interface ListProps {
    firstName: string;
    lastName: string;
    idGenre: number;
    idJob: number;
    creationStatus: boolean;
    createUser: (firstName: string, lastName: string, idGenre: number, idJob: number) => any;
}

export interface ListState {
    firstName: string;
    lastName: string;
    idGenre: number;
    idJob: number;
    creationStatus: boolean;
}

export class CreateUser extends Component<ListProps, ListState> {

    constructor(props: ListProps) {
        super(props);
        this.state = { firstName: props.firstName, lastName: props.lastName, idGenre: props.idGenre, idJob: props.idJob, creationStatus: props.creationStatus };
    }

    componentDidMount(): void {
        //alert(this.props.creationStatus);
    }

    handleInputFirstNameChange = e => {
        this.setState({ firstName: e.target.value });
    }

    handleInputLastNameChange = e => {
        this.setState({ lastName: e.target.value });
    }

    handleInputGenreChange = e => {
        this.setState({ idGenre: e.target.value }); //todo dropdownlist
    }

    handleInputJobChange = e => {
        this.setState({ idJob: e.target.value }); //todo dropdownlist
    }

    handleSubmitButton = e => {
        this.props.createUser(this.state.firstName, this.state.lastName, this.state.idGenre, this.state.idJob);
    }

    render() {

        const additionalStyleGlobalDiv = {
            width: "359px"
        }
        return (
            <div className="divGlobal" style={additionalStyleGlobalDiv}>
                <div className="divCenter">
                    <label className="labelTitle">Create a user here :</label>
                </div>
                <div className="divFlex">
                    <div className="divFlexChildLeft">
                        <label>First name :</label>
                    </div>
                    <div className="divFlexChildRight">
                        <input type="text" placeholder="Enter User's first name" value={this.state.firstName} onChange={this.handleInputFirstNameChange} />
                    </div>
                </div>
                {this.props.creationStatus && (<div><label className="labelSuccess">The user was successfully created</label></div>)}
                <div className="divCenter">
                    <input type='submit' value="Create user" onClick={this.handleSubmitButton} className="buttonSubmitFormStyle" />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        firstName: state.user.firstName,
        lastName: state.user.lastName,
        idGenre: state.user.idGenre,
        idJob: state.user.idJob,
        //creationStatus: state.user.creationStatus
    };
};

const mapDispatchToProps = { //Events
    createUser: createUser
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser)
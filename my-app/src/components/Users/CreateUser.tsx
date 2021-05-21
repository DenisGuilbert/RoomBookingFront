import { Component } from 'react';
import { createUser, fetchGenres, fetchJobs } from '../../actions/UserActions';
import { RootState } from '../../app/store';
import { connect } from "react-redux";
import { Genre } from '../../domain/Genre';
import { Job } from '../../domain/Job';
import { debug } from 'node:console';
import _ from "lodash";
import { Formik, Field, Form } from 'formik';

export interface ListProps {
    allGenres: Genre[];
    allJobs: Job[];
    firstName: string;
    lastName: string;
    idGenre: number;
    idJob: number;
    creationStatus: boolean;
    createUser: (firstName: string, lastName: string, idGenre: number, idJob: number) => any;
    fetchGenres: () => any;
    fetchJobs: () => any;
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
        this.props.fetchGenres();
        this.props.fetchJobs();
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
                <h1>Sign Up</h1>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        idGenre: 0,
                        idJob: 1
                    }}
                    onSubmit={async (values) => {
                        //call create user method
                    }}>
                        
                    <Form>
                        <label htmlFor="firstName">First Name</label>
                        <Field id="firstName" name="firstName" placeholder="John" />

                        <label htmlFor="lastName">Last Name</label>
                        <Field id="lastName" name="lastName" placeholder="Doe" />

                        {/* Set the 2 selects here, after resolving the compilation error*/}

                        <button type="submit">Submit</button>
                    </Form>
                </Formik>
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
        creationStatus: state.user.creationStatus,
        allGenres: _.values(state.user.allGenres),
        allJobs: _.values(state.user.allJobs)
    };
};

const mapDispatchToProps = { //Events
    createUser: createUser,
    fetchGenres: fetchGenres,
    fetchJobs: fetchJobs
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser)
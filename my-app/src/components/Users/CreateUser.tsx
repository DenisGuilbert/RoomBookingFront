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
    allGenres: Genre[];
    allJobs: Job[];
    firstName: string;
    lastName: string;
    idGenre: number;
    idJob: number;
    creationStatus: boolean;
}

export class CreateUser extends Component<ListProps, ListState> {

    constructor(props: ListProps) {
        super(props);
        this.state = { allGenres: props.allGenres, allJobs: props.allJobs, firstName: props.firstName, lastName: props.lastName, idGenre: props.idGenre, idJob: props.idJob, creationStatus: props.creationStatus };
    }

    componentDidMount(): void {
        this.props.fetchGenres();
        this.props.fetchJobs();
        console.log(this.props.allGenres);
        console.log(this.props.allJobs);
    }

    /*handleInputFirstNameChange = e => {
        this.setState({ firstName: e.target.value });
    }

    handleInputLastNameChange = e => {
        this.setState({ lastName: e.target.value });
    }

    handleInputGenreChange = e => {
        this.setState({ idGenre: e.target.value });
    }

    handleInputJobChange = e => {
        this.setState({ idJob: e.target.value });
    }*/

    handleSubmitButton = e => {

        var gId: number = e.idGenre;
        var jId: number = e.idJob;
        this.setState({ lastName: e.lastName });
        this.setState({ firstName: e.firstName });        
        this.setState({ idGenre: gId });
        this.setState({ idJob: jId });

        console.log(this.state);

        this.props.createUser(this.state.firstName, this.state.lastName, this.state.idGenre, this.state.idJob);
    }

    render() {
        const additionalStyleGlobalDiv = {

        }
        return (
            <div className="divGlobal" style={additionalStyleGlobalDiv}>
                <label className='labelTitle'>Create a new user</label>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        idGenre: 0,
                        idJob: 0
                    }}
                    onSubmit={async (values) => {
                        //call create user method
                        this.handleSubmitButton(values);
                    }}>
                    <Form>
                        <div className="divGlobal">
                            
                            <div className="divFlex">
                                <div className="divFlexChildLeft">
                                    <label htmlFor="firstName">First Name : </label>
                                </div>
                                <div className="divFlexChildRight">
                                    <Field id="firstName" name="firstName" placeholder="John" />
                                </div>
                            </div>

                            <div className="divFlex">
                                <div className="divFlexChildLeft">
                                    <label htmlFor="lastName">Last Name : </label>
                                </div>
                                <div className="divFlexChildRight">
                                    <Field id="lastName" name="lastName" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="divFlex">
                                <div className="divFlexChildLeft">
                                    <label htmlFor="genre">Select your genre :</label>
                                </div>
                                <div className="divFlexChildRight">
                                    <Field as="select" name='idGenre'>
                                        {this.props.allGenres.map(genre => <option value={genre.id}>{genre.name}</option>)}
                                    </Field>
                                </div>
                            </div>

                            <div className="divFlex">
                                <div className="divFlexChildLeft">
                                    <label htmlFor="job">Select your job :</label>
                                </div>
                                <div className="divFlexChildRight">
                                    <Field as="select" name='idJob'>
                                        {this.props.allJobs.map(job =><option value={job.id}>{job.name}</option>)}
                                    </Field>
                                </div>
                            </div>
                            
                        </div>
                        <button type="submit">Create</button>
                    </Form>
                </Formik>
                {this.props.creationStatus && (<div><label className="labelSuccess">The user was successfully created</label></div>)}
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
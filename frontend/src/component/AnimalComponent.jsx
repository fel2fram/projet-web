import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import AnimalDataService from '../service/AnimalDataService';


class AnimalComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            description: ''
        }

        this.onSubmit = this.onSubmit.bind(this)

    }

    componentDidMount() {

        console.log(this.state.id)

        // eslint-disable-next-line
        if (this.state.id == -1) {
            return
        }

        AnimalDataService.retrieveAnimal( this.state.id)
            .then(response => this.setState({
                classif: response.data.classif,
                species: response.data.species,
                family: response.data.family
            }))
    }


    onSubmit(values) {


        let animal = {
            id: this.state.id,
            classif: values.classif,
            species: values.species,
            family: values.family,
            targetDate: values.targetDate
        }

        if (this.state.id === -1) {
            AnimalDataService.createAnimal(animal)
                .then(() => this.props.history.push('/animals'))
        } else {
            AnimalDataService.updateAnimal(this.state.id, animal)
                .then(() => this.props.history.push('/animals'))
        }

        console.log(values);
    }

    render() {

        let { classif,family,species, id } = this.state

        return (
            <div>
                <h3>Animal</h3>
                <div className="container">
                    <Formik
                        initialValues={{ id, classif,family,species }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div"
                                        className="alert alert-warning" />

                                    <fieldset className="form-group">
                                        <label>Class</label>
                                        <Field className="form-control" type="text" name="classif" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Family</label>
                                        <Field className="form-control" type="text" name="family" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Species</label>
                                        <Field className="form-control" type="text" name="species" />
                                    </fieldset>
                                    <div className="btn-div">
                                      <button className="btn btn-success" type="submit">Save</button>
                                      <button className="btn btn-secondary" type="button"
                                          onClick={() => this.props.history.push('/animals')}>
                                          Cancel
                                          </button>
                                    </div>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }
}

export default AnimalComponent

import React, { Component } from 'react'
import AnimalDataService from '../service/AnimalDataService';


class ListAnimalsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            animals: [],
            message: null
        }
        this.deleteAnimalClicked = this.deleteAnimalClicked.bind(this)
        this.updateAnimalClicked = this.updateAnimalClicked.bind(this)
        this.addAnimalClicked = this.addAnimalClicked.bind(this)
        this.refreshAnimals = this.refreshAnimals.bind(this)
    }

    componentDidMount() {
        this.refreshAnimals();
    }

    refreshAnimals() {
        AnimalDataService.retrieveAllAnimals()//HARDCODED
            .then(
                response => {
                    //console.log(response);
                    this.setState({ animals: response.data })
                }
            )
    }

    deleteAnimalClicked(id) {
        AnimalDataService.deleteAnimal(id)
            .then(
                response => {
                    this.setState({ message: `Delete of animal ${id} Successful` })
                    this.refreshAnimals()
                }
            )

    }

    addAnimalClicked() {
        this.props.history.push(`/animals/-1`)
    }

    updateAnimalClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/animals/${id}`)
    }

    render() {
        console.log('render')
        return (
            <div className="container">
                <h3>All animals</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Class</th>
                                <th>Family</th>
                                <th>Species</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.animals.map(
                                    animal =>
                                        <tr key={animal.id}>
                                            <td>{animal.classif}</td>
                                            <td>{animal.family}</td>
                                            <td>{animal.species}</td>
                                            <td><button className="btn btn-success" onClick={() => this.updateAnimalClicked(animal.id)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteAnimalClicked(animal.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addAnimalClicked}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListAnimalsComponent

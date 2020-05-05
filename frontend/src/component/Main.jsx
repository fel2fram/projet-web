import React, { Component } from 'react';
import ListAnimalsComponent from './ListAnimalsComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AnimalComponent from './AnimalComponent';

class Main extends Component {
    render() {
        return (
            <Router>
                <>
                    <h1>Animal classification</h1>
                    <Switch>
                        <Route path="/" exact component={ListAnimalsComponent} />
                        <Route path="/animals" exact component={ListAnimalsComponent} />
                        <Route path="/animals/:id" component={AnimalComponent} />
                    </Switch>
                </>
            </Router>
        )
    }
}
export default Main

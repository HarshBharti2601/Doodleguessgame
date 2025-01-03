import React from 'react';
import { HashRouter as Router, Route, Switch,withRouter } from 'react-router-dom';
import HomePage from './components/HomePage';
import PlaySoloWithAI from './components/PlaySoloWithAI';
import './App.css';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/play" component={PlaySoloWithAI} />
            </Switch>

        </Router>
    );
};
export default App;
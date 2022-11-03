import React from 'react';
import {Switch, Route} from 'react-router-dom';

// Components
import Estimates from '../containers/Estimates/Estimates';

export default (
    <Switch>
        <Route exact path="/" component={Estimates}/>
    </Switch>
);
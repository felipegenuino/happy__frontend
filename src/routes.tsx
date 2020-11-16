import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Landing from './pages/landing';
import OrphanagesMap from './pages/orphanagesMap'

function Routes(){
    return (
        <BrowserRouter>
                <Route path="/" exact component={Landing} />
                <Route path="/map" component={OrphanagesMap} />
        </BrowserRouter>
    );
}

export default Routes
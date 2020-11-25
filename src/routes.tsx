import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Landing from './pages/landing';
import OrphanagesMap from './pages/orphanagesMap'

import Orphanage from './pages/Orphanage'
import CreateOrphanages from './pages/CreateOrphanage'

function Routes(){
    return (
        <BrowserRouter>
                <Route path="/" exact component={Landing} />
                <Route path="/map" component={OrphanagesMap} />

                <Route path="/orphanages/create"  component={CreateOrphanages} />
                <Route path="/orphanages/:id"  component={Orphanage} />

        </BrowserRouter>
    );
}

export default Routes
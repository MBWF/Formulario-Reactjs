import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Cadastro from './components/form/Cadastro/cadastro'
import Form from './components/form/Login/form'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={Form} path='/' exact />
                <Route component={Cadastro} path='/cadastro' />
            </Switch>
        </BrowserRouter>
    )
    
}

export default Routes
import React from 'react'
import {HashRouter, Switch, Route} from 'react-router-dom'
import Login from '../views/login'
import CadastroUsuario from '../views/cadastroUsuario'

function Rotas(props){
    return (
        <HashRouter>
            <Switch>
                <Route path='/login' component={Login}></Route>
                <Route path='/cadastro-usuario' component={CadastroUsuario}></Route>
            </Switch>

        </HashRouter>
    )
}

export default Rotas
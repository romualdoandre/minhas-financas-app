import React from 'react'
import {HashRouter, Switch, Route} from 'react-router-dom'
import Login from '../views/login'
import CadastroUsuario from '../views/cadastroUsuario'
import Home from '../views/home'
import ConsultaLancamentos from '../views/lancamentos/consulta-lancamentos'

function Rotas(props){
    return (
        <HashRouter>
            <Switch>
                <Route path='/home' component={Home}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/cadastro-usuario' component={CadastroUsuario}></Route>
                <Route path='/consulta-lancamentos' component={ConsultaLancamentos}></Route>
            </Switch>

        </HashRouter>
    )
}

export default Rotas
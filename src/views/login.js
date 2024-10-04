import React from 'react'
import Card from '../components/card'
import FormGroup from '../components/form-group';
import {withRouter} from 'react-router-dom'

class Login extends React.Component {

    state = {
        email: '',
        senha: ''
    }

    entrar = () => {
        console.log('Email', this.state.email)
        console.log('Senha', this.state.senha)
    }

    prepareCadastrar = () => {
        this.props.history.push('/cadastro-usuario')
    }

    render() {
        return (
            <div className='row'>
                <div className='col-md-6' style={{ position: 'relative', left: '300px' }}>
                    <div className="bs-docs-section">
                        <Card title='Login'>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className='bs-component'>
                                        <fieldset>
                                            <FormGroup htmlFor='exampleInputEmail1' label='Email: *'>
                                                <input type='email' className='form-control' id='exampleInputEmail1'
                                                    value={this.state.email}
                                                    onChange={e => this.setState({ email: e.target.value })}
                                                    aria-describedby="emailHelp"
                                                    placeholder="Digite o Email" />
                                            </FormGroup>
                                            <FormGroup label="Senha: *" htmlFor="exampleInputPassword1">
                                                <input type="password"
                                                    className="form-control"
                                                    id="exampleInputPassword1"
                                                    value={this.state.senha}
                                                    onChange={e => this.setState({ senha: e.target.value })}
                                                    placeholder="Password" />
                                            </FormGroup>
                                            <button className="btn btn-success" onClick={this.entrar}>
                                                <i className="pi pi-sign-in"></i>Entrar</button>
                                            <button
                                                className="btn btn-danger" onClick={this.prepareCadastrar} >
                                                <i className="pi pi-plus"></i>  Cadastrar
                                            </button>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Login);
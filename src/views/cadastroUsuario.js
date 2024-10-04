import React from 'react'
import Card from '../components/card'
import FormGroup from '../components/form-group';
import {withRouter} from 'react-router-dom'

class CadastroUsuario extends React.Component {
    state = {
        nome: '',
        email: '',
        senha: '',
        senhaRepeticao: ''
    }

    cadastrar = () => {

    }

    cancelar = () => {
        this.props.history.push('/login')
    }

    render() {
        return (

            <Card title="Cadastro de Usuário"><div class="row">
                <div class="col-lg-12">
                    <div class="bs-component">
                        <FormGroup label="Nome: *" htmlFor="inputNome">
                            <input type="text"
                                id="inputNome"
                                className="form-control"
                                name="nome"
                                onChange={e => this.setState({ nome: e.target.value })} />
                        </FormGroup>
                        <FormGroup label="Email: *" htmlFor="inputEmail">
                            <input type="email"
                                id="inputEmail"
                                className="form-control"
                                name="email"
                                onChange={e => this.setState({ email: e.target.value })} />
                        </FormGroup>
                        <FormGroup label="Senha: *" htmlFor="inputSenha">
                            <input type="password"
                                id="inputSenha"
                                className="form-control"
                                name="senha"
                                onChange={e => this.setState({ senha: e.target.value })} />
                        </FormGroup>
                        <FormGroup label="Repita a Senha: *" htmlFor="inputRepitaSenha">
                            <input type="password"
                                id="inputRepitaSenha"
                                className="form-control"
                                name="senha"
                                onChange={e => this.setState({ senhaRepeticao: e.target.value })} />
                        </FormGroup>
                        <button onClick={this.cadastrar} type="button" className="btn btn-success">
                            <i className="pi pi-save"></i> Salvar
                        </button>
                        <button onClick={this.cancelar} type="button" className="btn btn-danger">
                            <i className="pi pi-times"></i> Cancelar
                        </button>
                    </div>
                </div>
            </div>
            </Card>
        )
    }
}

export default withRouter(CadastroUsuario)
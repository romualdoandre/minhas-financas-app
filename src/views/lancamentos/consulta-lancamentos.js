import React from "react"
import { withRouter } from 'react-router-dom'

import Card from "../../components/card"
import FormGroup from "../../components/form-group"
import SelectMenu from "../../components/selectmenu"
import LancamentosTable from "./lancamentosTable"
import LancamentoService from "../../app/service/lancamentoService"

import { mensagemErro } from '../../components/toastr'

import LocalStorageService from "../../app/service/localStorageService"

class ConsultaLancamentos extends React.Component {

    state = {
        ano: '',
        mes: '',
        descricao: '',
        tipo: '',
        status: '',
        lancamentos: []
    }

    constructor() {
        super()
        this.service = new LancamentoService()
    }

    buscar = () => {
        if(!this.state.ano){
            mensagemErro('Campo ano é obrigatório.')
            return false;
        }

        const usuarioLogado = LocalStorageService.obterItem('_usuario_logado')

        const lancamentoFiltro = {
            ano: this.state.ano,
            mes: this.state.mes,
            tipo: this.state.tipo,
            status: this.state.status,
            usuario: usuarioLogado.id,
            descricao: this.state.descricao
        }
        this.service.consultar(lancamentoFiltro)
            .then(response => {
                this.setState({ lancamentos: response.data })
            })
            .catch(error => {
                mensagemErro(error.response.data)
            })
    }

    render() {
        return (
            <Card title="Consulta Lançamentos">
                <div className="row">
                    <div className="col-md-6">
                        <div className="bs-component">
                            <FormGroup htmlFor="inputAno" label="Ano: *">
                                <input type="text"
                                    className="form-control"
                                    id="inputAno"
                                    value={this.state.ano}
                                    onChange={e => this.setState({ ano: e.target.value })}
                                    placeholder="Digite o Ano" />
                            </FormGroup>

                            <FormGroup htmlFor="inputMes" label="Mês: ">
                                <SelectMenu
                                    id="inputMes"
                                    value={this.state.mes}
                                    className="form-control"
                                    lista={this.service.obterListaMeses()}
                                    onChange={e => this.setState({ mes: e.target.value })}></SelectMenu>
                            </FormGroup>

                            <FormGroup htmlFor="inputDesc" label="Descrição: ">
                                <input type="text"
                                    className="form-control"
                                    id="inputDesc"
                                    value={this.state.descricao}
                                    onChange={e => this.setState({ descricao: e.target.value })}
                                    placeholder="Digite a descrição" />
                            </FormGroup>

                            <FormGroup htmlFor="inputTipo" label="Tipo Lançamento: ">
                                <SelectMenu className="form-control" id="inputTipo" lista={this.service.obterListaTipos()}
                                    onChange={e => this.setState({ tipo: e.target.value })}>
                                </SelectMenu>
                            </FormGroup>

                            <button onClick={this.buscar}
                                type="button"
                                className="btn btn-success">
                                <i className="pi pi-search"></i> Buscar
                            </button>
                            <button onClick={this.preparaFormularioCadastro}
                                type="button"
                                className="btn btn-danger">
                                <i className="pi pi-plus"></i> Cadastrar
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="bs-component">
                            <LancamentosTable lancamentos={this.state.lancamentos}></LancamentosTable>
                        </div>
                    </div>
                </div>
            </Card>)
    }
}

export default withRouter(ConsultaLancamentos)
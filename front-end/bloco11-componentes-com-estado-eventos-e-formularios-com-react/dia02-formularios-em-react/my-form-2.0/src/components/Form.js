import React, { Component } from "react";
import './Form.css'

class Form extends Component {
    constructor() {
        super()

        this.state = {
            nome: '',
            email: '',
            cpf: 0,
            adress: '',
        }
    }

    handleChange = ({target}) => {
        const { name, value } = target
        this.setState({
            [name]: value,
        })
    }
    render() {
        const { nome, email, cpf, adress } = this.state
        return (    
            <form>
                <fieldset className="personal-data">
                    <label htmlFor="name">Nome:
                        <input 
                          type="text"
                          name="nome"
                          value={nome.toUpperCase()}
                          maxLength={40}
                          placeholder="Digite seu nome"
                          required
                          onChange={this.handleChange}
                          id="name"
                        />
                    </label>
                    <label htmlFor="email">E-mail:
                        <input
                          type="email"
                          name="email"
                          value={ email }
                          id="email"
                          maxLength={50}
                          placeholder="Digite seu e-mail"
                          required
                          onChange={this.handleChange}
                        />
                    </label>
                    <label htmlFor="cpf">CPF:
                        <input
                          type="text"
                          value={ cpf }
                          name="cpf"
                          id="cpf"
                          maxLength={11}
                          required
                          placeholder="Digite seu CPF"
                          onChange={this.handleChange}
                        />
                    </label>
                    <label htmlFor="adress">Endereço:
                        <input
                          type="text"
                          value={ adress }
                          name="adress"
                          id="adress"
                          required
                          placeholder="Digite seu endereço"
                          onChange={this.handleChange}
                        />
                    </label>
                </fieldset>
            </form>
        )
    }
}

export default Form
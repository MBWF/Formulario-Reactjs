import React, {useState, useEffect} from 'react'
import {BsLockFill} from 'react-icons/bs'
import {BiBlock} from 'react-icons/bi'

import './form.css'
import { findAll } from '../../../api'

function Form() {
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')

    const [getUsers, setGetUsers] = useState([])
    
    useEffect(async () => {
        setGetUsers([...getUsers, await findAll()])
    }, [])

    function validate() {
        const user = {
            "nome": nome,
            "senha": senha
        }

        for(var i = 0; i < getUsers.length; i++) {
            console.log(getUsers[0].nome, user.nome, getUsers)

            if (getUsers[i].nome == user.nome && getUsers[i].senha == user.senha) {
                return console.log('Entrou')
            }
        }

        return console.log('Não existe esse usuário')
    }
    
    return (
        <>
        <div className='alinhar'>
            <div id='form-body'>
                <h1>Garanta já sua vaga</h1>

                <div className='form-field'>
                    <input
                    placeholder='Nome Completo'
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    />

                    <input
                    placeholder='Senha'
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                    />

                    <button type='submit' onClick={validate} >Quero Começar</button>
                </div>

            <div className='form-info'>
                <div className='elements'>
                    <BsLockFill className='icon' />
                    <h1>Seus Dados<br/>estão Seguros</h1>
                </div>
                <div className='elements'>
                    <BiBlock className='icon' />
                    <h1>Somos<br/>
                    contra spam</h1>
                </div>
                
            </div>

            </div>
            </div>
        </>
    )
}

export default Form
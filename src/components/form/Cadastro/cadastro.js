import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {IoArrowBackCircleOutline} from 'react-icons/io5'

import './cadastro.css'

function Cadastro() {

    const [contas, setContas] = useState([])

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confSenha, setConfSenha] = useState('')

    useEffect(
        () => {
            console.log(contas)
        }, [contas]
    )

    function create() {
        if (senha == confSenha) {
            const users = {
                nome,
                email,
                senha,
            }
            setContas([...contas, users])  
        } 
        else {
            console.log('Senhas diferentes')
        }
    }

    return (
        <>
            <div className='page-cadastro'>
                <div className='componente-cadastro' >
                    <div className='login'>
                        <Link to='/'><IoArrowBackCircleOutline className='voltar-icon' /></Link>
                        
                    </div>
                    <h1>Cadastre-se</h1>
                    
                    <input
                    placeholder='Nome'
                    name='nome'
                    value={nome} 
                    onChange={e => setNome(e.target.value)}
                    />

                    <input
                    placeholder='E-mail'
                    name='email'
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                    />
                    
                    <input 
                    placeholder='Senha'
                    name='senha'
                    value={senha} 
                    onChange={e => setSenha(e.target.value)}
                    />
                    
                    <input 
                    placeholder='Confirmar Senha'
                    name='confSenha'
                    value={confSenha}
                    onChange={e => setConfSenha(e.target.value)}
                    />

                    <button type='submit' onClick={create} >Cadastrar</button>
                </div>
            </div>
        </>
    )
}

export default Cadastro;
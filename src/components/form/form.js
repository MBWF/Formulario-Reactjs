import React from 'react'
import ReactDOM from 'react-dom'
import {BsLockFill} from 'react-icons/bs'
import {BiBlock} from 'react-icons/bi'

import './form.css'

export default function Form() {
    return (
        <>
            <div id='form-body'>
                <h1>Garanta já sua vaga</h1>

                <div className='form-field'>
                    <input placeholder='Nome Completo'></input>
                    <input placeholder='Senha'></input>
                    <button>Quero Começar</button>
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
        </>
    )
}
import "./Formulario.css"
import React, { useState } from 'react'

function Formulario(){

    const [nome,setNome] = useState("")
    function mudaNome(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value)
        setNome(e.target.value)
    }

    const [email,setEmail] = useState("")
    function mudaEmail(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value)
        setEmail(e.target.value)
    }

    const [mensagem,setMensagem] = useState("")
    function mudaMensagem(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value)
        setMensagem(e.target.value)
    }

    return(
            <>
            <div className="formulario">
            <div className="form-container">
                <form className="form">
                <div className="form-group">
                    <label htmlFor="name">Nome</label>
                    <input className='name' type="text" onChange={mudaNome} name="name" id="name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input className='email' type="text" onChange={mudaEmail} name="email" id="email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="textarea">Mensagem</label>
                    <input className='mensagem' type="text" onChange={mudaMensagem} name="mensagem" id="mensagem"/>
                </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
            </div>

            <div className="textos">
                <p className='texto_digitado'>Nome: {nome}</p>
                <p className='texto_digitado'>Email: {email}</p>
                <p className='texto_digitado'>Mensagem: {mensagem}</p>
            </div>
            </>
        )
    }
    export default Formulario
import React, { useState } from 'react';
import './CadastroPage.css';
import { useNavigate } from 'react-router-dom';

const CadastroPage = () => {
  const [formdata, setFormData] = useState({
    name: '',
    email: '',
    senha: ''
  })
  const navigate = useNavigate();

  const handleFormEdit = (event, name) => { 
    setFormData({
      ...formdata,
      [name]: event.target.value
    })
  }

  const handleSubmit = async (e) =>{
    try {
      e.preventDefault()
      const response = await fetch(`localhost:5052/Usuarios/Registrar/`, {
        method: 'POST',
        body: JSON.stringify(formdata)
      })
      const json  = await response.json()
      console.log(response.status)
      console.log(json)
    } catch (error) {
      
    }
};

  const handleReturn = (e) =>{
    e.preventDefault();
    navigate('/')
  }

  return (
    <div className='background'>
        <div className='cadastropage'>
            <div className='cadastro-wrapper'>
                <div className='cadastro-input'>
                    <h1>Cadastro</h1>
                <div className='cadastro-input-item'>
                  <label>Nome</label>
                  <input type="text" placeholder='Digite o seu nome' required value={formdata.name} onChange={(e) => {handleFormEdit(e, 'Name')}}/>
                </div>
                <div className='cadastro-input-item'>
                  <label>Email</label>
                  <input type="email" placeholder='Digite o seu email' required value={formdata.email} onChange={(e) => {handleFormEdit(e, 'Email')}}/>
                </div>
                <div className='cadastro-input-item'>
                  <label>Senha</label>
                  <input type="password" placeholder='Digite uma senha' required value={formdata.senha} onChange={(e) => {handleFormEdit(e, 'Senha')}}/>
                </div>
                <label className='checkLbl'>
                    <input type="checkbox" name="Terms" className='terms' required/>
                    Aceito os termos e condições
                  </label>
                <div className='cadastro-input-button'>
                  <button className='voltarBtn'  onClick={handleReturn}>Voltar</button>
                  <button className='confirmBtn' onClick={handleSubmit}>Confirmar</button>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CadastroPage
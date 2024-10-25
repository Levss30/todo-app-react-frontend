import React from 'react';
import './CadastroPage.css';
import { useNavigate } from 'react-router-dom';

const CadastroPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    navigate('/home')
};

  const handleReturn = (e) =>{
    e.preventDefault();
    navigate('/')
  }

  return (
    <div className='background'>
        <div className='cadastropage'>
          <div className='control-wrapper'>
            <div className='cadastro-wrapper'>
                <div className='cadastro-input'>
                    <h1>Cadastro</h1>
                <div className='cadastro-input-item'>
                  <label>Nome</label>
                  <input type="text" placeholder='Digite o seu nome' required/>
                </div>
                <div className='cadastro-input-item'>
                  <label>Email</label>
                  <input type="email" placeholder='Digite o seu email' required/>
                </div>
                <div className='cadastro-input-item'>
                  <label>Senha</label>
                  <input type="password" placeholder='Digite uma senha' required/>
                </div>
                <div className='cadastro-input-item'>
                  <label>Confirmar senha</label>
                  <input type="password"  placeholder='confirme a senha' required/>
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
    </div>
  )
}

export default CadastroPage
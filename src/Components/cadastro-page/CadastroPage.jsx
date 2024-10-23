import React from 'react';
import './CadastroPage.css';

const CadastroPage = () => {
  return (
    <div className='background'>
        <div className='cadastropage'>
            <div className='cadastro-wrapper'>
                <div className='cadastro-input'>
                    <h1>Create accont</h1>
                </div>
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
                <label>
                    <input type="checkbox" name="Terms" id="terms" />
                    Aceito os termos e condições
                  </label>
                <div className='cadastro-input-button'>
                  <button className='confirmBtn'>Confirmar</button>
                  <button className='voltarBtn'>Voltar</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CadastroPage
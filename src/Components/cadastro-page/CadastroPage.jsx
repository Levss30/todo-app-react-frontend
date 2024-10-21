import React from 'react'

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
                  <input type="text" placeholder='Digite o seu nome' />
                </div>
                <div className='cadastro-input-item'>
                  <label>Email</label>
                  <input type="text" placeholder='Digite o seu email' />
                </div>
                <div className='cadastro-input-item'>
                  <label>Senha</label>
                  <input type="password" placeholder='Digite uma senha'/>
                </div>
                <div className='cadastro-input-item'>
                  <label>Confirmar senha</label>
                  <input type="password"  placeholder='confirme a senha'/>
                </div>
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
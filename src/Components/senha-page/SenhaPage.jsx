import React from 'react'
import './SenhaPage.css';

const SenhaPage = () => {
  return (
    <div className='background'>
        <div className='senhapage'>
          <div className='control-wrapper'>
            <div className='senha-wrapper'>
              <div className='wrapper-input'>
              <h1>Recuperar senha</h1>
              </div>
              <div className='wrapper'>
              <div className='wrapper-input-item'>
                <label>Digite o seu email
                  <input type="text" placeholder='meuemailteste@email.com'/>
                </label>
              </div>
              </div>
              <div className='wrapper-input-button'>
              <button className='returnBtn'>Voltar</button>
              <button className='nextBtn'>Avançar</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SenhaPage
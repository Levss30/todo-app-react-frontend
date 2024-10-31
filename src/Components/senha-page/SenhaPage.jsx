import React, { useState } from 'react'
import './SenhaPage.css';
import { useNavigate } from 'react-router-dom';

const SenhaPage = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);

    const handleReturn = (e) =>{
      e.preventDefault();
      navigate('/')
};
  return (
    <div className='background'>
        <div className='senhapage'>
          <div className='control-wrapper'>
            <div className='senha-wrapper'>
              <div className='wrapper-input'>
              <h1>Recuperar senha</h1>
              </div>
              <div className='steps'>
              <div className={`step ${step === 1 && "active"}`}>
              <div className='wrapper-input-item'>
                <label>Digite o seu email
                  <input type="text" placeholder='meuemailteste@email.com'/>
                </label>
              </div>
              </div>

              <div className='step'>
                <div className={`step ${step === 2 && "active"}`}>
                  <div className='wrapper-input-item'>
                <label>Digite o seu email
                  <input type="text" placeholder='meuemailteste@email.com'/>
                </label>
                  </div>
                </div>
              </div>

              <div className='wrapper-input-button'>
              <button className='returnBtn' onClick={handleReturn}>Voltar</button>
              <button className='nextBtn'>Avançar</button>
              </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SenhaPage
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
{/* 
              <h1>Recuperar senha</h1>
              </div>
              <div className='steps'>
              <div className={`step ${step === 1 && "active"}`}>
              <div className='wrapper-input-item'>
                <label>Digite o seu email
                  <input type="text" placeholder='Teste@email.com'/>
                </label>
              </div>
              </div>

              <div className='step'>
                <div className={`step ${step === 2 && "active"}`}>
                  <div className='wrapper-input-item'>
                <label>Enviando o código para o email fornecido</label>
                  </div>
                </div>
              </div>

              <div className='step'>
                <div className={`step ${step === 3 && "active"}`}>
                  <div className='wrapper-input-item'>
                <label>Digite o código
                  <input type="text" placeholder='Digite o código'/>
                </label>
                  </div>
                </div>
              </div>

              <div className='step'>
                <div className={`step ${step === 4 && "active"}`}>
                  <div className='wrapper-input-item'>
                <label>Senha alterada com sucesso!!</label>
                  </div>
                </div>
              </div> */}
            
              {step === 1 && (
                          <>
                            <header>
                              <h1 className="form-title">Recuperar Senha</h1>
                            </header>
                            <div className='form-description'>
                              Digite o seu email
                            </div>
                            <div className="form-group">
                              <input type='email' placeholder="Teste@Email.com"/>
                            </div>
                          </>
                        )}

              <div className='wrapper-input-button'>
              <button className='returnBtn' style={{display: `${step > 1 ? 'block' : 'none'}`}} onClick={(e) => {setStep(step - 1); e.preventDefault()}}>Voltar</button>
              <button className='nextBtn' style={{display: `${step < 4 ? 'block' : 'none'}`}} onClick={(e) => {setStep(step + 1); e.preventDefault()}}>Avançar</button>
              </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SenhaPage
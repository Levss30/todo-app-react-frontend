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
              <div className='content'>
              {step === 1 && (
                          <>
                            <header className='hstp1'>
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

              {step === 2 && (
                          <>
                            <header className='hstp2'>
                              <h2 className="form-title">Enviando um código para o email indicado</h2>
                              <p className="form-description">Um código de seis digitos deverá ser encaminhado ao seu email</p>
                            </header>
                          </>
                        )}

              {step === 3 && (
                          <>
                            <header className='htps3'>
                              <h2 className="form-title">Digite o código</h2>
                              <p>Digite o código de seis digitos enviado ao email fornecido</p>
                            </header>
                            <div className="form-group">
                              <input type='text' placeholder="000-000" />
                            </div>
                          </>
                        )}

              {step === 4 && (
                          <>
                            <header className='htps4'>
                              <h2 className="form-title">Alterar senha</h2>
                            </header>
                            <div className="form-group">
                              <input type='password' placeholder="Nova Senha"/>
                              <input type='password' placeholder="Confirmar Senha"/>
                            </div>
                          </>
                        )}

              <div className='wrapper-input-button'>
              <button className='cancelBtn' style={{display: `${step === 1 ? 'block' : 'none'}`}} onClick={handleReturn} >Cancelar</button>
              <button className='returnBtn' style={{display: `${step > 1 && step <= 4 ? 'block' : 'none'}`}} onClick={(e) => {setStep(step - 1); e.preventDefault()}}>Voltar</button>
              <button className='nextBtn' style={{display: `${step < 4 ? 'block' : 'none'}`}} onClick={(e) => {setStep(step + 1); e.preventDefault()}}>Avançar</button>
              <button className='confirmBtn' style={{display: `${step === 4 ? 'block' : 'none'}`}} onClick={handleReturn} >Confirmar</button>
              </div>
              </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default SenhaPage
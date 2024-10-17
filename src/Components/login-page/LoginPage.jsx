import './LoginPage.css'

export const LoginPage = () => {

  return (
    <div className='loginpage'>
        <div className='login-wrapper'>
            <div className='login-input'>
                <h1>Login</h1>
                <div className='login-input-item'>
                    <label>Usuario</label>
                    <input type='text' placeholder='Digite um usuario' />
                </div>
                <div className='login-input-item'>
                    <label>Senha</label>
                    <input type="text" placeholder='Digite uma senha' />
                    <label className='esquecisenha'>Recuperar senha</label>
                    <input type="checkbox" className='checkbox-login' />
                    <label className='aceppt'>Aceito os termos e condições</label>
                </div>
                <div className='login-input-item-check'>

                </div>

                <div className='login-input-item'>
                    <button type='button' className='loginBtn'>Entrar</button>
                    <button type='button' className='registerBtn'>Cadastrar-se</button>
                </div>
            </div>
        </div>
    </div>
  )
}

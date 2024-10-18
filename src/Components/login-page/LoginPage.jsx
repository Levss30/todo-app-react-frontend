import './LoginPage.css';
import { FaUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";

export const LoginPage = () => {

  return (
<div className='background'>
    <div className='loginpage'>
        <div className='login-wrapper'>
            <div className='login-input'>
                <h1>Login</h1>
                <div className='login-input-item'>
                    <label>Email</label>
                    <FaUser className='icon1'/>
                    <input type='text' placeholder='User@exemple.com' />
                </div>
                <div className='login-input-item'>
                    <label>Senha</label>
                    <FaLock id='icon2'/>
                    <input type="text" placeholder='Digite uma senha' />
                    <div className='esquecisenhaBtn'>
                    <label className='esquecisenha'>Recuperar senha</label>
                    </div>
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
</div>
  )
}

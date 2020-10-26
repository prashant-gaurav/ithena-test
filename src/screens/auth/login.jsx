import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import './style.css'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {validateUser} from '../../api/auth'


const UserLogin = () => {
    const history = useHistory();
    const [loginId, setLoginId] = React.useState('pgdev25@gmail.com')
    const [loginPassword, setLoginPassword] = React.useState('password')
    const validateUserTapped = async (e) => {
        e.preventDefault();
        await validateUser(loginId, loginPassword).then(authRes => {
            console.log(authRes)
                if (authRes.success) {
                    setTimeout(() => history.push('/home')
                        , 500);
                } else {
                    alert('Opp`s something went wrong')
                }
            },
            error => alert('Opp`s something went wrong')
        );
    }
    return (
        <div>
            <Header isActive={true}/>
            <auth>
                <div className='form'>
                    <span className='heading'>Sign in</span>
                    <p>or use your account</p>
                    <input placeholder='LoginId' onChange={e => setLoginId(e.target.value)}value={loginId}/>
                    <input placeholder='Password' onChange={e => setLoginPassword(e.target.value)} value={loginPassword}/>
                    <Link className='forgot-password' to='/forgot-password'>Forgot your password ?</Link>
                    <a className='btn-primary' onClick={validateUserTapped}>SIGN IN</a>
                </div>
                <div className='details'>
                    <span className='heading' style={{color: '#fff'}}>Hello, Friend!</span>
                    <p>Please enter your details and start journey with us.</p>
                    <Link className='btn-outline' to='/sign-up'>SIGN UP</Link>
                </div>

            </auth>
            <Footer/>
        </div>

    );
}

export default UserLogin;

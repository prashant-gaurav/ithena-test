import React from 'react';
import {Link} from 'react-router-dom';
import './style.css'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {createUser} from '../../api/auth'

const UserRegister = () => {
    const [name, setName] = React.useState('Prashant')
    const [email, setEmail] = React.useState('pgdev25@gmail.com')
    const [mobile, setMobile] = React.useState('9430021839')
    const [password, setPassword] = React.useState('password')


    const registerTapped = async (e) => {
        e.preventDefault()
        await createUser(name, email, mobile, password).then(res => {
            console.log(res)
        })

    }
    return (
        <div>
            <Header isActive={true}/>
            <auth>
                <div className='details'>
                    <span className='heading' style={{color: '#fff'}}>Welcome!</span>
                    <p>Already have account? </p>
                    <Link className='btn-outline' to='/'>SIGN IN</Link>
                </div>
                <div className='form'>
                    <span className='heading'>Sign up</span>
                    <p>or provide details</p>
                    <input placeholder='Name' onChange={e => setName(e.target.value)} value={name}/>
                    <input placeholder='Email' onChange={e => setEmail(e.target.value)} value={email}/>
                    <input placeholder='Mobile' onChange={e => setMobile(e.target.value)} value={mobile}/>
                    <input placeholder='Password' onChange={e => setPassword(e.target.value)} value={password}/>
                    <a className='btn-primary' onClick={registerTapped}>SIGN UP</a>
                </div>
            </auth>
            <Footer/>
        </div>
    );
}

export default UserRegister;

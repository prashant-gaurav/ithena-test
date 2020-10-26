import React from 'react';
import classNames from 'classnames';
import {Link, useHistory} from 'react-router-dom';
import {appName, sessionKey} from '../config'
import {userLogout} from "../api/auth";


const Header = ({isActive}) => {
    const history = useHistory();
    const sessionData = window.sessionStorage.getItem(sessionKey);
    const [isSticky, setSticky] = React.useState(isActive);
    const handleScroll = () => {
        if (!isActive) {
            if (!isSticky && window.pageYOffset > 50) {
                setSticky(true)
            } else if (isSticky && window.pageYOffset <= 50) {
                setSticky(false)
            }
        }
    };
    window.addEventListener('scroll', handleScroll)
    const headerStyle = classNames({
        'header': true,
        'header-bg': isSticky,
    })

    const logOutTapped = async (e) => {
        e.preventDefault();
        await userLogout().then(authRes => {
                setTimeout(() => history.push('/'))
            },
            error => alert('Opp`s something went wrong')
        );
    }


    return (
        <header className={headerStyle}>
            <div className='left'>
                <Link className='logo' to='/home'>{appName}</Link>
            </div>
            <div className='right'>
                {sessionData ?
                    <a className='right-link-txt' onClick={logOutTapped}><span
                        className='btn-signup'>Logout</span></a> :
                    <div>
                        <Link className='right-link-txt' to='/login'>Login</Link>
                        <Link className='right-link-txt' to='/sign-up'><span
                            className='btn-signup'>Sign up</span></Link>
                    </div>}
            </div>
        </header>
    );
}

export default Header;

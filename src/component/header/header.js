import React, { Component } from 'react'
import Logo from '../../images/inploy.png'
import welcomeTitle from '../../images/welcomeTitle.png'

class Header extends Component {
    state = {
    };

    render() {
        return (
            <div>
                <header className="header__wrapper">
                    <img src={Logo} alt="Inploy" />
                </header>
                <div className="welcome__title">
                    <img src={welcomeTitle} />
                    <h3>Register now and secure your spot on top of your category</h3>
                    <div className="welcome__title--btns">
                        <button className="primary__btn">Service Provider</button>
                        <button className="secondary__btn">Service Provider</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;

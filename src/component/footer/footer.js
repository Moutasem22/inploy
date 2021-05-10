import React, { Component } from 'react'
import Logo from '../../images/inploy.png'

class Footer extends Component {
    state = {
    };

    render() {
        const settings = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1
        };

        return (
            <footer>
                <div className="main__container">
                    <div className="footer__top">
                        <img src={Logo} />

                        <div className="contact__social">
                            <span>F</span>
                            <span>T</span>
                            <span>I</span>
                            <span>LI</span>
                        </div>
                    </div>
                    <div className="footer__bottom">
                        <div className="footer__bottom--links">
                            <a>Support</a>
                            <a>UNDERSTAND</a>
                            <a>TERMS & REGULATIONS</a>
                        </div>
                        <p>Inploy 2020. All rights reserved</p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;

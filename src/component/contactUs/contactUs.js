import React, { Component } from 'react'
import Badge from '../../images/badge.png'
import Card from '../cards/cards'

class ContactUs extends Component {
    state = {
    };

    render() {
        return (
            <div className="contact__container">
                <div className="main__container">
                    <div className="contact__container--left">
                        <h3>Contact</h3>
                        <h3>info@inploy.me</h3>
                        <p>For further assistance with projects or pre registration </p>
                        <p>How would like us to contact you?</p>
                        <div className="input__checkbox">
                            <label></label>
                        </div>
                        <input placeholder="Email" />
                        <button className="primary__btn">Send</button>
                    </div>
                    <div className="contact__container--right">
                        <span className="badge"> <img src={Badge} /></span>
                        <div className="card__social--wrapper">
                            <Card />
                            <div className="card__social--right">
                                <div className="contact__mail">
                                    <span>0100-790-9942 </span>
                                    <span>Moutasem@gmail.com</span>
                                </div>
                                <div className="contact__social">
                                    <span>F</span>
                                    <span>T</span>
                                    <span>I</span>
                                    <span>LI</span>
                                    <span>M</span>
                                    <span>P</span>
                                    <span>S</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactUs;

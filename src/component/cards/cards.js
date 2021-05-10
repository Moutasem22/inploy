import React, { Component } from 'react';
import CardImg from '../../images/cardImg.png'
import Man from '../../images/man.png'

class Cards extends Component {
    state = {
    };

    render() {
        return (
            <div className="cards__wrapper">
               <div className="cards__wrapper--img">
                   <img src={CardImg} />
               </div>
               <div className="cards__wrapper--profile">
                   <span>✓</span>
                   <img src={Man} />
                   <span>5.0</span>
               </div>

               <h3>Moutasem A</h3>
               <p>Frontend Developer - React Js</p>
               <span>Quic View</span>
            </div>
        )
    }
}
export default Cards;

import React, { Component } from 'react'
import Slider from '../slider/slider'
import clentSlider1 from '../../images/clentSlider1.png'
import clentSlider2 from '../../images/clentSlider2.png'
import clentSlider3 from '../../images/clentSlider3.png'
import clentSlider4 from '../../images/clentSlider4.png'
import clentSlider5 from '../../images/clentSlider5.png'

import slider21 from '../../images/slider21.png'
import slider22 from '../../images/slider22.png'
import slider23 from '../../images/slider23.png'
import slider24 from '../../images/slider24.png'
import slider25 from '../../images/slider25.png'

import clientCard1 from '../../images/layer.svg'
import clientCard2 from '../../images/refresh.svg'
import clientCard3 from '../../images/star.svg'

class Clients extends Component {
    state = {
    };

    render() {
        const settings = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
            ]
        };

        return (
            <div className="clients__container">
                <div className="main__container">
                    <div className="clients__container--top">
                        <div className="clients__card">
                            <img src={clientCard3} />
                            <p>Free Commission</p>
                        </div>
                        <div className="clients__card">
                            <img src={clientCard2} />
                            <p>Free Contact Exchange</p>
                        </div>
                        <div className="clients__card">
                            <img src={clientCard1} />
                            <p>30+ Services</p>
                        </div>
                    </div>

                    <h3>Success stories with 400+ Clients</h3>
                    <Slider settings={settings}>
                        <div className="item">
                            <img src={clentSlider1} />
                        </div>
                        <div className="item">
                            <img src={clentSlider2} />
                        </div>
                        <div className="item">
                            <img src={clentSlider3} />
                        </div>
                        <div className="item">
                            <img src={clentSlider4} />
                        </div>
                        <div className="item">
                            <img src={clentSlider5} />
                        </div>
                        <div className="item">
                            <img src={clentSlider1} />
                        </div>
                        <div className="item">
                            <img src={clentSlider2} />
                        </div>
                    </Slider>
                    <div className="slider-top" style={{ marginTop: '40px' }}>
                        <Slider settings={settings}>
                            <div className="item">
                                <img src={slider21} />
                            </div>
                            <div className="item">
                                <img src={slider22} />
                            </div>
                            <div className="item">
                                <img src={slider23} />
                            </div>
                            <div className="item">
                                <img src={slider24} />
                            </div>
                            <div className="item">
                                <img src={slider25} />
                            </div>
                            <div className="item">
                                <img src={clentSlider1} />
                            </div>
                            <div className="item">
                                <img src={clentSlider2} />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}
export default Clients;

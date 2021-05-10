import React, { Component } from 'react'
import Slider from "react-slick";


class CustomSlider extends Component {
    state = {
    };

    render() {
        return (
            <div>
                <Slider {...this.props.settings}>
                    {this.props.children}
                </Slider>
            </div>
        )
    }
}
export default CustomSlider;

import React, { Component } from 'react'
import Card from '../cards/cards'

class Form extends Component {
    state = {
    };

    render() {
        return (
            <div className="form__slider main__container">
                <div className="slider">
                    <h3>2000+ Service Providers on board</h3>
                    <Card />
                    <Card />
                    <Card />
                </div>

                <form className="form__schema">
                    <div className="form__schema--header">
                        <h3>Register Now</h3>
                    </div>
                    <input placeholder="Full Name" />
                    <input placeholder="Job Title" />
                    <input placeholder="Email" />
                    <input placeholder="Number" type="number" />
                    <input placeholder="Category" />
                </form>
            </div>
        )
    }
}
export default Form;

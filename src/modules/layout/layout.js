import React, { Component } from 'react'
import Header from '../../component/header/header'
import Form from '../../component/formSlider/formSlider'
import Clients from '../../component/clients/clients'
import ContactUs from '../../component/contactUs/contactUs'
import Footer from '../../component/footer/footer'

class Layout extends Component {
    state = {
    };

    render() {
        return (
            <>
                <Header />
                <Form />
                <Clients />
                <ContactUs />
                <Footer />
            </>
        )
    }
}
export default Layout;

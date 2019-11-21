import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {

    return (
        <div className={"container-fluid"}>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout;
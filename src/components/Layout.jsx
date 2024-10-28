import React from 'react';
import Header from './Header';
// import Sidebar from './Sidebar';
// import MainContent from './MainContent';
// import Footer from './Footer';

const Layout = ({ children }) => {
    return (

        <div className="" >
            <Header />
            {children}
        </div >

    );
};

export default Layout;
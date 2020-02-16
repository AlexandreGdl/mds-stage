import React , {Component} from 'react';
import Nav from './Nav/nav';
import '../style/style.scss';
import Head from 'next/head'
import Footer from './Footer/footer';

const Layout = props => {
    return(
        <>
            <Nav />
            <Head>
                <meta name="theme-color" content="#000000" />
                <meta
                name="description"
                content="Web site created using create-react-app"
                />
                <link rel="icon" href="assets/images/helyx_logo.svg" type="image/x-icon"/>
                <script src="https://kit.fontawesome.com/0999ec302d.js"></script>
            </Head>
            {props.children}
            <Footer />
        </>
    )
}

export default Layout
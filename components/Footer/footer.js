import React from 'react';
import Link from 'next/link';
import './footer.scss';

const Footer = props => {

    return(
        <footer className="block-footer">
        <div className="wrapper-footer">
            <a href="/">
              <img src="assets/images/helyx_logo_name.svg" className="logo-footer" alt="helyx"/>
            </a>
            <ul className="social-list">
                <li><Link href="#"><a><i className="fab fa-instagram"></i></a></Link></li>
                <li><Link href="#"><a><i className="fab fa-twitter"></i></a></Link></li>
                <li><Link href="#"><a><i className="fab fa-facebook-f"></i></a></Link></li>
                <li><Link href="#"><a><i className="fas fa-globe-americas"></i></a></Link></li>
            </ul>
        </div>
    </footer>
    )
  
}

export default Footer;

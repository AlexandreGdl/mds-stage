import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import './nav.scss';

const Nav = () => {
  const [navigation,setNavigation] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (navigation){
        document.body.classList.add('onNavigation')
      } else {
        document.body.classList.remove('onNavigation')
      }
    }
  })
      return(
        <div>
          <nav className="block-nav">
            <div className="nav-wrapper">
                <Link href="/">
                  <a>
                    <img src="/assets/images/helyx_logo.svg" className="nav-logo" alt="Go Home"/>
                  </a>
                </Link>
                
        
                <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" className="nav-button-menu" viewBox="0 0 62 50.5" onClick={() => setNavigation(navigation?false:'active')}>

              <g id="Icon" transform="translate(-9222.92 -213.571)">
                <path id="Tracé_27" className="st0" d="M9230.8,224l-5.2-1.9c-1.1-0.3-2.3,0.4-2.6,1.5c-0.3,1.1,0.4,2.3,1.5,2.6l5.2,1.9
                  c1.1,0.3,2.3-0.4,2.6-1.5C9232.6,225.4,9231.9,224.3,9230.8,224z"/>
                <path id="Tracé_28" className="st0" d="M9253.4,231.5l-5.2-1.9c-1.1-0.3-2.3,0.4-2.6,1.5c-0.3,1.1,0.4,2.3,1.5,2.6l5.2,1.9
                  c1.1,0.3,2.3-0.4,2.6-1.5C9255.1,233,9254.5,231.8,9253.4,231.5z"/>
                <path id="Tracé_29" className="st0" d="M9251.9,227.5c1.1,0.3,2.3-0.4,2.6-1.5c0.3-1.1-0.4-2.3-1.5-2.6l-24-8.6l-3.4-1.2
                  c-1.1-0.3-2.3,0.4-2.6,1.5c-0.3,1.1,0.4,2.3,1.5,2.6l24,8.6L9251.9,227.5z"/>
                <path id="Tracé_30" className="st0" d="M9251.9,244c1.1,0.3,2.3-0.4,2.6-1.5c0.3-1.1-0.4-2.3-1.5-2.6l-24-8.6l-3.4-1.2
                  c-1.1-0.3-2.3,0.4-2.6,1.5c-0.3,1.1,0.4,2.3,1.5,2.6l24,8.6L9251.9,244z"/>
              </g>
              </svg>

            </div>
          </nav>
        
          <div className={`navigation-page ${navigation}`}>
            <div className="navigation-page-wrapper">
              <ul className="nav-list-link" key="url">
                  <li onClick={() => setNavigation(false)} className="nav-link"><Link href="/" ><a>Home</a></Link></li>
                  <li onClick={() => setNavigation(false)} className="nav-link"><Link href="/project" ><a>Our work</a></Link></li>
                  <li onClick={() => setNavigation(false)} className="nav-link"><Link href="/team" ><a>Meet the team</a></Link></li>
                  <li onClick={() => setNavigation(false)} className="nav-link"><Link href="/#contact" ><a>Contact Us</a></Link></li>
              </ul>


              <ul className={`social-list `} key="reseau">
                <li><Link href="#"><a><i className="fab fa-instagram"></i></a></Link></li>
                <li><Link href="#"><a><i className="fab fa-twitter"></i></a></Link></li>
                <li><Link href="#"><a><i className="fab fa-facebook-f"></i></a></Link></li>
                <li><Link href="#"><a><i className="fas fa-globe-americas"></i></a></Link></li>
              </ul>
            </div>
          </div>
        </div>
      )
}

export default Nav;





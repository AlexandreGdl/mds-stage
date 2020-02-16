import React,{Component} from 'react';
import SwipeableViews from 'react-swipeable-views'
import '../style/header.scss';
import '../style/main.scss';
import '../style/contact.scss';
import Layout from '../components/Layout';
import Link from 'next/link';
import lottie from 'lottie-web';

class Index extends Component {

    constructor(props){
        super(props)
        this.state = {
            project: 'vyv', // by default the first project to appear is vyv 
            name: undefined,
            subject: undefined,
            mail: undefined,
            msg: undefined,
            sendMail: undefined,
        }
    }
    
    componentDidMount(){
        if (typeof window !== 'undefined') {
            let isMobile = false; //initiate as false
            // device detection
            if( window.innerWidth < 450 ){
                isMobile = true;
            }
            let data;
            isMobile ? data = '/assets/js/animationMobile.json' : data = '/assets/js/animationDesktop.json';
            
            let params = {
                container: document.getElementById('block-header-bg'),
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: data,
                rendererSettings:{ preserveAspectRatio:'none' }
            };
            

            let anim;
            anim = lottie.loadAnimation(params);
        }
    }


    sendMail = (e) => {
        e.preventDefault()
        this.setState({sendMail: 'loading'})

        let body = {
            email: this.state.mail,
    		name: this.state.name,
    		subject: this.state.subject,
    		msg: this.state.msg,
            psw: "HELYX"
        }

        let headers = new Headers({
            "Content-Type": "application/json",
          });

        fetch("http://localhost:3001", {
            method: "POST",
            body: JSON.stringify(body),
            headers: headers
          }).then(data => data.status === 200 ? this.setState({sendMail: 'success'}) : this.setState({sendMail: 'error'}))
          .catch(err => console.log(err))

        this.setState({
            name: "",
            mail: "",
            subject: "",
            msg: ""
        })
    }

    // if we want to make change based on current slide
    handleSwipe = (index,indexLatest,meta) => {
        this.state.project === 'vyv' ? this.setState({project: 'helyx'}) : this.setState({project: 'vyv'});
    }

  render(){
      const { project,name,mail,msg,subject,sendMail } = this.state
    return(
            <Layout>
                <div>
                <header className="block-header" id="block-header">
                    <div className="block-header-content">
                            <div className="block-header-sub top">
                                    <div className="header-wrapper">
                                            <p className="header-landing-text">Make your<br />project evolve<br />to the best</p>
                                            <a href="#main" className="header-landing-button">Discover ></a>
                                        </div>
                            </div>
                            <div className="block-header-sub bottom">
                                    <div className="header-wrapper">
                                        <p className="header-landing-text">Start your project<br />with an advantage</p>
                                        <p className="header-sub-landing-text">We  can  also  carry you to<br /> hatch the egg containing<br/>your project</p>
                                    </div>
                            </div>
                    </div>

                    <div id="block-header-bg">
                                    
                    </div>
                </header>
    

                <main className={`block-main ${project}`} id="main">
                    <SwipeableViews
                    enableMouseEvents
                        resistance
                    onChangeIndex={this.handleSwipe}
                    >
                        <div className="swiper-slide vyv">
                                    <div className="project-wrapper">
                                        <img src="assets/images/project_vyv.svg" className="project-img" alt="vyv"/>
                                        <div className="project-description">
                                            <Link href="/project">
                                                <a>
                                                    <p className="project-title">VYV</p>
                                                    <p>Application</p>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide helyx">
                                        <div className="project-wrapper">
                                            <img src="assets/images/helyx_branding.svg" className="project-img" alt="branding"/>
                                            <div className="project-description">
                                                <Link href="/project">
                                                    <a>
                                                        <p className="project-title">Helyx</p>
                                                        <p>Branding</p>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                </div>
                    </SwipeableViews>
                </main>

                <section className="block-contact">
                    <div className="wrapper-contact">
                        <div className="block-text-contact">
                            <p className="main-text-contact">You here !</p>
                            <p className="sub-text-contact">Need a quote or just chat ? <br /> Contact us !</p>
                            <div className="blue-bar"></div>
                            <ul className="social-list">
                                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fas fa-globe-americas"></i></a></li>
                            </ul>
                
                        </div>
                        <div className="block-form-contact" id="contact">
                            <form className="form-contact" onSubmit={(e) => e.preventDefault()}>
                                <input type="text" placeholder="Nom Prénom"  onChange={(e) => this.setState({name: e.currentTarget.value})}/>
                                <input type="text" placeholder="Sujet"  onChange={(e) => this.setState({subject: e.currentTarget.value})}/>
                                <input type="mail" placeholder="E-Mail"  onChange={(e) => this.setState({mail: e.currentTarget.value})}/>
                                <textarea placeholder="Votre message ici ..."  onChange={(e) => this.setState({msg: e.currentTarget.value})}></textarea>
                                <button type="submit" className="button-submit-contact" onClick={(e) => 
                                    name && mail && msg && subject ? this.sendMail(e) : false
                                }>
                                    <p>Envoyer </p>
                                    <i className="fas fa-chevron-right"></i>
                                </button>
                                {sendMail === 'success'  ? 
                                <p className="message success">
                                    L'envoie de votre mail a bien été effectuer !
                                </p>:
                                sendMail === 'loading' ? 
                                <p className="message">
                                    Envoie du mail . . .
                                </p> :
                                sendMail === 'error' ? 
                                <p className="message error">
                                    Erreur lors de l'envoie du mail.
                                </p>
                                :false}
                            </form>
                        </div>
                    </div>
                </section>
                </div>
          </Layout>
    )
  }
}


export default Index;

import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import "./Header.css";
import Particles from 'react-particles-js';
import ParticleBackgground from "../Particle/ParticleBackgground";
class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home">
        {/* <ParticlesBg type="circle" bg={true} /> */}
                     <div style={{position: "absolute", left: "0px", top: "100px", width: "100%", maxHeight: "100%"}}>
                     <ParticleBackgground />
                     </div>

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">

            <Fade bottom duration={1200}>
            <div style={{ textAlign: "center", height: "auto", paddingTop: "25vh", paddingBottom: "25vh", fontFamily: "revert"}}>
            <h1 style={{fontWeight: "lighter"}} className="animations">Khan Maruful Islam </h1>  
                 <div className="wallpaper">
                     <div  style={{fontWeight: "lighter"}} className="staticText">I'm a</div>
                         <ul className="dynamicText">
                            <li> <span style={{ position: "relative", zIndex: "-5"}}> Web Developer</span> </li>
                         </ul>
                    </div>
                  <h3 className="socialLinks"><a href="https://github.com/Maruful01"><i class="fab fa-github-alt"></i> </a> 
                 <a href="https://www.linkedin.com/in/khan-maruful-islam-719079211/"><i class="fab fa-linkedin-in"></i></a>
                 <a href="https://www.facebook.com/tonmoy.ahammed.58/"> <i class="fab fa-facebook"> </i> </a>
                 <a href="+8801799827366"> <i class="fab fa-whatsapp"> </i></a> 
                  </h3>
              </div>

            </Fade>
            <hr />
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;

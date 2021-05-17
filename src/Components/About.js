import React, { Component } from "react";
import Resume from "./Khan Maruful Islam_Resume.pdf"
import Fade from "react-reveal";
import Image from "./1553_edited.jpg"
import "../App.css";
import ParticleBackgground from "../Particle/ParticleBackgground";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
                <div style={{position: "absolute", left: "0px", top: "100vh", width: "100%"}}>
                     <ParticleBackgground  />
    
                       </div>
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-image"
                src={Image}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p> I am a font-end web developer and I work with youth and indomitable desire
                              Learnend web development from Programing Hero.
                              Bringing forth experinse in desgine, installation, testing and maintenance of web systems
                              Familiaer with backend development.
                              Tools: Git, VSCode, Chrome Dev Tool, , Adobe Illustrator, Adobe Photoshop.
                                    Bringing forth experinse in desgine, installation, testing and maintenance of web systems</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>Khan Maruful Islam</span>
                    <br />
                    <span>
                      Mirpur-2
                      <br />
                      Dhaka
                    </span>
                    <br />
                    <span>+8801799827366</span>
                    <br />
                    <span>khanmarufulis@gmail.com</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href={Resume} className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;

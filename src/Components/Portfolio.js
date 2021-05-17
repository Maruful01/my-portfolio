import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";
import ParticleBackgground from "../Particle/ParticleBackgground";
import "../App.css";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div style={{ textAlign: "center" }} className="item-wrap">
            <Zmage alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>{projects.title}</div>
            <div style={{ textAlign: "center" }}>{projects.category}</div>
             <div  className="link-container">
            <a href={projects.live}><button className="link-btn">Live</button></a> 
            <a href={projects.git}> <button className="link-btn" style={{ background: "red", fontSize: "30px" }}><i class="fab fa-github-alt"></i></button></a> 
             </div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
                        <div style={{position: "absolute", left: "0px", top: "275vh", width: "100%"}}>
                        <ParticleBackgground  />
                       </div>
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;

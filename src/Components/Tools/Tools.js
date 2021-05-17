import React from 'react';
import "./Tools.css";
import ToolsCart from './ToolsCart';
import Slide from "react-reveal";
 const logo = [
              {
              title: "React",
              logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
              },
              {
                title: "Javascript",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
              },
              {
                title: "Mongodb",
                logo: "https://www.pngitem.com/pimgs/m/184-1843023_svg-mongodb-logo-png-transparent-png.png"
              },
              {
                title: "Nodejs",
                logo: "https://nodejs.org/static/images/logo-hexagon-card.png"
              },
              {
                title: "HTML",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png"
              },
              {
                title: "CSS",
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu-PHhRQ1zTiMkXeIaJudFABEvC2cxrgz3Ag&usqp=CAU"
              }
              ,
              {
                title: "Bootstrap",
                logo: "https://camo.githubusercontent.com/bec2c92468d081617cb3145a8f3d8103e268bca400f6169c3a68dc66e05c971e/68747470733a2f2f76352e676574626f6f7473747261702e636f6d2f646f63732f352e302f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67"
              }
              ,
              {
                title: "Material ui",
                logo: "https://material-ui.com/static/logo.png"
              }
            ]

const Tools = () => {
    return (
      <Slide left duration={1300}>
        <section style={{height: "auto", paddingBottom: "20px", paddingTop: "10px"}}>
        <h3 style={{color: "red", textAlign: "center"}}>Tools I use</h3>
        <div className="skills-cart">
             {
              logo.map(data => <ToolsCart skill={data}> </ToolsCart>)  
             }
        </div>
        </section>
        </Slide>
    );
};

export default Tools;
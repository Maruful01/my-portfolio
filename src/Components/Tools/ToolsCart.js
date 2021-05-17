import React from 'react';
import "./Tools.css";
const ToolsCart = ({skill}) => {
    return (
        <div className="skill-cart">
        <img src={skill.logo} alt=""/>
        </div>
    );
};

export default ToolsCart;
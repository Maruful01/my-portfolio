import React, { useState } from 'react';
import "./Products.css";
import { Button } from 'react-bootstrap';

const ProductCart = ({products}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal(){
      setIsOpen(false);
    }
    return (
               <div className="box">
                        {/* <div className="projectDetails">
                        <h3>{products.name}</h3>
                        <p>{products.line1}</p>
                        <p>{products.line2}</p>
                        <p>{products.line3}</p>
                        <div className="btn">
                        <a href={products.live}><Button style={{margin: "10px"}} variant="info">View Live Site</Button></a>
                        <a href={products.git}><Button style={{margin: "10px 10px 10px 0px"}} variant="success">Git Hub Link</Button></a>
                        </div>
                
                        </div>
                       <a href={products.live}> <img className="projectIMG"  src={products.img} alt=""/> </a> 
                       <Button  onClick={openModal} className="detailsBtn" variant="outline-info"> Description </Button> */}
                       <img src={products.img} className="image"  alt=""/>
                       <div className="details">
                       <h4>{products.name}</h4>
                       <p>{products.line1}</p>
                       <p>{products.line2}</p>
                        <p>{products.line3}</p>
                        <div className="btn-div">
                        <a href={products.live}> <button  onClick={openModal} className="detail-Btn"> Live Preview</button> </a>
                        <a href={products.git}> <button  onClick={openModal} className="detail-Btn"> GitHub</button> </a>
                        </div>
                
                       </div>
             </div>
    );
};

export default ProductCart;
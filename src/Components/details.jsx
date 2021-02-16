import React from 'react';
import { Link } from 'react-router-dom';

const Detailes = () => {
    const handleToHome = () => {
        window.location= "/"
    }
        return ( 
            <div className="container">
                <div className="m-3">
                    <button onClick={handleToHome} className="btn btn-success btn-sm">BACK HOME</button>
                    </div>
                    <Link to="/detailes"></Link>
                <div className="card-body" style={{width: '100%', display: "flex"}}>    
                    
                    <div style={{width: "40%",marginRight: 20}}>
                    <img style={{display: "block", width: "100%"}} src="https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg" className="card-img-top" alt=""/>
                    </div>

                    <div style={{width: "70%", marginTop: 50, textAlign: "left"}}>
                        <div className="card-title"><span>Name :</span> </div>
                        <div className="card-title"><span>Category :</span> </div>
                        <div className="card-title"><span>Info :</span> </div>
                        <div className="card-title"><span>Glass :</span> </div>
                        <div className="card-title"><span>Instructons : </span> </div>
                        <div className="card-title"><span>Ingredients : </span> </div>
                    </div>
                
                </div> 
            </div>
            
         );
}
 
export default Detailes;

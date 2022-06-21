import React from "react";

// icon
import { AiOutlineCloseCircle } from "react-icons/ai";
//scss
import '../sass/User.scss';

function User ({id,email,password,deleteUser}){

    
    

    return(
        <div className="container-user">
            
            <img className="user-img" src="https://www.kindpng.com/picc/m/75-757040_transparent-personas-png-para-render-leo-oliveira-png.png" alt="" />

            <div className="user-description">
                <div className="user-info">
                    <p>{email}</p>
                    <p>{password}</p>
                </div>
                <div className="user-icon"
                    onClick={()=>(deleteUser(id))}>
                    <AiOutlineCloseCircle/>
                </div>
            </div>
        </div>
    );
}; 

export default User
import React from "react";
// Icons
import { AiOutlineTeam } from "react-icons/ai";
// SASS
import '../sass/Button.scss'

function Button(props){
    if(props.type === 'login' || props.type === 'register'){
        return(
            <button className={`btn btn-${props.type}`}
        onClick={props.mClick}>

            {props.text}

            <div className="login-icon">
                <AiOutlineTeam />
            </div>
        </button>
        )
    }
    
    
};

export default Button;
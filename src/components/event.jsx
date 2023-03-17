import React from "react";

const Event = (props) =>{


return(
 

    <div className="card">        
    <img src={props.img} alt="" className="images"/>
    <h4>{props.name}</h4>
    <h5>{props.description}</h5>
   <a href={props.href}><button type="submit">more info</button></a> 
    </div>
    



)

}

export default Event;
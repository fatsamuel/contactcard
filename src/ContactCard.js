import React from "react"
import App from "./App"




function ContactCard(props) {
    console.log(props)
    return (
        
        <div className="contact-card">
          <img scr={props.contact.imUrl} />
          <h3>{props.contact.name}</h3>
          <p>{props.contact.phone}</p>
          <p>{props.contact.email}</p>
        </div>
  
    
       
      
    );
  }


export default ContactCard;
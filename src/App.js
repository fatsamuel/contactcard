import React from "react"
import ContactCard from "./ContactCard"

function App() {
  return (
    <div className="contacts">
      <ContactCard 
      contact={{name: "Mr. Whiskerson", 
      imUrl : "http://www.w3.org/2000/svg", 
      phone :"123456", 
      email : "hello@test.com"}} 
      />
      <ContactCard 
      contact={{name: "Mr. Whiskerson", 
      imUrl : "http://www.w3.org/2000/svg", 
      phone :"123456", 
      email : "hello@test.com"}}  
      />
      <ContactCard 
      
      contact={{name: "Mr. Whiskerson", 
      imUrl : "http://www.w3.org/2000/svg", 
      phone :"123456", 
      email : "hello@test.com"}} 
      />
    </div>
  );
}

export default App;

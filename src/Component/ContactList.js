import Navbar from "./Navbar";
import Footer from "./Footer";
import KanoMap from "./Maps";

/*const ContactList = () => {
    
    return (
        <div>
            <div className="title">
                <Navbar />
            </div>
            <div className="second">
                <p className="ours">Contact Us</p>
                <p className="dolor">
                    Lorem ipsum, dolor sit amet consectetur <span className="elicits">adipisicing elit.</span>
                </p>
            </div>

            <div>
                <button className="submit">
                    <a>Submit</a>
                </button>
            </div>
            
            <Footer />
        </div>
        
    );
}
 
export default ContactList;*/

import React, { useState } from 'react';

function ContactList() {
  const [formData, setFormData] = useState({
    names: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`name: ${formData.names}, email: ${formData.email}, message: ${formData.message}`);
  };

  
  return (
    <div>
        <div className="title">
                <Navbar />
        </div>
            <div className="second">
                <p className="count">Contact Us</p>
                <p className="dolor">
                    Lorem ipsum, dolor sit amet consectetur <span className="elicits">adipisicing elit.</span>
                </p>
            </div>
            <KanoMap />
            <img src="https://www.google.com/search?q=kano+kumbotso+map&sca_esv=8a5f3c529fc99551&ei=zT-3Z9zfJcyThbIPxsyOqAI&ved=0ahUKEwic-rzKvtKLAxXMSUEAHUamAyUQ4dUDCBA&uact=5&oq=kano+kumbotso+map&gs_lp=Egxnd3Mtd2l6LXNlcnAiEWthbm8ga3VtYm90c28gbWFwMgQQABhHMgQQABhHMgQQABhHMgQQABhHMgQQABhHMgQQABhHMgQQABhHMgQQABhHSP08UKALWKALcAF4A5ABAJgBAKABAKoBALgBA8gBAPgBAZgCA6ACLMICChAAGLADGNYEGEeYAwDiAwUSATEgQIgGAZAGCJIHATOgBwA&sclient=gws-wiz-serp" alt=" "></img>
        <form onSubmit={handleSubmit}>
            <div className="labels">
            <label>
            Name
        </label>
            <input id='form'
                type="text" 
                name="names" 
                value={formData.names} 
                onChange={handleChange} 
            />
            </div>
            <div className="labels">
            <label>
            Email
        </label>
            <input id='form'
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
            />
            </div>
            <div className="labels">
            <label>
        Message
        </label>
        <input id='forms'
            type="text" 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
        />
            </div>
            <div className="lasts">
                <button className='submit' type="submit">
                <a id="sub" href="#">Submit</a></button>
            </div>
        
    </form>
    <Footer />
    </div>
    
    );
}

export default ContactList;
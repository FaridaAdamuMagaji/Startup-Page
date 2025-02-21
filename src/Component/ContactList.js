import Navbar from "./Navbar";
import Footer from "./Footer";
import GoogleMapKano from "./Maps";
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
            <div className="maps">
                <div>
                    <GoogleMapKano />
                </div>
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
            </div>
        <Footer />
    </div>
    
    );
}

export default ContactList;
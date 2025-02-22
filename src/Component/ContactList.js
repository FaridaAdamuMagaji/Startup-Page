import Navbar from "./Navbar";
import Footer from "./Footer";
import GoogleMapKano from "./Maps";
import React, { useState } from 'react';
import { motion } from "framer-motion";

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
                <motion.div
                    className="lasts"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                <motion.button
                    className="submit px-6 py-2 bg-turquoise-500 text-white rounded-lg shadow-lg"
                    whileHover={{ scale: 1.1, backgroundColor: "#74c69d" }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                >
                    <a id="sub" href="#">Submit</a>
                </motion.button>
                </motion.div>
            </form>
            </div>
        <Footer />
    </div>
    
    );
}

export default ContactList;
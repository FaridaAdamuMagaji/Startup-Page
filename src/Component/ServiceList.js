import Navbar from "./Navbar";
import tick from "../assets/tick.svg";
import { useState } from "react";
import Footer from "./Footer";
import { motion } from "framer-motion";

const ServiceList = (props) => {
    const [service, setService] = useState([
        {
            subscription: 'Basic',
            cost: '$100',
            time: '/month',
            lorem: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam',
            picture: 'tick', 
            text: 'Lorem ipsum, dolor sit',
            id: 1
        },
        {
            subscription: 'Plus',
            cost: '$250',
            time: '/month',
            lorem: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam',
            picture: 'tick', 
            text: 'Lorem ipsum, dolor sit',
            id: 2
        },
        {
            subscription: 'Pro',
            cost: '$400',
            time: '/month',
            lorem: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam',
            picture: 'tick', 
            text: 'Lorem ipsum, dolor sit',
            id: 3
        }
    ]);
    
    console.log(props, service);
    
    return (
        <div>
            <div className="title">
                <Navbar />
            </div>
            <div className="second">
                <p className="part">PLANS</p>
                <p className="ours">Our Services</p>
                <p className="dolor">
                    Lorem ipsum, dolor sit amet consectetur <span className="elicits">adipisicing elit.</span>
                </p>
            </div>
            <div className="key">
                {service.map((services, index) => (
                    <motion.div 
                        className="shadow" 
                        key={services.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div>
                            <p className="basic">{services.subscription}</p>
                            <div className="cost">
                                <p className="mile">{services.cost}</p>
                                <p className="month">{services.time}</p>
                            </div>
                            <p className="amet">{services.lorem}</p>
                            <div className="tick">
                                {[...Array(5)].map((_, i) => (
                                    <div className="ticks" key={i}>
                                        <img src={tick} alt="works" />
                                        <p className="sits">{services.text}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="last">
                            <motion.button
                                className="learn px-6 py-2 bg-blue-500 text-white rounded-lg shadow-lg"
                                whileHover={{ scale: 1.1, backgroundColor: "#74C69D" }}
                                whileTap={{ scale: 0.95 }}
                            >
                            <a className="lean" href="#">Learn More</a>
                            </motion.button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default ServiceList;


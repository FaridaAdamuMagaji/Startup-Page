import Navbar from "./Navbar";
import tick from "../assets/tick.svg";
import { useState } from "react";
import Footer from "./Footer";

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
                <p className="part">
                    PLANS
                </p>
                <p className="ours">Our Services</p>
                <p className="dolor">
                    Lorem ipsum, dolor sit amet consectetur <span className="elicits">adipisicing elit.</span>
                </p>
            </div>
            <div className="key">
                {service.map((services) => (
                    <div className="shadow" key={services.id}>
                        <div>
                            <p className="basic">{services.subscription}</p>
                            <div className="cost">
                                <p className="mile">{services.cost}</p>
                                <p className="month">{services.time}</p>
                            </div>
                            <p className="amet">{services.lorem}</p>
                            <div className="tick">
                                <div className="ticks">
                                    <img src={tick} alt="works" />
                                    <p className="sits">{services.text}</p>
                                </div>
                                <div className="ticks">
                                    <img src={tick} alt="works" />
                                    <p className="sits">{services.text}</p>
                                </div>
                                <div className="ticks">
                                    <img src={tick} alt="works" />
                                    <p className="sits">{services.text}</p>
                                </div>
                                <div className="ticks">
                                    <img src={tick} alt="works" />
                                    <p className="sits">{services.text}</p>
                                </div>
                                <div className="ticks">
                                    <img src={tick} alt="works" />
                                    <p className="sits">{services.text}</p>
                                </div>
                            </div>
                            <div className="last">
                                <button className="learn">
                                    <a className="lean" href="#">Learn More</a>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
            
        </div>
    );
}

export default ServiceList;

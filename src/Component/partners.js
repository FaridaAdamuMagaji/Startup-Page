import google from "../assets/google.png";
import microsoft from "../assets/microsoft.svg";
import facebook from "../assets/facebook.svg";
import spotify from "../assets/spotify.svg";
import airbnb from '../assets/airbnb.png';
import {motion} from "framer-motion";

const Partners = () => {
    return (
        <div className="partners">
            <div className="second">
                <p className="part">
                    PARTNERS
                </p>
                <p className="bold">
                    Lorem ipsum Dolor
                </p>
                <p className="dolor">
                    Lorem ipsum, dolor sit amet consectetur <span className="elicits">adipisicing elit.</span>
                </p>
            </div>
            <div className="flex">
                <div>
                    <img className="google" src={google} alt="google"/>
                </div>
                <div className="micro">
                    <img src={microsoft} alt="microsoft" id="microsoft"/>
                </div>
                    <div>
                        <img className="bnb" src={airbnb} alt="airbnb" id="bnb"/>
                    </div>
                    <div>
                        <img src={facebook} alt="facebook" id="face"/>
                    </div>
                    <div>
                        <img src={spotify} alt="spotify" id="spot"/>
                    </div>     
            </div>
            <motion.button
                className="learn px-6 py-2 bg-blue-500 text-white rounded-lg shadow-lg"
                whileHover={{ scale: 1.1, backgroundColor: "#2563eb" }}
                whileTap={{ scale: 0.95 }}
            >
                <a className="lean" href="#">Learn More</a>
            </motion.button>

        </div>
    );
} 

export default Partners;
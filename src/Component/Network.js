import networking from "../assets/networking.png";
import society from "../assets/society.png";
import {motion} from "framer-motion";

const Network = () => {
    return (
        <div className="tweet">
            <div className="tele">
                <div className="group">
                    <img className="group" src={society} alt="group"/>
                </div>
                <div className="sit">
                    <p className="net">
                        Lorem ipsum dolor sit amet consectetur 
                    </p>
                    <p className="nets">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?
                    </p>
                    <motion.button
                        className="more px-6 py-2 bg-blue-500 text-white rounded-lg shadow-lg"
                        whileHover={{ scale: 1.1, backgroundColor: "#2563eb" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <a href="#" className="bi">Learn More</a>
                    </motion.button>
                </div>
            </div>
            <div className="teles">
                <div className="group">
                    <img className="group" src={networking} alt="network"/>
                    </div>
                    <div className="sit">
                    <p className="net">
                        Lorem ipsum dolor sit amet consectetur 
                    </p>
                    <p className="nets">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?
                    </p>
                    <motion.button
                        className="more px-6 py-2 bg-blue-500 text-white rounded-lg shadow-lg"
                        whileHover={{ scale: 1.1, backgroundColor: "#2563eb" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <a href="#" className="bi">Learn More</a>
                    </motion.button>
                </div>
            </div>
            
            
        </div>
    );
}

export default Network;
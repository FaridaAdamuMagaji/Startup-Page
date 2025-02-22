import { useState } from "react";
import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.png";
import work4 from "../assets/work4.png";
import work5 from "../assets/work5.png";
import work6 from "../assets/work6.png";
import work7 from "../assets/work7.png";
import work8 from"../assets/work8.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion"; 

const PortfolioList = (props) => {
    const [works, setWorks] = useState([
        { images: work1, id: 1},
        { images: work2, id: 2},
        { images: work3, id: 3},
        { images: work4, id: 4},
        { images: work5, id: 5},
        { images: work6, id: 6},
        { images: work7, id: 7},
        { images: work8, id: 8}
    ]);
    console.log(props, works);
    return (
        <div>
            <div className="title">
                <Navbar />
            </div>
            
            <div className="second">
                <p className="part">
                    WORKS
                </p>
                <h1>Portfolio</h1>
                <p className="dolor">
                    Lorem ipsum, dolor sit amet consectetur <span className="elicits">adipisicing elit.</span>
                </p>
            </div>
            <div className="portfolio">
                {works.map((work) => (
                    <motion.div
                        key={work.id}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)" }}
                        className="rounded-lg overflow-hidden shadow-lg"
                    >
                        <motion.img
                            src={work.images}
                            alt="works"
                            id="ports"
                            className="w-full h-auto object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div> 
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
            <Footer />
        </div>
        
        
    );
}

export default PortfolioList;
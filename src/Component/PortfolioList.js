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
                    <div key={work.id}>
                        <div className="port">
                            <img src={work.images} alt="works" id="ports" />
                        </div>
                    </div>
                ))}
            </div>
            <div className="last">
                <button className="learn">
                    <a className="lean" href="#">Learn More</a>
                </button>
            </div>
            <Footer />
        </div>
        
        
    );
}

export default PortfolioList;
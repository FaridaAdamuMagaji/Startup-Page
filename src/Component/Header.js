import community from "../assets/community.png"
import Navbar from "./Navbar";


const Header = () => {
    return (
        <nav className="title">
            <Navbar />
            <div className="starts">
                <div className="people">
                    <img className="bulb" src={community} alt="group"></img>
                </div>
                <div className="paragraph">
                    <p className="first">
                        WELCOME
                    </p >
                    <p className="lorem">
                        Lorem ipsum dolor sit amet consectetur               
                    </p>
                    <p className="ipsum">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?
                    </p>
                    <button className="one">
                        <a className="text" href="#">Explore</a>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Header;
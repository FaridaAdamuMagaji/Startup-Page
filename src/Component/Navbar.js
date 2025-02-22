import logo from "../assets/logo.svg";
import Menu from "./menu";

const Navbar = () => {
    
    return (
        <header>
            <div className="head">
                <div className="start">
                    <img src={logo} alt="slide" id="slide"/>
                    <p className="star">Start</p>
                </div>
                <Menu />
            </div>
        </header>
        
    );
}
export default Navbar;

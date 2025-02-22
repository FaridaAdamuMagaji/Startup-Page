import facebookicon from "../assets/facebookicon.svg";
import instalogo from '../assets/instalogo.svg';
import twitterlogo from "../assets/twitterlogo.svg";
import pinterestlogo from '../assets/pinterestlogo.svg';
import tiktoklogo from '../assets/tiktoklogo.svg';
import whatsapp from "../assets/whatsapp.svg";
import youtube from "../assets/youtubeicon.svg";

const Footer = () => {
    return (
        
        <div className="footer">
            <div className="foot">
                <div className="icons">
                    <img src={facebookicon} alt="icon"></img>
                    <img src={instalogo} alt="icon"></img>
                    <img src={twitterlogo} alt="icon"></img>
                    <img src={pinterestlogo} alt="icon"></img>
                    <img src={tiktoklogo} alt="icon"></img>
                    <img src={whatsapp} alt="icon"></img>
                    <img src={youtube} alt="icon"></img>
                </div>
                <div>
                    <p className="copy">&copy; start, 2022. All righs reserved.</p>
                </div>
            </div>
            
            
            
        </div>
    );
}

export default Footer;
import './Footer.css';
import {FaYoutube,FaFacebook,FaLinkedin, FaInstagram} from 'react-icons/fa';

export default function Footer (){
    return (
        <>
        <footer>
        <div className="footer">
            
        
            
            <div className="col-3">
                <h4>Find us</h4>
                <div className="social-icons">
                    <FaYoutube className='social-icon'/>
                    <FaFacebook className='social-icon'/>
                    <FaLinkedin className='social-icon'/>
                    <FaInstagram className='social-icon'/>
                </div>
                
            </div>

        </div>
    </footer>


        </>
    )
}
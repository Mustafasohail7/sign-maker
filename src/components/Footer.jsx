//stylesheet
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <h1 className="footer-logo">Logo</h1>
      <div className="footer-columns">
        <ul className="footer-flex">
            <li className="footer-item">About</li>
            <li className="footer-item">Contact</li>
            <li className="footer-item">Terms of Use</li>
            <li className="footer-item">Privacy Policy</li>
            <li className="footer-item">Careers</li>
            <li className="footer-item">Advertise</li>
            <li className="footer-item">Blog</li>
            <li className="footer-item">Help</li>
            <li className="footer-item">Status</li>
            <li className="footer-item">Account</li>
            <li className="footer-item">888 456 764</li>
            <li className="footer-item">johndoe@email.com</li>    
        </ul>
      </div>
      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

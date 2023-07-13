import { Link } from 'react-scroll'

//stylesheet
import '../styles/DropDown.css'

const DropDown = ({dropDown}) => {
  return (
    <div className={`navbar-dropdown ${dropDown ? 'open' : ''}`}>
        <ul className="navbar-options-dropdown">
            <li className="nav-item-dropdown">
              <Link to="portfolio" smooth={true} duration={500}>
                  Portfolio
              </Link>
            </li>
            <li className="nav-item-dropdown">
              <Link to='features' smooth={true} duration={700}>
                  Features
              </Link>
            </li>
            <li className="nav-item-dropdown">
              <Link to='description' smooth={true} duration={800}>
                  Description
              </Link>
            </li>
            <li className="nav-item-dropdown">
              <Link to='faq' smooth={true} duration={800}>
                  FAQ
              </Link>
            </li>
            <li className="nav-item-dropdown">
              <Link to='about' smooth={true} duration={800}>
                  About
              </Link>
            </li>
        </ul>
    </div>
  )
}

export default DropDown

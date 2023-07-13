import { BiLogoFacebookCircle, BiLogoInstagram } from 'react-icons/bi'

//stylesheet
import '../styles/Header.css'

const Header = () => {
  return (
    <header className="header">
        <div className='header-left'>
          Free Shipping
        </div>
        <div className='header-right'>
          <a href='https://www.google.com' target='_blank' rel='noreferrer' ><BiLogoFacebookCircle/></a>
          <a href='https://www.google.com' target='_blank' rel='noreferrer' ><BiLogoInstagram/></a>
        </div>
    </header>
  )
}

export default Header

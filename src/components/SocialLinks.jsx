import '../styles/SocialLinks.css'

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

const SocialLinks = () => {
  return (
    <div className="floating-social-media">
        <a href='https://www.google.com' target='_blank' rel='noreferrer' className='social-media-icon' ><FaFacebookF size={25} /></a>
        <a href='https://www.google.com' target='_blank' rel='noreferrer' className='social-media-icon' ><FaTwitter size={25} /></a>
        <a href='https://www.google.com' target='_blank' rel='noreferrer' className='social-media-icon' ><FaInstagram size={25} /></a>
        <a href='https://www.google.com' target='_blank' rel='noreferrer' className='social-media-icon' ><FaYoutube size={25} /></a>
    </div>
  )
}

export default SocialLinks

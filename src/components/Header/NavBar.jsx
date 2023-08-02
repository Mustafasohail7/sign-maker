import { useEffect, useState } from 'react';

//Three Bars and Shopping Cart Icon
import { FaBars } from 'react-icons/fa'
import { BsCart3 } from 'react-icons/bs'

//component
import NavBarItem from './NavBarItem';

//data
import NavBarData from '../../data/NavBarData'

//style
import '../../styles/NavBar.css'

//logo
import logo from '../../assets/logo.png'

const NavBar = ({setDropDown}) => {

    const [shrink, setShrink] = useState(false)

    //Close the dropdown menu when the user scrolls
    useEffect(() => { 
        const handleScroll = () => {
        if (window.scrollY > 500) {
            setDropDown(false)
        }};

        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    },[setDropDown])

    //Toggle the dropdown menu
    const toggleMenu = () => {
      setDropDown(prev => !prev)
    };

    //Close the dropdown menu when the user resizes the window
    const handleResize = () => {
        if(window.innerWidth > 768) {
            setDropDown(false)
            setShrink(false)
        }else{
            setShrink(true)
        }
    }

    //resize event listener
    useEffect(() => {

        handleResize()

        window.addEventListener('resize',handleResize)

        return () => {
            window.removeEventListener('resize',handleResize)
        }
    })

    const shrinkedNavBar = () => (
        <div className='header-shrinked'>
            <div className="navbar-toggle" onClick={toggleMenu}>
                <FaBars />
            </div>
            <img src={logo} alt="logo" className="navbar-logo" />
            <div className="navbar-cart">
                <BsCart3 />
                <span className="cart-count">3</span>
            </div>
        </div>
    )
  
    const expandedNavBar = () => (
        <>
            <div className='header-left'>
                    <div className="navbar-toggle" onClick={toggleMenu}>
                        <FaBars />
                    </div>
                    <img src={logo} alt="logo" className="navbar-logo" />
                    <ul className='navbar-options'>
                        {NavBarData.map((navbarItem) => (
                            <NavBarItem key={navbarItem.id} NavBarData={navbarItem}/>
                        ))}
                    </ul>
            </div>       
            <div className="navbar-cart">
                <BsCart3 />
                <span className="cart-count">3</span>
            </div>
            </>
    )

    return (
      <nav className="navbar">
        <div className='main-flex-container'>
            {shrink ? 
            shrinkedNavBar()
            :
            expandedNavBar()
            }
        </div>
      </nav>  
    )
}

export default NavBar

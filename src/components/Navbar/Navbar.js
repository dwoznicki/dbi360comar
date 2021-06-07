import React, {useState, useEffect} from 'react';
import { FaBars, FaClosedCaptioning, FaLastfmSquare, FaTimes} from 'react-icons/fa';
import { IconContext} from 'react-icons/lib';
import { Button } from '../../globalStyles';
import {Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks, NavItemBtn, NavBtnLink} from './Navbar.elements';

const logoImage = require('../../images/logo.png');
const Navbar = () => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false) 

    const showButton = () => {
      if(window.innerWidth <= 960) {
        setButton(false)
      } else {
        setButton(true)
      }
    }

useEffect(() => {
  showButton()
}, [])

window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
          <Nav>
            <NavbarContainer>
              <NavLogo to='/' onClick={closeMobileMenu}>
                <NavIcon src={logoImage.default}/>
                DBI360
              </NavLogo>
              <MobileIcon onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
              </MobileIcon>
              <NavMenu onClick={handleClick} click={click}>
                  <NavItem>
                    <NavLinks to='/'>Home</NavLinks>
                  </NavItem>                               
                  <NavItem>
                    <NavLinks to='/aboutus'>About us</NavLinks>
                  </NavItem>                                                                                              
                  <NavItem>
                    <NavLinks to='/Prodviewer'>360° Product View</NavLinks>
                  </NavItem>                                                              
                  <NavItem>
                    <NavLinks to='/contactus'>Contact Us</NavLinks>
                  </NavItem>
                  <NavItemBtn>
                    {button ? (
                      <NavBtnLink to="/sign-up">
                        <Button primary>SIGN UP</Button>
                      </NavBtnLink>
                    ) : (
                       <NavBtnLink to="s/sign-up">
                         <Button fontBig primary>SIGNUP
                         </Button>
                       </NavBtnLink> 
                    )}
                  </NavItemBtn>
              </NavMenu>
            </NavbarContainer>
          </Nav>
        </IconContext.Provider>   
        </>
    )
}

export default Navbar 
                  
             
          

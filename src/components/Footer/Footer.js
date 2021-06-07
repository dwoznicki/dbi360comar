import React from 'react';
import { Button } from '../../globalStyles';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
    FooterContainer,
    FooterSubText,
    FooterSubHeading,
    Form,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcon,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
  } from './Footer.elements';

const logoImage = require('../../images/logo.png');

  const Footer = () => {
    return (
        <FooterContainer>
            <Form>
              <FormInput name="email" type="email" placeholder="Your Email"/>
                <Button fontBig>Contact Me</Button>            
            </Form>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to='/sign-up'> How it works</FooterLink>
                <FooterLink to='/mission'> Mission</FooterLink>
                <FooterLink to='/terms'> Terms of Service</FooterLink>                
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink to='/contact'> Contact</FooterLink>                
              </FooterLinkItems>
              </FooterLinksWrapper>
              <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Virtual Tour Course</FooterLinkTitle>
                <FooterLink to={'https://www.youtube.com/channel/UCQfyVpZb8N3j3UFxsPsQwBw'}> Youtube</FooterLink>
                <FooterLink to={'https://www.udemy.com/course/how-to-make-virtual-tours/learn/'}> Udemy</FooterLink>               
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/">
                <SocialIcon src={logoImage.default}/>
                DBI360
              </SocialLogo>
              <WebsiteRights> DBI360 © 2021</WebsiteRights>
              <SocialIcons>
                <SocialIconLink href={'https://www.facebook.com/DBI360VR'} target='_blank' aria-label='Facebook'>
                  <FaFacebook/>
                </SocialIconLink>
                <SocialIconLink href={'https://www.instagram.com/dbi360ar/'} target='_blank' aria-label='Instagram'>
                  <FaInstagram/>
                </SocialIconLink>
                <SocialIconLink href={'https://www.youtube.com/channel/UCQfyVpZb8N3j3UFxsPsQwBw'} rel='noopener noreferrer' target='_blank' aria-label='YouTube'>
                  <FaYoutube/>
                </SocialIconLink>
                <SocialIconLink href={'https://twitter.com/dbi360ar?s=08'} target='_blank' aria-label='Twitter'>
                  <FaTwitter/>
                </SocialIconLink>
                <SocialIconLink href={'https://www.linkedin.com/company/67896357'} target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterContainer>
    )
}

export default Footer

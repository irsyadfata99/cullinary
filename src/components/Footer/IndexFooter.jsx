import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import {FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink} from './FooterElement'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to ='/' onClick={toggleHome}>Cullinary</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink to="/" target="_blank" aria-label="Facebook" rel="noopener noreferrer">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink to="/" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink to="/" target="_blank" aria-label="Youtube" rel="noopener noreferrer">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink to="/" target="_blank" aria-label="Linkedin" rel="noopener noreferrer">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer

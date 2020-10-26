import React from 'react';
import {copyright, socialLinks} from '../config';
import {FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <div>
                <copyright>
                    <p>{copyright}</p>
                </copyright>
                <social>
                    <a href={socialLinks.FacBook} target='_blank'><FaFacebookSquare/></a>
                    <a href={socialLinks.instagram} target='_blank'><FaInstagram/></a>
                    <a href={socialLinks.linkedin} target='_blank'><FaLinkedin/></a>
                    <a href={socialLinks.twitter} target='_blank'><FaTwitterSquare/></a>
                </social>
            </div>
        </footer>
    );
}

export default Footer;

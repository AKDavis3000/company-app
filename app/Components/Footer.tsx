import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer_grid_item img_socials">
          <Image
            src="/images/logos/black-nobg.png"
            width={85}
            height={85}
            alt="turned table logo"
            className="footer_logo_img"
          />

          <div className="socials">
            <FaFacebookF className="fa" />
            <FaInstagram className="fa" />
            <FaTwitter className="fa" />
          </div>
        </div>

        <div className="footer_grid_item footer_uls">
          <ul>
            About
            <li>Our story</li>
            <li>Benefits</li>
            <li>Careers</li>
            <li>Campaigns</li>
          </ul>
          <ul>
            Legal
            <li>Privacy Policy</li>
            <li>T&C</li>
            <li>Terms of Use</li>
            <li>Cookie Policy</li>
          </ul>
          <ul>
            Contact
            <li>Address</li>
            <li>Email</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className="footer_grid_item footer_copy">
          <p className="fs_p1">Turned Table &copy; 2023</p>
        </div>
      </footer>
    </>
  );
}

'use client';
import Link from 'next/link';
import Image from 'next/image';
import PhotoGallery from './PhotoGallery';
import SvgHeart from './Heart';
import { useState } from 'react';
import { FaBars, FaUser, FaXing } from 'react-icons/fa';

export default function Navbar() {
  const [activeNav, setActiveNav] = useState('nav');

  function toggleNav() {
    activeNav === 'nav' ? setActiveNav('nav active_nav') : setActiveNav('nav');
  }

  return (
    <>
      <header className="nav_header">
        <Image
          src="/images/logos/logo-no-background.png"
          width={75}
          height={75}
          alt="turned table logo"
          className="logo_img"
        />
        <FaBars
          className="fa-bars"
          onClick={toggleNav}
        />
        <PhotoGallery />
        <nav className={activeNav}>
          <div
            className="nav_ex"
            onClick={toggleNav}>
            &#xd7;
          </div>
          <ul>
            <li>
              <Link
                href="/"
                className="nav_links">
                Home
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="nav_links">
                Products
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="nav_links">
                Trends
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="nav_links">
                Clearance
              </Link>
            </li>
          </ul>
          <div className="nav_line"></div>
          <div>
            <p className="sign-in">
              <FaUser /> Sign In
            </p>
            <p>
              <SvgHeart /> Favorites
            </p>
          </div>
        </nav>
      </header>
    </>
  );
}

'use client';
import Link from 'next/link';
import Image from 'next/image';
import PhotoGallery from './PhotoGallery';
import SvgHeart from './Heart';
import SvgBag from './Bag';
import { useState } from 'react';
import { FaBars, FaUser, FaXing } from 'react-icons/fa';

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive((prevState) => !prevState);
  }

  return (
    <>
      <header className="nav_header">
        <Image
          src="/images/logos/logo-nobg.png"
          width={85}
          height={85}
          alt="turned table logo"
          className="logo_img"
        />
        <FaBars
          className="fa-bars"
          onClick={handleClick}
        />
        <SvgBag />

        <div className="nav_horizontal">
          <ul className="nav_horizontal_ul">
            <li>
              <Link
                href="/"
                className="nav_horizontal_links"
                onClick={handleClick}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="nav_horizontal_links"
                onClick={handleClick}>
                Products
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="nav_horizontal_links"
                onClick={handleClick}>
                Trends
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="nav_horizontal_links"
                onClick={handleClick}>
                Clearance
              </Link>
            </li>
            <span className="nav_h_signin">
              <FaUser /> Sign In
            </span>
          </ul>
        </div>
        <nav className={!isActive ? 'nav active_nav' : 'nav'}>
          <div
            className="nav_ex"
            onClick={handleClick}>
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
        <PhotoGallery />
      </header>
    </>
  );
}

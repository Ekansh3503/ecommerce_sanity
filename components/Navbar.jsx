import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineShopping, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">ElectroMart</Link>
      </p>

      <div className="nav-links">
        <p className="nav-item">
          <Link href="/">Home</Link>
        </p>
        <p className="nav-item">
          <Link href="/about">About Us</Link>
        </p>
        <p className="nav-item">
          <Link href="/contact">Contact</Link>
        </p>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>

      {/* Cart Icon */}
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <p className="nav-item" onClick={toggleMenu}>
          <Link href="/">Home</Link>
        </p>
        <p className="nav-item" onClick={toggleMenu}>
          <Link href="/about">About Us</Link>
        </p>
        <p className="nav-item" onClick={toggleMenu}>
          <Link href="/contact">Contact</Link>
        </p>
      </div>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;



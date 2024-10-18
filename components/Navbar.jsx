import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'

import { Cart } from './';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">ElectroMart</Link>
      </p>
      <div className="nav-links">
      <p className="about-us">
        <Link href="/">Home</Link>
      </p>

      <p className="about-us">
        <Link href="/about">About Us</Link>
      </p>
      <p className="about-us">
        <Link href="/contact">Contact</Link>
      </p>
      </div>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar
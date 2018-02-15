import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return ( 
    <div className="navbar">
      <NavLink 
      to="/"
      exact
    >NetWorth</NavLink> 
    <NavLink 
      to="/assets"
      exact
    >Assets</NavLink> 
    <NavLink 
      to="/bank_accounts"
      exact
    >Bank Accounts</NavLink> 
    <NavLink 
      to="/credit_cards"
      exact
    >Credit Cards</NavLink> 
    <NavLink 
      to="/investments"
      exact
    >Investments</NavLink>  
    <NavLink 
      to="/loans"
      exact
    >Loans</NavLink>  
    <NavLink 
      to="/recurring_payments/new"
      exact
    >Add Incoming/Outgoing Payments Related to this Account</NavLink>
    </div> 
  );
};

export default NavBar;
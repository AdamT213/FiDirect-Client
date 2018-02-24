import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink className="link"
      to="/"
      exact
    >NetWorth</NavLink>
    <NavLink className="link"
      to="/assets"
      exact
    >Assets</NavLink>
    <NavLink className="link"
      to="/bank_accounts"
      exact
    >Bank Accounts</NavLink>
    <NavLink className="link"
      to="/credit_cards"
      exact
    >Credit Cards</NavLink>
    <NavLink className="link"
      to="/investments"
      exact
    >Investments</NavLink>
    <NavLink className="link"
      to="/loans"
      exact
    >Loans</NavLink>
    <NavLink className="link"
      to="/recurring_payments/new"
      exact
    >Add Incoming/Outgoing Payments Related to this Account</NavLink>
    </div>
  );
};

export default NavBar;

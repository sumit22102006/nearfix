import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User, LogIn, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md px-4 md:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <Menu className="h-5 w-5" />
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-blue-600">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Explore Services</Link></li>
          </ul>
        </div>
        <Link to="/" className="text-2xl font-bold text-blue-600">NearFix</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Explore Services</Link></li>
        </ul>
      </div>
      <div className="navbar-end space-x-2">
        <Link to="/login" className="btn btn-ghost btn-sm">
          <LogIn className="w-4 h-4 mr-1" /> Login
        </Link>
        <Link to="/signup" className="btn btn-primary btn-sm text-white">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

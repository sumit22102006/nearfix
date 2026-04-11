import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Search, LogIn, LogOut, User, Menu, X, Wrench } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto max-w-7xl px-4 md:px-8 flex items-center justify-between h-16">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-blue-600 p-1.5 rounded-lg">
            <Wrench className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-extrabold text-blue-600 tracking-tight">NearFix</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          <Link to="/" className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link to="/services" className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors">
            Explore Services
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2">
          {user ? (
            <>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gray-50 text-sm text-gray-700">
                <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold uppercase">
                  {user.name?.[0] || 'U'}
                </div>
                <span className="font-medium max-w-[100px] truncate">{user.name}</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium text-gray-600 hover:bg-red-50 hover:text-red-600 border border-gray-200 transition-colors"
              >
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="px-4 py-2 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 border border-gray-200 transition-colors flex items-center gap-1.5">
                <LogIn className="w-4 h-4" /> Login
              </Link>
              <Link to="/signup" className="px-4 py-2 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                Sign Up Free
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-2">
          <Link to="/" className="px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/services" className="px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50" onClick={() => setMenuOpen(false)}>Explore Services</Link>
          <div className="border-t border-gray-100 my-1" />
          {user ? (
            <button onClick={() => { handleLogout(); setMenuOpen(false); }} className="px-4 py-2.5 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 text-left flex items-center gap-2">
              <LogOut className="w-4 h-4" /> Logout ({user.name})
            </button>
          ) : (
            <>
              <Link to="/login" className="px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link to="/signup" className="px-4 py-2.5 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 text-center" onClick={() => setMenuOpen(false)}>Sign Up Free</Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;

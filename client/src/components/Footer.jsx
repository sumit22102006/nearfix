import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto max-w-7xl px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Wrench className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">NearFix</span>
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            Connecting you with trusted local service professionals — fast, safe, and reliable.
          </p>
          <div className="flex gap-3 mt-2">
            <a href="#" aria-label="Facebook" className="bg-gray-800 hover:bg-blue-600 transition-colors p-2 rounded-lg">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Twitter" className="bg-gray-800 hover:bg-blue-400 transition-colors p-2 rounded-lg">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Instagram" className="bg-gray-800 hover:bg-pink-600 transition-colors p-2 rounded-lg">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="bg-gray-800 hover:bg-blue-700 transition-colors p-2 rounded-lg">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h6 className="text-white font-semibold text-base mb-4 uppercase tracking-wider">Services</h6>
          <ul className="space-y-2">
            {['Electricians', 'Plumbers', 'Cleaners', 'Tutors', 'Carpenters', 'Painters'].map((s) => (
              <li key={s}>
                <Link
                  to={`/services?category=${s}`}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-1 group"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="text-white font-semibold text-base mb-4 uppercase tracking-wider">Company</h6>
          <ul className="space-y-2">
            {[
              { label: 'About Us', to: '/about' },
              { label: 'Contact', to: '/contact' },
              { label: 'Careers', to: '/careers' },
              { label: 'Blog', to: '/blog' },
              { label: 'Terms of Use', to: '/terms' },
              { label: 'Privacy Policy', to: '/privacy' },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-1 group"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Newsletter */}
        <div>
          <h6 className="text-white font-semibold text-base mb-4 uppercase tracking-wider">Get In Touch</h6>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-sm text-gray-400">
              <MapPin className="w-4 h-4 mt-0.5 text-blue-400 shrink-0" />
              123 Service Street, Mumbai, India
            </li>
            <li className="flex items-center gap-3 text-sm text-gray-400">
              <Phone className="w-4 h-4 text-blue-400 shrink-0" />
              +91 98765 43210
            </li>
            <li className="flex items-center gap-3 text-sm text-gray-400">
              <Mail className="w-4 h-4 text-blue-400 shrink-0" />
              support@nearfix.in
            </li>
          </ul>
          <p className="text-xs text-gray-500 mb-2 font-medium uppercase tracking-wider">Newsletter</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-3 py-2 rounded-lg text-sm font-medium">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto max-w-7xl px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-gray-500">
          <span>© {currentYear} NearFix. All rights reserved.</span>
          <span className="flex gap-4">
            <Link to="/terms" className="hover:text-blue-400 transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy</Link>
            <Link to="/contact" className="hover:text-blue-400 transition-colors">Support</Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

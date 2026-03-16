import React from 'react';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <nav>
        <h6 className="footer-title">Services</h6> 
        <a className="link link-hover">Electricians</a>
        <a className="link link-hover">Plumbers</a>
        <a className="link link-hover">Cleaners</a>
        <a className="link link-hover">Tutors</a>
      </nav> 
      <nav>
        <h6 className="footer-title">Company</h6> 
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
      </nav> 
      <nav>
        <h6 className="footer-title">Legal</h6> 
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;

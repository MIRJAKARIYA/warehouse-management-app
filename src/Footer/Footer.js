import React from "react";
import { FaFighterJet } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 text-white bg-blue-900">
        <div>
          <span className="text-6xl"><FaFighterJet></FaFighterJet></span>
          <p>
            Military Warehouse Ltd.
            <br />
            © all rights reserved 2022.
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <span className="link link-hover">Stocking military vehicles</span>
          <span className="link link-hover">Delivering military vehicles</span>
          <span className="link link-hover">Maintaining military vehicles</span>

        </div>
        <div>
          <span className="footer-title">Company</span>
          <span className="link link-hover">About us</span>
          <span className="link link-hover">Contact</span>
          <span className="link link-hover">Jobs</span>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <span className="link link-hover">Terms of use</span>
          <span className="link link-hover">Privacy policy</span>
          <span className="link link-hover">Cookie policy</span>
        </div>
        <div>
          <span className="footer-title">CONTACT</span>
          <span className="link link-hover">Email</span>
          <span className="link link-hover">LinkedIn</span>
          <span className="link link-hover">Facebook</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

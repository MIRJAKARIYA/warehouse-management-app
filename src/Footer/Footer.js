import React from "react";
import Logo from '../company-logo/logo-image.png';
import { FaFighterJet } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer class="footer p-10 text-white bg-blue-900">
        <div>
          <span className="text-6xl"><FaFighterJet></FaFighterJet></span>
          <p>
            Military Warehouse Ltd.
            <br />
            © all rights reserved 2022.
          </p>
        </div>
        <div>
          <span class="footer-title">Services</span>
          <span class="link link-hover">Stocking military vehicles</span>
          <span class="link link-hover">Delivering military vehicles</span>
          <span class="link link-hover">Maintaining military vehicles</span>

        </div>
        <div>
          <span class="footer-title">Company</span>
          <span class="link link-hover">About us</span>
          <span class="link link-hover">Contact</span>
          <span class="link link-hover">Jobs</span>
        </div>
        <div>
          <span class="footer-title">Legal</span>
          <span class="link link-hover">Terms of use</span>
          <span class="link link-hover">Privacy policy</span>
          <span class="link link-hover">Cookie policy</span>
        </div>
        <div>
          <span class="footer-title">CONTACT</span>
          <span class="link link-hover">Email</span>
          <span class="link link-hover">LinkedIn</span>
          <span class="link link-hover">Facebook</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

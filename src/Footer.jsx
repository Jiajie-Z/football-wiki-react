import { useState } from 'react';
import './Footer.css';
import Modal from './Modal';



function Footer() {

  return (

    <footer className="footer">

      <div className="footer-content">
        <p>If you have any questions or suggestions about this privacy policy, please contact us at <a href="mailto:your@email.com">northeastern@neu.edu</a>.</p>
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </div>

    </footer>

  );
}

export default Footer;
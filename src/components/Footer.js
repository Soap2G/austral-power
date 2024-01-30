import React from "react";
// import { Icon } from '@iconify/react';
// import { useTranslation } from 'react-i18next';
import './Footer.css'
 
const Footer = () => {
  // const { t } = useTranslation();

  return (
    <div className="box">
      <div className="footer-div">
        <div className="footer-row">
          {/* <div className="footer-column">
              <div>
                Sandro Cottafava <br/>
                Via xyz modena
              </div>
          </div> */}
          <div className="footer-column">
            <div className="footer-heading">
              -
            </div>
                <span>-</span> <br/>
                
                <span
                style={{ lineHeight: '2rem' }}
                >-</span>
          </div>
          <div
           style={{ textAlign: 'right' }}
           className="footer-column">
            {/* <div className="footer-heading">
              Contatti
            </div> */}
            -
          </div>
        </div>
        <div className="footer-case">
          Made by GG
        </div>
      </div>
    </div>
  );
};

export default Footer;
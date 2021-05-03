import React, { Fragment } from "react";
import style from './Footer.css'

export default function Footer(props) {
  return (
    <Fragment>
      <div className="footer" id='Contact'>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-3">
              <h4>GET IN TOUCH</h4>
              <div className="menu">
                <ul>
                  <li>FAQs</li>
                  <li>Give us feedback</li>
                  <li>Contact us</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <h4>ABOUT MOVIE STAR</h4>
              <div className="menu">
                <ul>
                  <li>About us</li>
                  <li>Find us</li>
                  <li>Schedule</li>
                  <li>News</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <h4>LEGAL STUFF</h4>
              <div className="menu">
                <ul>
                  <li>Terms &amp; Conditions</li>
                  <li>Privacy policy</li>
                  <li>Cookie policy</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <h4>CONNECT WITH US</h4>
              <div className="menu">
                <ul>
                  <li>
                    <i className="fab fa-facebook-f" />
                    Facebook
                  </li>
                  <li>
                    <i className="fab fa-twitter" />
                    Twitter
                  </li>
                  <li>
                    <i className="fab fa-google" />
                    Google +
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer__coppyright">
            <p>2021 © Movie Star / Web design by Ngoc Thanh Project in CyberSoft </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

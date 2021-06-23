import React from 'react';

const Footer = () => {
  return (
    <div className="footer dashboard">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-8 col-12">
            <div className="copyright">
              <p>© Copyright 2020 <a href="https://themeforest.net/user/quixlab/portfolio">Quixlab</a> I
                All Rights Reserved</p>
            </div>
          </div>
          <div className="col-sm-4 col-12">
            <div className="footer-social">
              <ul>
                <li><a href="#"><i className="fa fa-facebook" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                <li><a href="#"><i className="fa fa-youtube" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Footer;

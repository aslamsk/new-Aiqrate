import React from 'react';
import config from '../../../config/siteConfig';
import './style.scss';
import './footer.css';
// import '../components/layout.css';
// import '../pages/main.css';
import { Row, Col} from 'react-bootstrap';
import { MdMail } from 'react-icons/md';
import { 
    FaLocationArrow,
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaInstagram
 } from 'react-icons/fa';
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <footer className="footer container-fluid">
      {/* <div className="links">
        {config.rrssb.map(item => (
          <a href={item.url} key={item.label} target="_top" rel="noopener noreferrer" aria-label={item.label}>
            <i className={`${item.iconClassName} fa-2x`} />
          </a>
        ))}
        <a href={`${config.pathPrefix}${config.siteRss}`} target="_blank" rel="noopener noreferrer" aria-label="rss">
          <i className="fa fa-rss fa-2x" />
        </a>
      </div>
      <p>{config.copyright}</p> */}
      <div className="Container-fluid footer text-light ">
        <Row className="p-0 mx-0 text-center aqrations-footer">
          
          <Link className="col text-light" style={{background:'#419d78'}} to="/1/">
            AIQRATIONS
          </Link>
          <Link className="col text-light" style={{background:'#2d3047'}} to="/1/">
          ARTICLES
          </Link>
         

        </Row>
        <Row className="m-0 p-0">
          <Col>
            <address>
              <div className="col-md-8 align-self-center quick-link-header">
                <div className="col-md-12 foundation text-light">
                <div>
                  <Link to="/" >
                  {/* <img style={{ margin: 0, height:'40px' }} src={image} alt="logo" className="logo" /> */}
                  </Link>
                </div>
                  <div className="col-md-12">
                    <ul>
                      <small>
                        <li>
                          
                          <Link to="" className="aiqration-nav-link">
                            <MdMail /> consult@aiqrate.ai
                          </Link>
                        </li>
                        <li>
                          
                          <FaLocationArrow /> Bangalore | Delhi | Hyderabad
                        </li>
                        <li className="text-center">
                          Privacy Policy | Terms of Use
                        </li>
                      </small>
                    </ul>
                  </div>
                </div>
              </div>
            </address>
          </Col>
          <Col>
                <h5 className="align-self-center quick-link-header">QUICK LINKS</h5>
                <ul className="footer-quick_links">
                  <small>
                    <li className="quick-links">
                        <Link className="aiqration-nav-link" to="">AIQRATE Engagement Model  </Link>
                        <Link className="aiqration-nav-link" to="">AIQRATIONS  </Link>
                        <Link className="aiqration-nav-link" to="">AIQRATE Team   </Link>
                        <Link className="aiqration-nav-link" to="">Contact Us </Link>
                    </li>
                    </small>
                </ul>
                <ul className="align-self-center d-flex  mt-0">
                    <li className="d-flex text-dark footer-Icons">
                        <Link to=""> <FaFacebook /> </Link>
                        <Link to=""> <FaTwitter /> </Link>
                        <Link to=""> <FaLinkedin /> </Link>
                        <Link to=""> <FaInstagram /> </Link>
                    </li>
                </ul>
          </Col>
        </Row>
        <Row  className="m-0 p-0" style={{background:'#419d78'}}>
        <p className="align-self-center my-0"> <small>  © {new Date().getFullYear()}, <span>AIQRATE ADVISORY & CONSULTING PRIVATE LIMITED</span></small></p>

        </Row>
      </div>
    </footer>
  );
};

export default React.memo(Footer);




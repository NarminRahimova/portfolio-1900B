import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF,faInstagram,faGithub,faTwitter} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="footer-content">
                    <div className="row">
                        {/* Column1 */}
                        <div className="col-4">
                            <div className="about">
                            <h4>About me</h4>
                            <ul className="list-unstyled">
                                <li>Lorem, ipsum.</li>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem ipsum dolor sit.</li>
                            </ul>
                        </div>
                        </div>
                        {/* Column2 */}
                        <div className="col-4">
                            <h4>Contact me</h4>
                            <ul className="list-unstyled">
                                <li>Lorem ipsum dolor sit amet consectetur.</li>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem, ipsum.</li>
                            </ul>
                        </div>
                        {/* Column3 */}
                        <div className="col-4">
                            <h4>Social media</h4>
                            <FontAwesomeIcon icon={faFacebookF} className="icon"></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faInstagram} className="icon"></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faGithub} className="icon"></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faTwitter} className="icon"></FontAwesomeIcon>
                        </div>
                    </div>
                </div>
                <div className="copyright-wrapper">
                    <div className="row">
                        <p className="col-12">
                            &copy;{new Date().getFullYear()} Narmin Rahimova INC | All right reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

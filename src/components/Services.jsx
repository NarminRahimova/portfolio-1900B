import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop,faFileCode } from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faGoogle } from '@fortawesome/free-brands-svg-icons'

const Services =() =>  {
    return (
        <div className ="services" id="services">
            <h1 className="py-5">My services</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon icon={faGoogle} className="icon"></FontAwesomeIcon>
                            </div>
                            <h3>SEO</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab fugit in consequatur, ut harum vitae, quia dolorem corrupti quo, deleniti asperiores totam debitis. Nisi corporis sapiente nam commodi aspernatur autem!</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon icon={faFileCode} className="icon"></FontAwesomeIcon>
                            </div>
                            <h3>Web development</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab fugit in consequatur, ut harum vitae, quia dolorem corrupti quo, deleniti asperiores totam debitis. Nisi corporis sapiente nam commodi aspernatur autem!</p>
                        </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon icon={faFacebook} className="icon"></FontAwesomeIcon>
                            </div>
                            <h3>Facebook SMM</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab fugit in consequatur, ut harum vitae, quia dolorem corrupti quo, deleniti asperiores totam debitis. Nisi corporis sapiente nam commodi aspernatur autem!</p>
                        </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon icon={faDesktop} className="icon"></FontAwesomeIcon>
                            </div>
                            <h3>IT</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab fugit in consequatur, ut harum vitae, quia dolorem corrupti quo, deleniti asperiores totam debitis. Nisi corporis sapiente nam commodi aspernatur autem!</p>
                        </div>
                    </div>
        
                        </div>
                        </div>
                        </div>
                        
                        
    )
}

export default Services

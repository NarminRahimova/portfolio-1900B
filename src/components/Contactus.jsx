import React,{ useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contactus = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const serviceID = 'service_o3vdue8'
        const templateID = 'template_ayxiafa'
        const userID = 'user_xSxJLhVsSQtOwUeqFDy4J'
    
        emailjs.sendForm(serviceID, templateID, form.current, userID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          form.current.reset()
      };
    return (
        <div className='contacts' id='contactme'>
            <div className='text-center'>
                <h1>Contact us</h1>
                <p>Please fill out the form...</p>
            </div>

            <div className='container'>
                <form ref={form} onSubmit={sendEmail}>
                    <div className='row'>
                        <div className='col-md-6 col-xs-12'>
                            {/* name input */}
                            <div className='text-center'>
                                <input
                                type="text"
                                className='form-control'
                                placeholder='Name'
                                name='name'
                                />
                                <div className='line'></div>
                            </div>
                            {/* phone input */}
                            <div className='text-center'>
                                <input
                                type="text"
                                className='form-control'
                                placeholder='Enter your telephone number'
                                name='phone'
                                />
                                <div className='line'></div>
                            </div>
                            {/* email */}
                            <div className='text-center'>
                                <input
                                type="email"
                                className='form-control'
                                placeholder='info@narminrahimova.com'
                                name='email'
                                />
                                <div className='line'></div>
                            </div>
                            {/* subject */}
                            <div className='text-center'>
                                <input
                                type="text"
                                className='form-control'
                                placeholder='Enter your subject'
                                name='subject'
                                />
                                <div className='line'></div>
                            </div>
                            {/* --- */}
                        </div>
                        {/* sütunun sağ tərəfi */}
                        <div className='col-md-6 col-xs-12'>
                            {/* message */}
                            <div className='text-center'>
                                <textarea 
                                type="text"
                                className='form-control'
                                placeholder='Describe your need'
                                name='message'


                                />
                                <div className='line'></div>
                            </div>
                            <button className='btn-main-offer contact-btn' type='submit'>Contact us</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contactus

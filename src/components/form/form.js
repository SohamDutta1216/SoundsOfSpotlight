import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
    const form = useRef();
    const [showError, setError] = useState(false)
    const [showSuccess, setSuccess] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_1cfruyc", "template_fudlkoh", form.current, '9iRacLwSiI6XPSWBL')
            .then((result) => {
                console.log(result.text);
                setSuccess(true)
            }, (error) => {
                console.log(error.text);
                setError(true)
                setTimeout(() => { setError(false) }, 3000)
            });
    };

    return (
        <>

            <form ref={form} onSubmit={sendEmail} className="form">
                <div className='form__row'>
                    <label>Name:</label>
                    <input type="text" name="user_name" className="form__name" />
                    <label>Email:</label>
                    <input type="email" name="user_email" className="form__email" />
                </div>

                <div className='form__submit'>
                    <div className='form__message-wrapper'>
                        <label>Message:</label>
                        <textarea name="message" />
                        {showError ?
                            <div>
                                Error! Please fill out all fields
                            </div> :
                            <>
                                {!showSuccess ?
                                    <input type="submit" value="Send" className="form__message" />
                                    :
                                    <div>
                                        Sent!
                                    </div>

                                }
                            </>

                        }
                    </div>
                </div>
            </form>
        </>
    );
};
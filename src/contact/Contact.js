import React from 'react';
import './Contact.scss';


function Contact() {
    return (
        <>
            <section id="contact">
                <span className="contact-title">Kontakt</span>
                <span className="ask_me_question">Zadaj mi pytanie</span>
                <form className="contact_form">
                    <div className="div1"><input type="text" className="input1" placeholder="Twoje imie"></input></div>
                    <div className="div1"><input type="text" className="input1" placeholder="Twój email"></input></div>
                    <div className="div2"><textarea className="textarea_message" placeholder="Wiadomość"></textarea></div>
                    <input type="submit" className="btn-submit" value="Wyślij"></input>
                </form>
            </section>

        </>
    )
}




export default Contact;
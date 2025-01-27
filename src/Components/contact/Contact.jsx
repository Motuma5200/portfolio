import React, { useState } from 'react'
import './Contact.css'

function Contact() {

    const [text, setText] = useState('');
    const [isDisabled, setIsDesabled] = useState(false);
    const limitWord = 10;
    const [countLeft, setCountLeft] = useState(limitWord)
    

     const handleChange = (event)=>{
        const inputText = event.target.value;
        const wordCount = inputText.trim().split(/\s+/).length;


        if(wordCount <= limitWord){
            setText(inputText);
            setIsDesabled(false);
            setCountLeft(limitWord-wordCount)
        }
        else{
            setIsDesabled(true);
        }
     }

  return (
    <section className="contact section" id="contact">
         <h2 className="section-tittle">Get in Touch</h2>
         <span className="section-subtittle">Contact Me</span>

         <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__tittle">Talk To Me</h3>

                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>
                        <h3 className="contact__card-tittle">Mail</h3>
                        <span className="contact__card-data">motumarabuma@gmail.com</span>

                        <a href=" mailto: motumarabuma@gmail.com" className="contact__button"> Write Me 
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-messenger contact__card-icon"></i>
                        <h3 className="contact__card-tittle">Messenger</h3>
                        <span className="contact__card-data">Moti.123</span>

                        <a href="https://m.me/motuma.rabuma" className="contact__button"> Write Me 
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-whatsapp contact__card-icon"></i>
                        <h3 className="contact__card-tittle">Whatsapp</h3>
                        <span className="contact__card-data">9520 035 71</span>

                        <a href="" className="contact__button"> Write Me 
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="contact__content">
                <h3 className="contact__tittle">Leave Your Feedback</h3>

              <form  className="contact__form">
                <div className="contact__form-div">
                    <label className="contact__form-tag">Name</label>
                    <input type="text" className="contact__form-input" 
                    name='name' placeholder='write Your name' required/>
                </div>

                <div className="contact__form-div">
                    <label className="contact__form-tag">Eamil</label>
                    <input type="email" className="contact__form-input" 
                    name='name' placeholder='Insert your email' required/>
                </div>

                <div className="contact__form-div contact__form-comment">
                    <label className="contact__form-tag">Comment</label>
                    <textarea className=' contact__form-input' 
                    onChange={handleChange}
                    disabled = {isDisabled}
                    name="comment" id="comment"
                    placeholder='write your comment' required></textarea>
                </div>
                <div className="submit-control">
                <input type="submit" className='contact__form-submit' 
                name="submit__button" value="Send"/>
                <p className='count__left' id="comment_text_counter"> {countLeft} words left </p>

                </div>

              </form>
            </div>

         </div>
    </section>
  )
}

export default Contact
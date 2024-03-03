'use client'; 

import { useState } from "react";
import ContactLeft from "./ContactLeft";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errMsg, setErrMsg] = useState("");


  const handleSubmit = (event: any) => {
    event.preventDefault();

    const html = `Subject: ${subject} Name: ${username}<br/>PhoneNumber: ${phoneNumber}<br/>Email: ${email}<br/>Message: ${message}`;

    const data = {
      service_id: 'service_ti5sow8',
      template_id: 'template_pgnyloc',
      user_id: '3WULO_DtSYO3biOHw',
      template_params: {
        'name': username,
        'html': html,

      }
    };

    setSubmitting(true);

    fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(_res => {
      setErrMsg("");
      setSubmitting(false);
      setUsername('');
      setSubject('');
      setPhoneNumber('');
      setEmail('');
      setMessage('');
      
    })

  }
 
  
  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title title="CONTACT" des="Contact With Me" />
        </div>
        <div className="w-full">
          <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
            <ContactLeft />
            <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#0B1120] to-[#0B1120] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
            {errMsg && (
                  <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                    {errMsg}
                  </p>
                )}
                
            <input 
                type="text" 
                id="name" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="UserName" 
                required 
                className={`${
                  errMsg === "Username is required!" &&
                  "outline-designColor"
                } contactInput`}
            />
            <input 
                type="text" 
                id="subject" 
                value={subject} 
                onChange={(e) => setSubject(e.target.value)} 
                placeholder="Subject" 
                required 
                className={`${
                  errMsg === "Plese give your Subject!" &&
                  "outline-designColor"
                } contactInput`}
                
               
            />
            <input 
                type="email" 
                id="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email" 
                required 
                className={`${
                  errMsg === "Username is required!" &&
                  "outline-designColor"
                } contactInput`}
            />
            <textarea 
                id="message" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                placeholder="Message" 
                required 
                className={`${
                  errMsg === "Message is required!" && "outline-designColor"
                } contactTextArea`}
                cols={30}
                rows={8}
            ></textarea>
            <button 
                type="submit" 
                id="submit" 
                disabled={submitting} 
                className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-gray-600 border"

            >
                {submitting ? 'Submitting...' : 'Submit'}
            </button>
        </form>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

export default Contact;

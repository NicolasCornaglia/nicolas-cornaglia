import './index.scss'
import React, { useRef } from 'react';
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

// Free access key from https://web3forms.com (no login required, just enter
// your email and they send you the key). Safe to expose in client code.
const WEB3FORMS_ACCESS_KEY = '9feaa075-0f42-40a6-b41e-073acb9b36a6';

const Contract = () => {
   const form = useRef();

   const sendEmail = (e) => {
      e.preventDefault();
      const sendButton = document.querySelector('.flat-button');
      sendButton.value = 'SENDING...';

      const formData = new FormData(form.current);
      formData.append('access_key', WEB3FORMS_ACCESS_KEY);

      fetch('https://api.web3forms.com/submit', {
         method: 'POST',
         body: formData,
      })
         .then((res) => res.json())
         .then((result) => {
            if (result.success) {
               sendButton.value = 'SENT';
               sendButton.style.color = '#115173';
               sendButton.style.borderColor = '#115173';
            } else {
               sendButton.value = 'ERROR';
               console.log(result);
            }
         })
         .catch((error) => {
            sendButton.value = 'ERROR';
            console.log(error);
         });

      e.target.reset();
   }

   const [letterClass, setLetterClass] = useState('text-animate')

   useEffect(() => {
      return setTimeout(() => {
         setLetterClass('text-animate-hover')
      }, 3000)
   }, [])

   return (
      <>
         <div className="container contact-page">
            <div className="text-zone">
               <h1>
                  <AnimatedLetters
                     letterClass={letterClass}
                     strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                     idx={15} />
               </h1>
               <p>
                  I am looking to join a company where I can grow and make
                  a meaningful contribution as a professional. Feel free to
                  reach out using the form below with any questions or
                  opportunities.
               </p>
               <div className="contact-form">
                  <form ref={form} onSubmit={sendEmail}>
                     <ul>
                        <li classNAme="half">
                           <input type="text" name="name" placeholder="Name" required />
                        </li>
                        <li classNAme="half">
                           <input type="email" name="email" placeholder="Your email" required />
                        </li>
                        <li>
                           <input type="text" name="subject" placeholder="Subject" required />
                        </li>
                        <li>
                           <textarea placeholder="Message" name="message" required></textarea>
                        </li>
                        <li>
                           <input type="submit" className="flat-button" value="SEND" />
                        </li>
                     </ul>
                  </form>
               </div>

            </div>

            <div className="info-map">
               Nicolas Cornaglia
               <br />
               Argentinian
               <br />
               Barcelona, Spain
               <br />
               <span>nicolascornaglia0@gmail.com</span>
            </div>

            <div className="map-wrap">
               <MapContainer center={[41.390205, 2.154007]} zoom={13}>
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={[41.390205, 2.154007]}>
                     <Popup>Nicolas lives here, come over for a cup of coffee :)</Popup>
                  </Marker>
               </MapContainer>
            </div>
         </div>
         <Loader type="pacman" />
      </>
   )
}

export default Contract
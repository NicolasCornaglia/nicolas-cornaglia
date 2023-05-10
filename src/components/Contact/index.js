import './index.scss'
import React, { useRef } from 'react';
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contract = () => {
   const form = useRef();

   const sendEmail = (e) => {
      e.preventDefault();
      const sendButton = document.querySelector('.flat-button');
      sendButton.value = 'SENT';
      sendButton.style.color='#115173';
      sendButton.background = '#ffd700';
      sendButton.style.borderColor = '#115173';
      emailjs.sendForm('service_awyfzmj', 'template_vhd5btr', form.current, 'SHbIv1IAQej--nm8o')
         .then((result) => {
            console.log(result.text);
         }, (error) => {
            console.log(error.text);
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
                  I am interested in joining a company where I can prove
                  and improve myself as a professional. If you have any
                  request or question, don't hesitate to contact me using
                  the below form.
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
               Argentina
               <br />
               Rafaela, Santa Fe
               <br />
               Hipolito Yrigoyen 1458
               <br />
               <span>nicolascornaglia0@gmail.com</span>
            </div>

            <div className="map-wrap">
               <MapContainer center={[-31.266127, -61.494968]} zoom={14}>
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={[-31.266127, -61.494968]}>
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
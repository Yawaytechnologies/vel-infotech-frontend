import React from 'react';
import ContactHeader from '../components/conatctUs/ContactUs';
import ContactInfo from '../components/conatctUs/ContactInfo';
import MapEmbed from '../components/conatctUs/ContactMap';
import ContactForm from '../components/conatctUs/ContactUsform';

function Contact() {
    return (
      <div className='bg-white pb-4 mt-30'>
        <ContactHeader/>
        <div className='px-8 py-4 pt-0'>
        <ContactForm/>
        </div>
        <ContactInfo/>
        <div className='px-8'>
        <MapEmbed/>
        </div>
        <p className="text-center text-blue pt-4" >Vel InfoTech Placement and Training in Chennai Average rating: 4.8, based on 4 reviews</p>
      </div>  
    )
}

export default Contact;
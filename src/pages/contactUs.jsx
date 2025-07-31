import React from 'react';
import ContactHeader from '../components/conatctUs/ContactUs';
import ContactInfo from '../components/conatctUs/ContactInfo';
import MapEmbed from '../components/conatctUs/ContactMap';
import ContactForm from '../components/conatctUs/ContactUsform';

function Contact() {
    return (
      <div className='bg-[#e6ebf7] pb-0 mt-30'>
        <ContactHeader/>
        <div className='bg-[#e6ebf7] px-8 py-4 pt-0'>
        <ContactForm/>
        </div>
        <ContactInfo/>
        <div className='px-8 pb-4'>
        <MapEmbed/>
        </div>
      </div>  
    )
}

export default Contact;
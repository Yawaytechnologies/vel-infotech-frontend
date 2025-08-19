import React from 'react';
import ContactHeader from '../components/conatctUs/ContactUs';
import ContactInfo from '../components/conatctUs/ContactInfo';
import MapEmbed from '../components/conatctUs/ContactMap';
import ContactForm from '../components/conatctUs/ContactUsform';

function Contact() {
    return (
      <div className='bg-[#e6ebf7] pb-0 mt-30'>
        <ContactHeader/>
        <div className='bg-white w-full max-h-full'>
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
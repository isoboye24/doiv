import ContactForm from '@/components/ui/contact/contact-form';
import React from 'react';
import PageTopSection from '@/components/ui/page-top-section';

const Contact = () => {
  return (
    <>
      <PageTopSection pageName="Keep In Touch" bgColor="amber-500" />
      <ContactForm />
    </>
  );
};

export default Contact;

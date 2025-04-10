'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import ReuseableInput from '../reusable-input';
import ReuseableTextarea from '../reuseable-textarea';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setName(e.target.value);
    setEmail(e.target.value);
    setSubject(e.target.value);
    setMessage(e.target.value);
  };

  return (
    <div className="">
      <div className="wrapper">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="">
            <div className="pb-10 md:pb-15 flex flex-col justify-center items-center">
              <h2 className="text-center text-dark text-bold text-2xl md:text-3xl">
                Send me a message
              </h2>
              <hr className="w-[30%] border-amber-500 border-2 mt-2" />
            </div>
            <form className="space-y-8">
              <div className="flex flex-col col-span-full gap-5 ">
                <div className="">
                  {/* Name */}
                  <ReuseableInput
                    label="Name"
                    name="name"
                    type="text"
                    onChange={handleChange}
                    value={name}
                  />
                </div>
                <div className="">
                  {/* Email */}
                  <ReuseableInput
                    label="Email"
                    name="email"
                    type="email"
                    onChange={handleChange}
                    value={email}
                  />
                </div>
                <div className="">
                  {/* Subject */}
                  <ReuseableInput
                    label="Subject"
                    name="subject"
                    type="text"
                    onChange={handleChange}
                    value={subject}
                  />
                </div>
                <div className="">
                  {/* Message */}
                  <ReuseableTextarea
                    label="Your Message"
                    name="message"
                    onChange={handleChange}
                    value={message}
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Button
                  type="submit"
                  size="lg"
                  className="button  w-[40%] bg-teal-600"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

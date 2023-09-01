'use client';

import { useSectionInView } from '@/utils/hooks';
import React, { useState } from 'react';
import SectionHeading from '../SectionHeading';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motion';
import SubmitBtn from './SubmitBtn';
import { sendEmail } from '@/utils/sendEmail';
import { toast } from 'react-hot-toast';



export default function Contact() {
    const { ref } = useSectionInView('Contact');
    return (
        <motion.section
            className='section_margin w-[min(100%,38rem)] text-center'
            variants={fadeIn('down', 'tween', 0.5, 1.2)}
            initial='hidden'
            whileInView='show'
            ref={ref}
            id='contact'>
            <SectionHeading>Contact me</SectionHeading>
            <p className='text-gray-700 -mt-6 dark:text-white/80'>
                Please contact me directly at{'  '}
                <a className='underline' href='mailto:anton.kornilov@hotmail.com'>
                    my email
                </a>{' '}
                or through this form.
            </p>

            <form
                className='mt-10 flex flex-col dark:text-black'
                action={async (formData) => {
                    const { data, error } = await sendEmail(formData);

                    if (error) {
                        toast.error(error);
                        return;
                    }
                    toast.success('Email sent successfully!');
                }}
                >
                <input
                    type='email'
                    name='senderEmail'
                    className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
                    required
                    maxLength={500}
                    placeholder='Your email'

                />
                <textarea
                    name='message'
                    placeholder='Your message'
                    required
                    maxLength={5000}
                    className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
                />
                <SubmitBtn />
            </form>
        </motion.section>
    );
}

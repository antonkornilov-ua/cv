'use client';

import React from 'react';
import SectionHeading from '../SectionHeading';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/utils/hooks';
import { motion } from 'framer-motion';
import { fadeInAnimationVariants } from '@/utils/motion';



export default function Skills() {
    const { ref } = useSectionInView('Skills');

    return (
        <section ref={ref} id='skills' className='section_margin max-w-[53rem] scroll-mt-52 text-center'>
            <SectionHeading>My skills</SectionHeading>
            <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
                {skillsData.map((skill, index) => (
                    <motion.li
                        variants={fadeInAnimationVariants}
                        initial='initial'
                        whileInView='animate'
                        className='bg-white border borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80'
                        key={index}
                        custom={index}>
                        {skill}
                    </motion.li>
                ))}
            </ul>
        </section>
    );
}

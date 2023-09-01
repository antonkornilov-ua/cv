'use client'
import SectionHeading from '@/components/SectionHeading';
import { useSectionInView } from '@/utils/hooks';
import { fadeIn } from '@/utils/motion';
import { motion } from 'framer-motion';


const About = () => {
    const {ref} = useSectionInView('About', 0.75)
    
    
    return (
        <motion.section
            ref={ref}
            id='about'
            className='section_margin max-w-[45rem] text-center leading-8 scroll-mt-52'
            variants={fadeIn('down', 'tween', 0.2, 1)}
            initial='hidden'
            whileInView='show'>
            <SectionHeading>About Me</SectionHeading>
            <p className='mb-3'>
                My name is <span className='font-medium'>Anton Kornilov</span>, and I am from{' '}
                <span className='font-medium'>Kyiv, Ukraine</span>. Since childhood, I have been interested in{' '}
                <span className='italic'>mobile technologies, gadgets, and computers</span>. My first job was related to
                selling gadgets and accessories for them. At first, it seemed like the job I was looking for, but later
                I realized it wasn&apos;t. With the onset of Russia&apos;s full-scale invasion of Ukrainian territory, I
                lost my job, but I finally found myself.{' '}
                <span className='font-medium'>I became deeply passionate about the frontend developer profession</span>.
                Every day, as I improve my skills and abilities, and learn new technologies, I am getting closer to my
                dream profession.
            </p>
            <p>
                <span className='italic'>When I&apos;m not coding</span>, I enjoy spending time with my family, watching
                movies, and playing video games. I also enjoy <span className='font-medium'>learning new things</span>{' '}
                in history, astronomy and philosophy.
            </p>
        </motion.section>
    );
};

export default About;

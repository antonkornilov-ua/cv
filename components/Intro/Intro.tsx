'use client';

import Image from 'next/image';
import antonPhoto from './../../public/Anton.png';
import { motion } from 'framer-motion';

import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import IntroButton from '@/components/Intro/IntroButton';
import { useSectionInView } from '@/utils/hooks';
import { useActiveSectionContext } from '@/context/activeSectionContext';

const Intro = () => {
    const { ref } = useSectionInView('Home', 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <section ref={ref} id='home' className='section_margin max-w-[50rem] text-center scroll-mt-[100rem]'>
            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: 'tween',
                            duration: 0.2,
                        }}>
                        <Image
                            src={antonPhoto}
                            alt='Anton'
                            className='rounded-full h-24 w-24 border-[0.35rem] border-white object-cover shadow-xl'
                            width={192}
                            height={192}
                            quality={95}
                            priority={true}
                        />
                    </motion.div>

                    <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: 'spring',
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7,
                        }}
                        className='text-4xl absolute bottom-0 right-0'>
                        👋
                    </motion.span>
                </div>
            </div>

            <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                className='mb-10 mt-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'>
                <span className='font-bold'>Hello, I&apos;m Anton, a frontend developer</span>. I continuously strive to
                learn and improve my skills and code. My core stack is{' '}
                <span className='font-bold'>
                    Html, Javascript, Typescript, <span className='underline'>React (Next.js)</span>, CSS and Tailwind
                </span>
                . Setting myself constant challenges, I persistently work towards achieving them successfully.
            </motion.h1>

            <motion.div
                className='flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}>
                <IntroButton
                    onClick={() => {
                        {
                            setActiveSection('Contact');
                            setTimeOfLastClick(Date.now());
                        }
                    }}
                    className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
                    link='#contact'>
                    Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
                </IntroButton>

                <IntroButton
                    target='_blank'
                    className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10'
                    downloadable={true}
                    link='/CV_Kornilov_Anton_Frontend_Developer.pdf'>
                    Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
                </IntroButton>

                <IntroButton
                    target='_blank'
                    className='bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 '
                    link='https://www.linkedin.com/in/anton-kornilov-b9296323a/'>
                    <BsLinkedin />
                </IntroButton>
                <IntroButton
                    className='text-[1.35rem] bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 '
                    target='_blank'
                    link='https://github.com/antonkornilov-ua'>
                    <FaGithubSquare />
                </IntroButton>
            </motion.div>
        </section>
    );
};

export default Intro;

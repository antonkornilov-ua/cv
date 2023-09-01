'use client';

import { useActiveSectionContext } from '@/context/activeSectionContext';
import { links } from '@/lib/data';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Header = () => {
    
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
    return (
        <header className='z-[999] relative'>
            <motion.div
                className='fixed top-0 left-1/2 h-[5.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75'
                initial={{ y: -100, x: '-50%', opacity: 0 }}
                animate={{ y: 0, x: '-50%', opacity: 1 }}>
                <nav className='flex flex-row justify-center items-center'>
                    <ul className='flex m-3 gap-7 justify-center items-center flex-wrap font-medium text-gray-500  sm:w-[initial] sm:flex-nowrap sm:gap-'>
                        {links.map((link) => (
                            <motion.li
                                className='relative'
                                key={link.hash}
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}>
                                <Link
                                    href={link.hash}
                                    className={clsx(
                                        'hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300',
                                        { 'text-gray-950 dark:text-gray-200': activeSection === link.name }
                                    )}
                                    onClick={() => {
                                        setActiveSection(link.name);
                                        setTimeOfLastClick(Date.now());
                                    }}>
                                    {link.name}
                                    {link.name === activeSection && (
                                        <motion.span
                                            layoutId='activeSection'
                                            transition={{
                                                type: 'spring',
                                                stiffness: 380,
                                                damping: 30,
                                            }}
                                            className='bg-gray-100 rounded-full absolute inset-0 w-full -z-10 dark:bg-gray-800'></motion.span>
                                    )}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </nav>
            </motion.div>
        </header>
    );
};

export default Header;

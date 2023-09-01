'use client';

import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading';
import { fadeIn } from '@/utils/motion';
import { projectsData } from '@/lib/data';
import React, { useEffect } from 'react';
import Project from './Project';
import { useSectionInView } from '@/utils/hooks';

const Projects = () => {

    const {ref} = useSectionInView('Projects')



    return (
        <motion.section
            ref={ref}
            id='projects'
            variants={fadeIn('up', 'tween', 0.2, 1)}
            initial='hidden'
            whileInView='show'
            className='scroll-mt-52 section_margin'>
            <SectionHeading>My Projects</SectionHeading>

            <div>{
                projectsData.map((project) => (
                    <React.Fragment
                        key={project.title}
                    >
                        <Project {...project} />
                    </React.Fragment>
                ))
            }</div>
        </motion.section>
    );
};

export default Projects;

'use client';

import { useSectionInView } from '@/utils/hooks';
import React from 'react';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SectionHeading from '../SectionHeading';
import { experiencesData } from '@/lib/data';
import { useTheme } from '@/context/ThemeContext';

export default function Experience() {
    const { ref } = useSectionInView('Experience');
    const {theme} = useTheme()

    return (
        <section className='section_margin scroll-mt-52' ref={ref} id='experience'>
            <SectionHeading>My Experience</SectionHeading>
            <VerticalTimeline lineColor=''>
                {experiencesData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            contentStyle={{
                                background: theme === 'light' ? '#f3f4f6' : 'rgba(255, 225, 255, 0.05)',
                                boxShadow: 'none',
                                border: '1px solid rgba(0, 0, 0, 0.05)',
                                textAlign: 'left',
                                padding: '1.3rem 2rem',
                            }}
                            contentArrowStyle={{
                                borderRight:
                                    theme === 'light'
                                        ? '0.4rem solid #9ca3af'
                                        : '0.4rem solid rgba(255, 255, 255, 0.5)',
                            }}
                            date={item.date}
                            icon={item.icon}
                            iconStyle={{
                                background: theme === 'light' ? 'white' : 'grey',
                                fontSize: '1.5rem',
                                color: theme === 'light' ? 'black' : 'white',
                                zIndex: theme === 'dark' ? 999 : '0',
                            }}>
                            <h3 className='font-semibold capitalize'>{item.title}</h3>
                            <p className='font-normal !mt-0'>{item.location}</p>
                            <p className='!mt-1 !font-normal text-gray-700'>{item.description}</p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </section>
    );
}


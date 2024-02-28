import React from 'react';
import { MdWork } from 'react-icons/md';
import { FaReact } from 'react-icons/fa';
import { MdOutlinePointOfSale } from 'react-icons/md';




import metaversus from '/public/metaversus.jpeg';
import zaputopia from '/public/zaputopia.jpeg';
import weatherapp from '/public/weatherapp.jpeg';
import schoolsite from '/public/schoolsite.jpeg';

export const links = [
    {
        name: 'Home',
        hash: '#home',
    },
    {
        name: 'About',
        hash: '#about',
    },
    {
        name: 'Projects',
        hash: '#projects',
    },
    {
        name: 'Skills',
        hash: '#skills',
    },
    {
        name: 'Experience',
        hash: '#experience',
    },
    {
        name: 'Contact',
        hash: '#contact',
    },
] as const;

export const experiencesData = [
    {
        title: 'Sales consultant',
        location: 'Kyiv, UA',
        description:
            "Worked as a sales consultant in a few companies. Experienced in ensuring the fulfillment of the store's planned indicators; controlling and implementing customer service standards; staff training; coordinating and managing personnel work; cash transactions.",
        icon: React.createElement(MdOutlinePointOfSale),
        date: '2014-2020',
    },
    {
        title: 'Product manager',
        location: 'Kyiv, UA',
        description:
            'Worked on creating a large database of products, cataloguing and synchronization with the web portal',
        icon: React.createElement(MdWork),
        date: '2019 - 2021',
    },
    {
        title: 'Frontend developer self education',
        location: 'Kyiv, UA',
        description:
            'I am constantly dedicated to enhancing my skills and refining my coding abilities. My proficiency spans across Html, Javascript, React, Typescript, and Next.JS,and also in CSS, SCSS, and Tailwind. By consistently presenting myself with new challenges, I remain committed to effectively conquering them.',
        icon: React.createElement(FaReact),
        date: '2022 - present',
    },
] as const;

export const projectsData = [
    {
        title: 'Metaversus',
        description:
            'Metaversus project redefines the digital realm with innovative design and cutting-edge tech on its landing page.',
        tags: ['Next.js', 'Typescript', 'Tailwind', 'Framer Motion'],
        imageUrl: metaversus,
        link: 'https://metaversus-beta-one.vercel.app/',
    },
    {
        title: 'Zaputopia',
        description:
            'Zaputopia: an open-source AI tool fostering creativity by enabling users to discover, create, and share ideas through a user-friendly interface.',
        tags: ['Next.js', 'JavaScript', 'React', 'Tailwind', 'MongoDB', 'Jest'],
        imageUrl: zaputopia,
        link: 'https://project-zaputopia.vercel.app/',
    },
    {
        title: 'Weather App',
        description:
            "The 'Weather App' project received an update with city-specific photos, local time, enhanced styles, and more data like pressure and humidity.",
        tags: ['React', 'TypeScript', 'Tailwind'],
        imageUrl: weatherapp,
        link: 'https://antons-weather-v2.netlify.app/',
    },
    {
        title: 'School Site',
        description: 'This is my Pet project site for local school.',
        tags: ['React', 'JavaScript', 'Tailwind', 'Leaflet'],
        imageUrl: schoolsite,
        link: 'https://school295.netlify.app/',
    },
] as const;

export const skillsData = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Tailwind',
    'Next.js',
    'Git',
    'Framer Motion',
    'MongoDB',
    'Node.js',
    'Jest',
    'Leaflet',
    'Three.js',
    'GraphQl'
] as const;

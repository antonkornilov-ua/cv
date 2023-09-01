import About from '@/components/About/About';
import Intro from '@/components/Intro/Intro';
import DividerSection from '@/components/DividerSection';
import Projects from '@/components/Projects/Projects';
import Skills from '@/components/Skills/Skills';
import Experience from '@/components/Experience/Experience';
import Contact from '@/components/Contact/Contact';

export default function Home() {
    return (
        <main className='flex flex-col items-center px-4'>
            <Intro />
            <DividerSection />
            <About />
            <DividerSection />
            <Projects />
            <DividerSection />
            <Skills />
            <DividerSection />
            <Experience />
            <DividerSection />
            <Contact />
        </main>
    );
}

'use client';
import Contact from '@/_sections/Contact';
import About from '@/_sections/About';
import Experiences from '@/_sections/Experiences';
import Projects from '@/_sections/Projects';

export default function Home() {


  return (
    <>
      <div className="">
        <div id="home" className="mx-auto md:w-3/4 md:p-16 p-4">
          <About />
        </div>
        <div className="mx-auto md:w-3/4 md:p-16 p-4" id="projects">
          <Projects />
        </div>
        <div className="mx-auto md:w-3/4 md:p-16 p-4" id="xp">
          <Experiences />
        </div>

        <div id="contact" className="py-24">
          <Contact />
        </div>
      </div>
    </>
  )
}

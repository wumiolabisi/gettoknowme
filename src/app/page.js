'use client';
import Reveal from '../_components/Reveal';
import profilPic from '../../public/Omowumi_OLABISI_photo.jpeg';
import Image from 'next/image';
import Skills from '@/_sections/Skills';
import Contact from '@/_sections/Contact';
import GetGitActivity from '@/_api/GetGitActivity';
import About from '@/_sections/About';
import Experiences from '@/_sections/Experiences';

export default function Home() {


  return (
    <>
      <div className="">
        <div id="home" className="mx-auto md:w-3/4 md:p-16 p-4">
          <About />
        </div>

        <div className="text-center" id="skills">
          <Reveal>
            Skillsnpm run d
          </Reveal>
        </div>

        <div className="mx-auto md:w-3/4 md:p-16 p-4" id="projects">
          <Reveal>
            <Experiences />
          </Reveal>
        </div>

        <div id="contact" className="py-24">
          <Contact />
        </div>
      </div>
    </>
  )
}

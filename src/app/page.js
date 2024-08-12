'use client';
import Reveal from '../_components/Reveal';
import profilPic from '../../public/Omowumi_OLABISI_photo.jpeg';
import Image from 'next/image';
import Skills from '@/_sections/Skills';
import Contact from '@/_sections/Contact';
import GetGitActivity from '@/_api/GetGitActivity';
import About from '@/_sections/About';

export default function Home() {


  return (
    <>
      <div className="container md:w-3/4">
        <div id="home">
          <About />
        </div>

        <div className="text-center" id="skills">
          <Reveal>
            <Skills />
          </Reveal>
        </div>

        <div id="contact" className="py-24">
          <Contact />
        </div>
      </div>
    </>
  )
}

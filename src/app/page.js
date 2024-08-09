'use client';
import Reveal from '../_components/Reveal';
import Image from 'next/image';
import Skills from '@/_sections/Skills';

export default function Home() {
  const theCurrentTime = new Date();
  const getTheHour = theCurrentTime.getHours();
  let isPM = false;

  if (getTheHour > 11) {
    isPM = true;
  }

  return (
    <>
      <div id="home">

        <div className="flex flex-col-reverse items-center">
          <Reveal>
            <div className="flex flex-col-reverse items-center">
              <h1 className="text-3xl text-violet-900">Développeuse Web Fullstack située à Paris et sa région</h1>
              <p className="uppercase md:text-6xl text-3xl font-bold mb-2 text-violet-900">Omowumi OLABISI</p>
            </div>
          </Reveal>
          <Reveal>
            <Image src="/Omowumi_OLABISI_photo.jpeg" className="object-cover rounded-full shadow-lg m-auto"
              width={320}
              height={500}
              alt="Photo de Omowumi OLABISI, développeuse Web située à Paris" loading="lazy" />
          </Reveal>
        </div>
        <Reveal>
          <p className="text-2xl text-violet-900/75">NextJS, React, WordPress, PHP, UI/UX et Accessiblité, ThreeJS, Framer Motion</p>
        </Reveal>
        <div className="flex md:flex-row flex-col my-12 items-center gap-6">
          <Reveal>
            <p className="text-2xl text-violet-900/75">
              {isPM ? 'Bonsoir' : 'Bonjour'}, je m'appelle Wumi. Bienvenue sur mon portfolio !
            </p>
          </Reveal>
        </div>
      </div>

      <div className="text-center" id="skills">
        <Reveal>
          <Skills />
        </Reveal>
      </div>
    </>
  )
}

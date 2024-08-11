'use client';
import Reveal from '../_components/Reveal';
import profilPic from '../../public/Omowumi_OLABISI_photo.jpeg';
import Image from 'next/image';
import Skills from '@/_sections/Skills';
import Contact from '@/_sections/Contact';
import GetGitActivity from '@/_api/GetGitActivity';

export default function Home() {
  const theCurrentTime = new Date();
  const getTheHour = theCurrentTime.getHours();
  let isPM = false;

  if (getTheHour > 17) {
    isPM = true;
  }


  return (
    <>
      <div className="container md:w-3/4">
        <div id="home">

          <div className="flex flex-col-reverse items-center">
            <Reveal>
              <div className="flex flex-col-reverse items-center">
                <h1 className="text-3xl text-violet-900 text-center">Développeuse Web Fullstack | Paris et sa région</h1>
                <p className="uppercase md:text-6xl text-3xl font-bold mb-2 text-violet-900 text-center">Omowumi OLABISI</p>
              </div>
            </Reveal>
            <Reveal>
              <Image src={profilPic} className="object-cover rounded-full shadow-lg m-auto"
                width={320}
                height={500}
                alt="Photo de Omowumi OLABISI, développeuse Web située à Paris" loading="lazy" placeholder="blur" />
            </Reveal>
          </div>
          <div className="text-center">
            <Reveal>
              <p className="text-2xl text-violet-900/75">NextJS, React, WordPress, PHP, UI/UX et Accessiblité, ThreeJS, Framer Motion</p>
            </Reveal>
          </div>
          <div className="flex lg:flex-row flex-col md:my-24 items-center gap-8">
            <div className="lg:basis-3/6 lg:text-left text-center">
              <Reveal>
                <h2 className="text-2xl text-violet-900 uppercase">
                  {isPM ? 'Bonsoir' : 'Bonjour'}, je suis à la recherche d'une nouvelle opportunité !
                </h2>
                <p className="text-base mt-4">
                  J'ai passé les derniers mois à travailler mes compétences en développement web.</p>
                <p className="text-base mt-4">
                  J'ai axé mon apprentissage en <strong>autodidacte</strong> sur mon employabilité et je suis prête à rejoindre une équipe de développeurs et développeuses créatives !
                </p>
              </Reveal>
            </div>
            <div className="lg:basis-3/6">
              <Reveal>
                <GetGitActivity />
              </Reveal>
            </div>
          </div>
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

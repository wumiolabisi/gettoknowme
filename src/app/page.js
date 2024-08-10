'use client';
import Reveal from '../_components/Reveal';
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
          <div className="text-center">
            <Reveal>
              <p className="text-2xl text-violet-900/75">NextJS, React, WordPress, PHP, UI/UX et Accessiblité, ThreeJS, Framer Motion</p>
            </Reveal>
          </div>
          <div className="flex md:flex-row flex-col my-12 items-center gap-2">
            <div className="md:basis-1/3">
              <Reveal>
                <h2 className="text-2xl text-violet-900 uppercase">
                  {isPM ? 'Bonsoir' : 'Bonjour'} et bienvenu·e sur mon portfolio !
                </h2>
                <p className="text-base">
                  J'ai passé les derniers mois à travailler mes compétences en développement web. J'ai axé mon apprentissage en autodidacte sur mon employabilité (si tant est que ce mot existe) et je suis prête à rejoindre une agence créative avec des valeurs humaines fortes !
                </p>
              </Reveal>
            </div>
            <div className="md:basis-2/3">
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

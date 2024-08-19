import GetGitActivity from '@/_api/GetGitActivity';
import Reveal from '@/_components/Reveal';
import Image from 'next/image';
import profilPic from '../../public/Omowumi_OLABISI_photo.jpeg';
import Popdown from '@/_components/Popdown';

const About = () => {

    const theCurrentTime = new Date();
    const getTheHour = theCurrentTime.getHours();
    let isPM = false;

    if (getTheHour > 17) {
        isPM = true;
    }

    return (
        <>
            <div className="flex flex-col-reverse items-center">
                <Reveal>
                    <div className="flex flex-col-reverse items-center">
                        <h1 className="text-3xl text-violet-900 text-center">Développeuse Web Fullstack | Paris et sa région</h1>
                        <p className="uppercase md:text-6xl text-4xl font-bold mb-2 text-violet-900 text-center">Omowumi OLABISI</p>
                    </div>
                </Reveal>
                <Popdown delay={0}>
                    <Image src={profilPic} className="object-cover rounded-full shadow-lg m-auto"
                        width={320}
                        height={500}
                        alt="Photo de Omowumi OLABISI, développeuse Web située à Paris" loading="lazy" placeholder="blur" />
                </Popdown>
            </div>
            <div className="text-center">
                <Reveal>
                    <p className="text-2xl text-fuchsia-700">NextJS, React, WordPress, PHP, UI/UX et Accessiblité, ThreeJS, Framer Motion</p>
                </Reveal>
            </div>
            <div className="flex lg:flex-row flex-col my-16 md:px-0 px-4 items-center gap-8">
                <div className="lg:basis-3/6 lg:text-left text-center">
                    <Reveal>
                        <h2 className="text-2xl text-violet-900">
                            {isPM ? 'Bonsoir' : 'Bonjour'}, je suis à la recherche d&apos;une nouvelle opportunité professionnelle en région parisienne !
                        </h2>
                        <p className="text-base mt-4">
                            J&apos;ai passé les derniers mois à travailler mes compétences en <strong>développement web</strong>.</p>
                        <p className="text-base mt-4">
                            J&paos;ai appris le développement web avec des projets personnels et en entreprise ! Je suis prête à rejoindre une entreprise créative.
                        </p>
                    </Reveal>
                </div>
                <div className="lg:basis-3/6">
                    <Reveal>
                        <GetGitActivity />
                    </Reveal>
                </div>
            </div>

            <div>
                <Reveal>
                    <h2 className="uppercase md:text-6xl text-4xl font-bold mb-2 text-violet-900 md:text-left text-center">A propos de moi</h2>
                </Reveal>

                <div className="flex md:flex-row flex-col justify-center items-center gap-4">
                    <div className="md:w-3/5">
                        <Reveal>  <p className="mt-4">Moi c&apos;est Omowumi, je suis une développeuse web et une grande passionnée des Sims 3
                            (oui, j&apos;ai passé des heures à construire des maisons et des vies de rêve). </p>
                            <p className="mt-4">J&apos;ai grandi à Montreuil et, après quelques escapades en dehors de la région,
                                me voilà de retour pour travailler sur ce que j&apos;aime. Je suis spécialisée dans la <strong>création de sites sur mesure</strong> et l&apos;optimisation SEO. </p>
                            <p className="mt-4">En dehors du boulot, je m&apos;amuse avec la modélisation 3D, l&apos;animation et le montage vidéo, et je compose des musiques assistées par ordinateur. </p>
                            <p className="my-4">Bref, je jongle entre les lignes de code et les notes de musique. Si vous cherchez quelqu&apos;un qui allie technique et créativité,
                                je suis disponible pour discuter !</p>
                        </Reveal>
                    </div>
                    <div className="md:w-2/5">
                        <h3 className='font-bold'>Regardez tout ce que je peux faire !</h3>
                        <Reveal>
                            <section className="my-4 flex flex-row flex-wrap justify-start items-center gap-2">
                                <span className="badge rounded-full bg-violet-900 text-white text-sm">WordPress</span>
                                <span className="badge rounded-full bg-violet-900 text-white text-sm">WooCommerce</span>
                                <span className="badge rounded-full bg-violet-900 text-white text-sm">Elementor</span>
                                <span className="badge rounded-full bg-violet-900 text-white text-sm">ACF</span>
                                <span className="badge rounded-full bg-violet-700 text-white text-sm">NextJS</span>
                                <span className="badge rounded-full bg-violet-700 text-white text-sm">ReactJS</span>
                                <span className="badge rounded-full bg-violet-700 text-white text-sm">ThreeJS</span>
                                <span className="badge rounded-full bg-violet-700 text-white text-sm">TailWindCSS</span>
                                <span className="badge rounded-full bg-violet-700 text-white text-sm">Bootstrap</span>
                                <span className="badge rounded-full bg-violet-500 text-white text-sm">Git</span>
                                <span className="badge rounded-full bg-violet-500 text-white text-sm">Intégration e-mailing</span>
                                <span className="badge rounded-full bg-violet-500 text-white text-sm">DUDA</span>
                                <span className="badge rounded-full bg-fuchsia-700 text-white text-sm">Optimisation SEO</span>
                                <span className="badge rounded-full bg-fuchsia-700 text-white text-sm">Accessiblité RGAA</span>
                                <span className="badge rounded-full bg-fuchsia-700 text-white text-sm">Relation client</span>
                                <span className="badge rounded-full bg-fuchsia-700 text-white text-sm">Autodidacte</span>
                                <span className="badge rounded-full bg-fuchsia-500 text-white text-sm">Autonomie</span>
                                <span className="badge rounded-full bg-fuchsia-500 text-white text-sm">A l&apos;écoute</span>
                                <span className="badge rounded-full bg-fuchsia-500 text-white text-sm">Pédagogie</span>
                                <span className="badge rounded-full bg-fuchsia-500 text-white text-sm">Fondant au chocolat</span>
                            </section>
                        </Reveal>
                    </div>
                </div>
            </div >
        </>
    )
}
export default About;
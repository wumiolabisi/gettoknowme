import Reveal from '@/_components/Reveal';
import Image from 'next/image';
import profilPic from '../../public/Omowumi_OLABISI_photo.jpg';
import Popdown from '@/_components/Popdown';

const About = () => {

    return (
        <>
            <div className="flex flex-col-reverse items-center">
                <Reveal>
                    <div className="flex flex-col-reverse items-center mt-10">
                        <h1 className="text-3xl text-white text-center">Développeuse Web Full stack | Paris et région</h1>
                        <p className="uppercase text-4xl font-bold mb-2 text-white text-center">Omowumi OLABISI</p>
                    </div>
                </Reveal>
                <Popdown delay={0}>
                    <Image src={profilPic} className="object-cover rounded-full shadow-lg mx-none"
                        width="250"
                        height="250"
                        alt="Photo de Omowumi OLABISI, développeuse Web située à Paris" loading="lazy" placeholder="blur" />
                </Popdown>
            </div>
            <div className="text-center">
                <Reveal>
                    <p className="text-2xl text-slate-300">WordPress, PHP, NextJS, React, NodeJS, ThreeJS, Framer Motion, SEO, UI/UX, RGAA</p>
                </Reveal>
            </div>


            <div className='my-16'>
                <Reveal>
                    <h2 className="uppercase md:text-6xl text-4xl font-bold mb-2 text-white md:text-left text-center">A propos de moi</h2>
                </Reveal>

                <div className="flex md:flex-row flex-col justify-center items-center gap-4">
                    <div className="md:w-3/5">
                        <Reveal>  <p className="mt-4">Je suis une développeuse web, je créé des sites et applications sur mesure avec NextJS, WordPress ou encore en full HTML5/CSS3. </p>
                            <p className="mt-4">J&apos;ai grandi à Montreuil et, après quelques escapades en dehors de la région,
                                me voilà de retour pour travailler sur ce que j&apos;aime. Je suis spécialisée dans la <strong>création de sites sur mesure</strong> et l&apos;optimisation SEO. </p>
                            <p className="mt-4">En dehors du boulot, je m&apos;amuse avec la modélisation 3D, l&apos;animation et le montage vidéo, et je compose des musiques assistées par ordinateur. Ces projets personnels me permettent de faire preuve d&apos;initiative et de créativité dans les projets professionnels qui me sont confiés </p>
                            <p className="my-4">Bref, je jongle entre les lignes de code et les notes de musique. Si vous cherchez quelqu&apos;un qui allie technique et créativité,
                                je suis disponible pour discuter !</p>
                        </Reveal>
                    </div>
                    <div className="md:w-2/5">
                        <h3 className='font-bold'>Compétences en développement web, en frameworks frontend et transverses</h3>
                        <Reveal>
                            <section className="my-4 flex flex-row flex-wrap justify-start items-center gap-2">
                                <span className="badge rounded-full bg-gray-900 text-white text-sm">WordPress</span>
                                <span className="badge rounded-full bg-gray-900 text-white text-sm">WooCommerce</span>
                                <span className="badge rounded-full bg-gray-900 text-white text-sm">Elementor</span>
                                <span className="badge rounded-full bg-gray-900 text-white text-sm">ACF</span>
                                <span className="badge rounded-full bg-gray-700 text-white text-sm">NextJS</span>
                                <span className="badge rounded-full bg-gray-700 text-white text-sm">ReactJS</span>
                                <span className="badge rounded-full bg-gray-700 text-white text-sm">ThreeJS</span>
                                <span className="badge rounded-full bg-gray-700 text-white text-sm">Javascript</span>
                                <span className="badge rounded-full bg-gray-700 text-white text-sm">JQuery</span>
                                <span className="badge rounded-full bg-gray-700 text-white text-sm">TailWindCSS</span>
                                <span className="badge rounded-full bg-gray-700 text-white text-sm">Bootstrap</span>
                                <span className="badge rounded-full bg-gray-500 text-white text-sm">Git</span>
                                <span className="badge rounded-full bg-gray-500 text-white text-sm">Intégration e-mailing</span>
                                <span className="badge rounded-full bg-gray-500 text-white text-sm">DUDA</span>
                                <span className="badge rounded-full bg-slate-700 text-white text-sm">Optimisation SEO</span>
                                <span className="badge rounded-full bg-slate-700 text-white text-sm">Accessiblité RGAA</span>
                                <span className="badge rounded-full bg-slate-700 text-white text-sm">Relation client</span>
                                <span className="badge rounded-full bg-slate-700 text-white text-sm">Autodidacte</span>
                                <span className="badge rounded-full bg-slate-500 text-white text-sm">Autonomie</span>
                                <span className="badge rounded-full bg-slate-500 text-white text-sm">A l&apos;écoute</span>
                                <span className="badge rounded-full bg-slate-500 text-white text-sm">Pédagogie</span>
                            </section>
                        </Reveal>
                    </div>
                </div>
            </div >
        </>
    )
}
export default About;
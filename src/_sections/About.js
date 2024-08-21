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
                        <p className="uppercase text-4xl font-bold mb-2 text-center">Omowumi OLABISI</p>
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
                    <p className="text-xl text-green-300 mb-4">NextJS, ReactJS, ThreeJS, Framer Motion, WordPress, Javascript, SASS/LESS, SEO/SEA, RGAA, UI/UX</p>
                </Reveal>
            </div>
            <div className="text-center  md:w-3/4 md:mx-auto">
                <Reveal>
                    <p className="text-xl font-light">Après plus de 30 sites vitrines et e-commerces réalisés et 3
                        ans d&apos;expériences dans le développement web, je suis à la recherche d&apos;un nouveau
                        challenge pour développer les solutions web de vos client·es.</p>
                </Reveal>
            </div>
            <div className="text-center mt-10 mb-24 md:w-3/4 md:mx-auto">

                <Reveal>
                    <a href="#contact" className="rounded-full font-bold text-sm px-10 py-4 uppercase border-2 border-solid border-green-300 bg-green-300 text-gray-800 hover:bg-transparent hover:text-green-300 hover:border-green-300 transition-all duration-300">Contactez-moi</a>
                </Reveal>
            </div>


            <div className='pt-16'>
                <Reveal>
                    <h2 className="uppercase md:text-6xl text-4xl font-bold mb-2 text-white md:text-left text-center">&Agrave; propos de moi</h2>
                </Reveal>

                <div className="flex md:flex-row flex-col justify-center items-center gap-8">
                    <div className="md:w-3/5 font-thin">
                        <Reveal>
                            <p className="mt-4"> Je suis une développeuse web polyvalente et entreprenante,
                                forte d&apos;une expérience de 3 ans en full stack. Ma créativité et ma capacité à apprendre seront des atouts pour répondre à vos challenges techniques.</p>
                            <p className="mt-4">Je souhaite intégrer une entreprise qui m&apos;offrira des challenges techniques et qui me permettra d&apos;évoluer en tant que développeuse web Full Stack. </p>
                            <p className="mt-4">Dans mes projets personnels, je m&apos;amuse avec la modélisation 3D, l&apos;animation et le montage vidéo,
                                et je compose des musiques assistées par ordinateur. Ces projets personnels me permettent d&apos;illustrer ma capacité à faire preuve d&apos;initiative et de créativité dans les projets professionnels qui me sont confiés.</p>

                        </Reveal>
                    </div>
                    <div className="md:w-2/5">
                        <h3 className='font-bold '>Compétences en développement web, en frameworks frontend et transverses</h3>
                        <Reveal>
                            <section className="my-4 flex flex-row flex-wrap justify-start items-center gap-2">
                                <span className="badge rounded-full bg-zinc-700 text-green-300 text-base">NextJS</span>
                                <span className="badge rounded-full bg-zinc-700 text-green-300 text-base">ReactJS</span>
                                <span className="badge rounded-full bg-zinc-700 text-green-300 text-base">ThreeJS</span>
                                <span className="badge rounded-full bg-zinc-700 text-green-300 text-base">Jest</span>
                                <span className="badge rounded-full bg-zinc-700 text-green-300 text-base">TailWindCSS</span>
                                <span className="badge rounded-full bg-zinc-700 text-green-300 text-base">Javascript</span>
                                <span className="badge rounded-full bg-zinc-700 text-green-300 text-base">SASS/LESS</span>
                                <span className="badge rounded-full bg-zinc-700 text-green-300 text-base">PHP</span>
                                <span className="badge rounded-full bg-zinc-700 text-green-300 text-base">HTML5</span>
                                <span className="badge rounded-full bg-zinc-700 text-green-300 text-base">CSS3</span>
                                <span className="badge rounded-full bg-zinc-700 text-green-300 text-sm">JQuery</span>
                                <span className="badge rounded-full bg-zinc-700 text-green-300 text-sm">Bootstrap</span>
                                <span className="badge rounded-full bg-zinc-700 text-green-300 text-sm">WordPress</span>
                                <span className="badge rounded-full bg-zinc-700 text-green-300 text-sm">GitHub</span>
                                <span className="badge rounded-full bg-zinc-700 text-green-300 text-sm">Agile</span>
                                <span className="badge rounded-full bg-zinc-700 text-green-300 text-xs">UI/UX</span>
                                <span className="badge rounded-full bg-zinc-700 text-green-300 text-xs">Optimisation SEO</span>
                                <span className="badge rounded-full bg-zinc-700 text-green-300 text-xs">Accessiblité RGAA</span>
                                <span className="badge rounded-full bg-zinc-700 text-green-300 text-xs">Autodidacte</span>
                                <span className="badge rounded-full bg-zinc-700 text-green-300 text-xs">Autonomie</span>
                                <span className="badge rounded-full bg-zinc-700 text-green-300 text-xs">A l&apos;écoute</span>
                                <span className="badge rounded-full bg-zinc-700 text-green-300 text-xs">Pédagogie</span>
                                <span className="badge rounded-full bg-zinc-700 text-green-300 text-xs">Travail en équipe</span>
                            </section>
                        </Reveal>
                    </div>
                </div>
            </div >
        </>
    )
}
export default About;
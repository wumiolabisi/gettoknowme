'use client';
import Image from "next/image";
import Popdown from "@/_components/Popdown";

const Navbar = () => {




    return (
        <nav className="flex flex-col justify-between fixed md:py-4 md:left-0 bottom-0 z-10 md:h-screen md:w-auto w-screen">
            <ul className="flex md:flex-col md:justify-center flex-row md:gap-10 gap-4 rounded-full shadow-lg mx-4 my-2 px-4 py-8 bg-transparent-blur box-shadow-custom">
                <li className="uppercase mx-auto navbar-item">
                    <Popdown delay={0}>
                        <a href="#home" title="Retour à la section Accueil">
                            <Image src="/about.png" width={30} height={30} alt="Icône qui représente la section Accueil" loading="lazy" className="m-auto" />
                            <p className="text-xxs my-2 md:inline hidden">A propos</p>
                        </a>
                    </Popdown>
                </li>
                <li className="uppercase mx-auto navbar-item" >
                    <Popdown delay={0.3}>
                        <a href="#projects" title="Retour à la section Projets">
                            <Image src="/projects.png" width={30} height={30} alt="Icône qui représente la section Projets" loading="lazy" className="m-auto" />
                            <p className="text-xxs my-2 md:inline hidden">Projets</p>
                        </a>
                    </Popdown>
                </li>
                <li className="uppercase mx-auto navbar-item" >
                    <Popdown delay={0.4}>
                        <a href="#xp" title="Retour à la section Expériences">
                            <Image src="/works.png" width={30} height={30} alt="Icône qui représente la section Projets" loading="lazy" className="m-auto" />
                            <p className="text-xxs my-2 md:inline hidden">Expériences</p>
                        </a>
                    </Popdown>
                </li>
                <li className="uppercase mx-auto navbar-item" >
                    <Popdown delay={0.5}>
                        <a href="#contact" title="Retour à la section Contact">
                            <Image src="/contact.png" width={30} height={30} alt="Icône qui représente la section Contact" loading="lazy" className="m-auto" />
                            <p className="text-xxs my-2 md:inline hidden">Contact</p>
                        </a>
                    </Popdown>
                </li>
            </ul>
            <div className="md:flex md:flex-col hidden mx-4 my-2 gap-6">
                <Popdown delay={0.6}>
                    <a href="https://github.com/wumiolabisi" target="_blank" title="Voir le profil github">
                        <Image src="/github.png" width={30} height={30} alt="Logo Github" loading="lazy" className="m-auto" />
                    </a>
                </Popdown>
                <Popdown delay={0.7}>
                    <a href="/CV-Omowumi-OLABISI-Developpeuse-Web.pdf" target="_blank" title="Voir le CV de Omowumi">
                        <Image src="/download.png" width={20} height={20} alt="CV de Omowumi OLABISI" loading="lazy" className="m-auto" />
                    </a>
                </Popdown>
            </div>
        </nav>
    );
}

export default Navbar;

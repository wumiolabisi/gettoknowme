import { Shantell_Sans } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Popdown from "@/_components/Popdown";


const shantell_font = Shantell_Sans({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Omowumi OLABISI, développeuse Web front et back située à Paris",
  description: "J'ai passé les derniers mois à apprendre React et son écosystème. Je suis développeuse Web FullStack et disponible pour travailler en Île-de-France",
};


export default function RootLayout({ children }) {

  return (
    <html lang="fr">
      <body className={shantell_font.className}>
        <nav className="flex flex-col justify-between fixed md:py-4 md:left-0 bottom-0 z-10 md:h-screen md:w-auto w-screen">
          <ul className="flex md:flex-col md:justify-center flex-row md:gap-10 gap-4 rounded-full shadow-lg mx-4 my-2 px-4 py-8 bg-transparent-blur">
            <li className="uppercase mx-auto navbar-item" >
              <Popdown delay={0}>
                <a href="#home" title="Retour à la section Accueil">
                  <Image src="/user.png" width={30} height={30} alt="Icône qui représente la section Accueil" loading="lazy" className="m-auto" />
                  <p className="text-xxs my-2 md:inline hidden">A propos</p>
                </a>
              </Popdown>
            </li>
            <li className="uppercase mx-auto navbar-item" >
              <Popdown delay={0.1}>
                <a href="#skills" title="Retour à la section Compétences" >
                  <Image src="/bulb.png" width={30} height={30} alt="Icône qui représente la section Compétences" loading="lazy" className="m-auto" />
                  <p className="text-xxs my-2 md:inline hidden">Compétences</p>
                </a>
              </Popdown>
            </li>
            <li className="uppercase mx-auto navbar-item" >
              <Popdown delay={0.3}>
                <a href="#projects" title="Retour à la section Projets">
                  <Image src="/bag.png" width={30} height={30} alt="Icône qui représente la section Projets" loading="lazy" className="m-auto" />
                  <p className="text-xxs my-2 md:inline hidden">Expériences</p>
                </a>
              </Popdown>
            </li>
            <li className="uppercase mx-auto navbar-item" >
              <Popdown delay={0.5}>
                <a href="#skills" title="Retour à la section Contact">
                  <Image src="/discussion.png" width={30} height={30} alt="Icône qui représente la section Contact" loading="lazy" className="m-auto" />
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
        <main className="flex min-h-screen flex-col items-center justify-between">
          {children}
        </main>
        <footer className="flex flex-row justify-center">
          <div className="relative h-32 w-full">
            <div className="absolute inset-x-0 bottom-0 h-16 text-center text-xxs">
              Ce site a été créé par Omowumi OLABISI en Août 2024.
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}

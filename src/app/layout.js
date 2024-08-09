import { Shantell_Sans } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Reveal from "@/_components/Reveal";
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
        <navbar className="fixed w-full md:top-0 bottom-0 z-10 h-fit">
          <div className="flex flex-row justify-center py-4 bg-transparent-blur">
            <ul className="flex flex-inline md:gap-6 gap-10 md:p-0 py-4">
              <li className="uppercase m-auto navbar-item" >
                <Popdown delay={0}>
                  <a href="#home" title="Retour à la section Accueil" alt="Retour à la section Accueil">
                    <Image src="/user.png" width={40} height={40} alt="Icône qui représente la section Accueil" loading="lazy" className="m-auto" />
                    <p className="text-xs my-2 md:inline hidden">A propos</p>
                  </a>
                </Popdown>
              </li>
              <li className="uppercase m-auto navbar-item" >
                <Popdown delay={0.1}>
                  <a href="#skills" title="Retour à la section Compétences" alt="Retour à la section Compétences">
                    <Image src="/bulb.png" width={40} height={40} alt="Icône qui représente la section Compétences" loading="lazy" className="m-auto" />
                    <p className="text-xs my-2 md:inline hidden">Compétences</p>
                  </a>
                </Popdown>
              </li>
              <li className="uppercase m-auto navbar-item" >
                <Popdown delay={0.3}>
                  <a href="#projects" title="Retour à la section Projets" alt="Retour à la section Projets">
                    <Image src="/bag.png" width={40} height={40} alt="Icône qui représente la section Projets" loading="lazy" className="m-auto" />
                    <p className="text-xs my-2 md:inline hidden">Expériences</p>
                  </a>
                </Popdown>
              </li>
              <li className="uppercase m-auto navbar-item" >
                <Popdown delay={0.5}>
                  <a href="#skills" title="Retour à la section Contact" alt="Retour à la section Contact">
                    <Image src="/discussion.png" width={40} height={40} alt="Icône qui représente la section Contact" loading="lazy" className="m-auto" />
                    <p className="text-xs my-2 md:inline hidden">Contact</p>
                  </a>
                </Popdown>
              </li>
            </ul>
          </div>
        </navbar>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          {children}
        </main>
        <footer className="flex flex-row justify-center">
          <div className="relative h-32 w-32">
            <div className="absolute inset-x-0 bottom-0 h-16">
              fOOTER
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}

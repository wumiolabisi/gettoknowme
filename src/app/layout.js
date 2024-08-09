import { Shantell_Sans } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { useScroll } from "framer-motion";


const shantell_font = Shantell_Sans({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Omowumi OLABISI, développeuse Web front et back située à Paris",
  description: "Découvrez le parcours de Omowumi, développeuse web créative et autodidacte",
};


export default function RootLayout({ children }) {

  return (
    <html lang="fr">
      <body className={shantell_font.className}>
        <navbar className="fixed w-full md:top-0 bottom-0 z-10">
          <div className="flex flex-row justify-center py-2 bg-transparent-blur">
            <ul className="flex flex-inline md:gap-6 gap-10 md:p-0 py-4">
              <li className="uppercase m-auto navbar-item" >
                <a href="#home" title="Retour à la section Accueil" alt="Retour à la section Accueil">
                  <Image src="/user.png" width={30} height={30} alt="Icône qui représente la section Accueil" loading="lazy" className="m-auto" />
                  <p className="text-xs my-2 md:inline hidden">A propos</p>
                </a>
              </li>
              <li className="uppercase m-auto navbar-item" >
                <a href="#skills" title="Retour à la section Compétences" alt="Retour à la section Compétences">
                  <Image src="/bulb.png" width={30} height={30} alt="Icône qui représente la section Compétences" loading="lazy" className="m-auto" />
                  <p className="text-xs my-2 md:inline hidden">Compétences</p>
                </a>
              </li>
              <li className="uppercase m-auto navbar-item" >
                <a href="#projects" title="Retour à la section Projets" alt="Retour à la section Projets">
                  <Image src="/bag.png" width={30} height={30} alt="Icône qui représente la section Projets" loading="lazy" className="m-auto" />
                  <p className="text-xs my-2 md:inline hidden">Expériences</p>
                </a>
              </li>
              <li className="uppercase m-auto navbar-item" >
                <a href="#skills" title="Retour à la section Contact" alt="Retour à la section Contact">
                  <Image src="/discussion.png" width={30} height={30} alt="Icône qui représente la section Contact" loading="lazy" className="m-auto" />
                  <p className="text-xs my-2 md:inline hidden">Contact</p>
                </a>
              </li>
            </ul>
          </div>
        </navbar>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          {children}
        </main>
        <footer className="flex flex-row justify-center">
          <div className="relative h-32 w-32 ...">
            <div className="absolute inset-x-0 bottom-0 h-16">Footer to come</div>
          </div>
        </footer>

      </body>
    </html>
  );
}

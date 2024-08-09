import { Shadows_Into_Light } from "next/font/google";
import "./globals.css";


const ubuntu = Shadows_Into_Light({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Omowumi OLABISI, développeuse Web front et back située à Paris",
  description: "Découvrez le parcours de Omowumi, développeuse web créative et autodidacte",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <navbar className="fixed w-full md:top-0 bottom-0 ">
          <div className="flex flex-row justify-center py-2 bg-white md:bg-transparent-blur">
            <ul className="flex flex-inline">
              <li>
                <a href="#home">Accueil</a>
              </li>
              <li>
                <a href="#me">A propos</a>
              </li>
              <li>
                <a href="#me">Compétences</a>
              </li>
              <li>
                <a href="#me">Expériences et projets</a>
              </li>
              <li>
                <a href="#me">Contact</a>
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

import { Shantell_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/_components/Navbar";


const shantell_font = Shantell_Sans({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Omowumi OLABISI, développeuse Web front et back située à Paris",
  description: "J'ai passé les derniers mois à apprendre React et son écosystème. Je suis développeuse Web FullStack et disponible pour travailler en Île-de-France",
};


export default function RootLayout({ children }) {

  return (
    <html lang="fr">
      <body className={shantell_font.className}>
        <Navbar />
        <main className="flex min-h-screen flex-col items-center justify-between">
          {children}
        </main>
        <footer className="flex flex-row justify-center  md:mb-0 mb-10">
          <div className="relative h-32 w-full">
            <div className="absolute inset-x-0 bottom-0 h-16 text-center text-xxs">
              The end.
            </div>
          </div>
        </footer>
        <div id="modals"></div>

      </body>
    </html>
  );
}

'use client'
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "./components/navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Prompt } from "next/font/google";
import Footer from "./components/footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const prompt = Prompt({
  subsets: ['thai', 'latin'], // รองรับภาษาไทย
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});


export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <head>
        <title>Front-End057 Onchuma</title>
      </head>
      <body className={prompt.className} style={{backgroundColor: 'white'}}>
        <Navigation/>
        
        {children}

        <Footer />

      </body>
    </html>
  );
}

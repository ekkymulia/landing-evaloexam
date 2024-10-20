import localFont from "next/font/local";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react"; // Ensure this is imported
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "EvaloExam",
  description: "Sistem Informasi Ujian dengan AI generatif untuk membuat soal ujian berdasarkan materi modul dan analisis jawaban siswa, meningkatkan efektivitas pembelajaran dan memberikan rekomendasi pengajaran yang tepat.",
  keywords: "AI ujian, sistem informasi ujian, soal ujian otomatis, analisis jawaban siswa, evaluasi pembelajaran, rekomendasi pengajaran, AI pendidikan",
  author: "Ekky Mulia Lasardi",
  viewport: "width=device-width, initial-scale=1.0",
  charset: "UTF-8",
  robots: "index, follow",
  og: {
    title: "EvaloExam - AI-Powered Exam System",
    description: "Meningkatkan efektivitas pembelajaran dengan sistem ujian berbasis AI yang membuat soal ujian otomatis berdasarkan materi modul dan analisis jawaban siswa.",
    type: "website",
    url: "https://evaloexam.com",
    image: "/images/evaloexam-logo.jpeg",
  },
  twitter: {
    card: "summary_large_image",
    title: "EvaloExam - AI-Powered Exam System",
    description: "Meningkatkan efektivitas pembelajaran dengan AI generatif untuk membuat soal ujian otomatis.",
    image: "/images/evaloexam-logo.jpeg",
    site: "@EvaloExam",
  },
  themeColor: "#4CAF50",
  language: "id",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id"> {/* Change lang attribute to "id" */}
      <GoogleTagManager gtmId="GTM-K4FCKM6J"/>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
      <GoogleAnalytics gaId="G-T62XEC88HN"/>
    </html>
  );
}

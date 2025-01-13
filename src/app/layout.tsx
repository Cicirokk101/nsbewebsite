import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from '@/components/Navbar';
import "./globals.css";

export const metadata = {
  title: 'NSBE UTD',
  icons: {
    icon: '/img/nsbe.png',
  },
}

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



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
      
      <Navbar />
        {children}
        <footer className="text-center mt-16 text-gray-600">
        © {new Date().getFullYear()} The University of Texas at Dallas, National Society of Black Engineers
      </footer>
<footer className="text-center mt-16 text-gray-600" >Send all Inquires to: <a href="mailto:utdnsbe@outlook.com">utdnsbe@outlook.com</a> </footer>

      </body>
    </html>
  );
}

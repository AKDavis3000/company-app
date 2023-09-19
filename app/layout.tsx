import './globals.css';
import type { Metadata } from 'next';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import './scss/styles.scss';

export const metadata: Metadata = {
  title: 'Turned Table',
  description: 'A furniture website created by Akilah Davis',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}

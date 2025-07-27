import './globals.css';
import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'CraftCommerce',
  description: 'Ecommerce for crafts',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="container mx-auto flex-1 px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

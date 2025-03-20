import { Inter } from 'next/font/google';
import ClientLayout from '../components/ClientLayout';
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "UrbanStyle - Fashion Store",
  description: "Elevate Your Wardrobe with Timeless Fashion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

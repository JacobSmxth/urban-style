import { Inter } from 'next/font/google';
import ClientLayout from '../components/ClientLayout';
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Vogue Vista - Fashion Store",
  description: "Elevate Your Wardrobe with Timeless Fashion",
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      }
    ],
    shortcut: '/favicon.svg',
  },
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

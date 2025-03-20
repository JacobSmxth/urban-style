'use client';

import { Inter } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import theme from '../theme';
import Navbar from '../components/Navbar';
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
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            <main>{children}</main>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}

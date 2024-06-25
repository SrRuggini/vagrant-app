/* eslint-disable react/prop-types */
import React from 'react';
import { Inter } from 'next/font/google';
import './styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Vagrants Helper',
  description: 'Tradução livro de eventos de Vagrantsong',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

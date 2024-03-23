import Providers from '@/providers/Providers';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import { Toaster } from 'sonner';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Autox',
  description: 'A Comprehensive Mobility Solutions Platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body className={`${inter.className}`}>
          {children}
          <Toaster position="top-right" closeButton richColors />
        </body>
      </html>
    </Providers>
  );
}

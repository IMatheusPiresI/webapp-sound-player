'use client';
import { poppins } from '@/resources/config/fonts';
import '../globals.css';
import { AuthProvider } from '@/contexts/authContext';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}

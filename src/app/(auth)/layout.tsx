'use client';
import { poppins } from '@/resources/config/fonts';
import '../globals.css';
import { AuthProvider } from '@/contexts/authContext';
import { MusicProvider } from '@/contexts/musicContext';
import { ToastConfigContainer } from '@/components/Toast';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AuthProvider>
          <MusicProvider>
            <ToastConfigContainer />
            {children}
          </MusicProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

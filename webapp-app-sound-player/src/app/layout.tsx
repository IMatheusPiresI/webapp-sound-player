import { poppins } from '@/resources/config/fonts';
import './globals.css';

export const metadata = {
  title: 'Music App - Song',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

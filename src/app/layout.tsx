import { poppins } from '@/resources/config/fonts';
import './globals.css';

export const metadata = {
  title: 'Music App - Song',
};

export default async function RootLayout({
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

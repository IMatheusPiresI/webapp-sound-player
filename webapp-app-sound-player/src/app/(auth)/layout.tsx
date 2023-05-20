import { poppins } from '@/resources/config/fonts';
import '../globals.css';
import { checkAuthWithRedirect } from '@/resources/utils/checkAuthWithRedirect';

export const metadata = {
  title: 'Music App - Song',
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  await checkAuthWithRedirect();

  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

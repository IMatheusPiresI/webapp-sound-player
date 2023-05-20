'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { destroyCookie } from 'nookies';
import { MdLogout } from 'react-icons/md';

export const Header: React.FC = () => {
  const { push } = useRouter();

  const logout = () => {
    destroyCookie(undefined, 'userToken');
    push('/sign');
  };

  return (
    <header className="max-w-screen-2xl w-full border-b-2 border-neutral-700 flex items-center justify-between px-4">
      <div className="flex items-center">
        <Image
          src="/phone-hearth.png"
          alt="phone hearth"
          width={60}
          height={60}
        />
        <p className="text-white text-lg ml-2 font-bold">Music App - Song</p>
      </div>

      <button
        type="button"
        className="flex items-center justify-center text-white text-lg gap-2"
        onClick={logout}
      >
        Logout
        <MdLogout color="#d33535" size={28} />
      </button>
    </header>
  );
};

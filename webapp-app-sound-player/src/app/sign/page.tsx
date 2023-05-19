import { CarouselInfo } from '@/components/CarouselInfo';
import Image from 'next/image';
import FormSign from './_components/FormSignIn';

export default function Sign() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex bg-cyan-200 min-h-screen w-full">
        <section className="w-full flex-1 bg-neutral-900 hidden lg:flex flex-col justify-center items-center px-4">
          <CarouselInfo />
        </section>
        <section className="w-full flex-1 bg-neutral-800 flex flex-col justify-center items-center px-4">
          <FormSign />
        </section>
      </div>
    </main>
  );
}

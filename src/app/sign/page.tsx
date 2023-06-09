import { CarouselInfo } from '@/components/CarouselInfo';
import FormSign from './_components/FormSignIn';
import { AuthFormProvider } from './_components/AuthFormProvider';
import { ToastConfigContainer } from '@/components/Toast';

export default function Sign() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ToastConfigContainer />
      <div className="flex bg-cyan-200 min-h-screen w-full">
        <section className="w-full flex-1 bg-neutral-900 hidden lg:flex flex-col justify-center items-center px-4">
          <CarouselInfo />
        </section>
        <section className="w-full flex-1 bg-neutral-800 flex flex-col justify-center items-center px-4">
          <AuthFormProvider>
            <FormSign />
          </AuthFormProvider>
        </section>
      </div>
    </main>
  );
}

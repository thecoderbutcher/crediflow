import Image from 'next/image';
import Link from 'next/link';

interface AuthCardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backLabel: string;
  backLink: string;
}

export const AuthCardWrapper = ({
  children,
  headerLabel,
  backLabel,
  backLink,
}: AuthCardWrapperProps) => {
  return (
    <div className="flex flex-col gap-4 space-y-4 w-[400px] shadow-lg rounded-md bg-white p-8">
      <header className="flex flex-col items-center gap-1">
        <h2 className="flex gap-1 justify-center items-center text-2xl font-bold">
          <Image src={'/app/logo.webp'} alt='Crediflow logo' width={40} height={40}/>
          <span>CREDIFLOW</span>
          </h2>
        <p className="text-lg lg:text-sm font-light">
          {headerLabel}
        </p>
      </header>
      <main className="flex flex-col gap-4">{children}</main>
      <footer className="flex flex-col items-center">
        <Link
          href={backLink}
          className="text-lg lg:text-sm font-light"
        >
          {backLabel}
        </Link>
      </footer>
    </div>
  );
};

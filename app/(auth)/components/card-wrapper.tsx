import Link from "next/link";
import SocialLogin from "./social";

interface AuthCardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backLabel: string;
  backLink: string;
  social: boolean;
}

export const AuthCardWrapper = ({
  children,
  headerLabel,
  backLabel,
  backLink,
  social,
}: AuthCardWrapperProps) => {
  return (
    <div className="flex flex-col gap-4 space-y-4 w-[400px] shadow-md rounded-md bg-white p-8">
      <header className="flex flex-col items-center gap-1">
        <h2 className="text-2xl font-bold text-secondary">🔐 App Name</h2>
        <p className="text-lg lg:text-sm font-light text-secondary/80">
          {headerLabel}
        </p>
      </header>
      <main className="flex flex-col gap-4">
        {children}
        {social && <SocialLogin />}
      </main>
      <footer className="flex flex-col items-center">
        <Link
          href={backLink}
          className="text-lg lg:text-sm font-light text-secondary/80 "
        >
          {backLabel}
        </Link>
      </footer>
    </div>
  );
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center h-screen px-4 bg-bgColor">
      {children}
    </div>
  );
};

export default AuthLayout;

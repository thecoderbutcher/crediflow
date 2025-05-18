import { signOut } from '@/auth';
const LogoutButton = async () => {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <button type="submit">Logout</button>
    </form>
  );
};

export default LogoutButton;

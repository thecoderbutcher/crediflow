'use server';
import { signOut } from '@/auth';
import { redirect } from 'next/navigation';

export const logout = async () => {
  // Server future stuff
  await signOut();
  redirect('/')

}

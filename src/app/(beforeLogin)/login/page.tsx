'use client';
// import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Main from '@/app/(beforeLogin)/_component/Main';

export default function Login() {
  // redirect('/i/flow/login');
  const router = useRouter();
  router.replace('/i/flow/login');

  // return null;
  return <Main />;
}

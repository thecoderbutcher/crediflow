'use client';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState, useTransition } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { newPassword } from '../action/new-password';
import { NewPasswordSchema } from '@/schema';
import { FormSuccess } from '../../components/form-success';
import { FormError } from '../../components/form-error';
const NewPasswordForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
    setError('');
    setSuccess('');

    startTransition(() => {
      newPassword(values, token).then(data => {
        if(data.error){
          setError(data?.error);
        }
        else{
          setSuccess(data?.success);
          setTimeout(() => {
            router.push(`/login`);
            reset();
          }, 1000);
        }
      });
    });
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="password"
          className={`${errors.password ? 'text-danger' : ''}`}
        >
          Nueva contraseña
        </label>
        <input
          {...register('password')}
          type="password"
          name="password"
          id="password"
          placeholder="********"
          disabled={isPending}
        />
        {errors.password && (
          <p className="text-sm text-danger">{errors.password.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="confirmPassword"
          className={`${errors.confirmPassword ? 'text-danger' : ''}`}
        >
          Confirmar contraseña
        </label>
        <input
          {...register('confirmPassword')}
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="********"
          disabled={isPending}
        />
        {errors.confirmPassword && (
          <p className="text-sm text-danger">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>
      <FormSuccess message={success} />
      <FormError message={error} />
      <div className="flex flex-col gap-2">
        <button
          className="w-full bg-primary text-white py-2 rounded-md"
          disabled={isPending}
        >
          Cambiar contraseña
        </button>
      </div>
    </form>
  );
};

export default NewPasswordForm;

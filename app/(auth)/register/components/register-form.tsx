"use client";

import * as z from "zod";
import { RegisterSchema } from "@/schema";
import { AuthCardWrapper } from "../../components/card-wrapper";
import { FormError } from "../../components/form-error";
import { FormSuccess } from "../../components/form-success";
import { useState, useTransition } from "react";
import { registerUser } from "../action";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });
  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      registerUser(values).then((data) => {
        if (data.error) {
          setError(data?.error);
        } else {
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
    <AuthCardWrapper
      headerLabel="Crear una cuenta nueva"
      backLabel="Volver"
      backLink="/"
      social={false}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            {...register("name")}
            name="name"
            disabled={isPending}
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="text-sm text-danger">{errors.name.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register("email")}
            name="email"
            disabled={isPending}
            placeholder="example@mail.com"
          />
          {errors.email && (
            <p className="text-sm text-danger">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            {...register("password")}
            disabled={isPending}
            name="password"
            placeholder="********"
          />
          {errors.password && (
            <p className="text-sm text-danger">{errors.password.message}</p>
          )}
        </div>
        <div className="flex w-auto">
          <button
            type="submit"
            className="bg-primary text-darkText w-full py-2 rounded-md"
            disabled={isPending}
          >
            Crear Cuenta
          </button>
        </div>
        <FormError message={error} />
        <FormSuccess message={success} />
      </form>
    </AuthCardWrapper>
  );
};

export default RegisterForm;

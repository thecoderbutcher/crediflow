import { BsCheckCircle } from 'react-icons/bs';

interface FormSuccessProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;

  return (
    <div className="flex w-full items-center gap-x-2 text-base text-success bg-success/10 rounded-md p-2">
      <BsCheckCircle className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};

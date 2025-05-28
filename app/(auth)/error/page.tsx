import { AuthCardWrapper } from '../components/card-wrapper';
import { FaTriangleExclamation } from 'react-icons/fa6';

const ErrorAuth = () => {
  return (
    <AuthCardWrapper
      headerLabel="Advertencia"
      backLabel="Volver"
      backLink="/login"
    >
      <p className="flex items-center justify-center text-xl gap-x-2">
        <FaTriangleExclamation className="text-warning" />
        Upps! Algo salió mal
      </p>
    </AuthCardWrapper>
  );
};

export default ErrorAuth;

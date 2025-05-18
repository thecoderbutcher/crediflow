import RegisterForm from './components/register-form';
import { AuthCardWrapper } from '../components/card-wrapper';

const page = () => {
  return (
    <AuthCardWrapper
      headerLabel="Crear una cuenta nueva"
      backLabel="Volver"
      backLink="/login"
    >
      <RegisterForm />
    </AuthCardWrapper>
  );
};

export default page;

import { AuthCardWrapper } from '../components/card-wrapper';
import ResetForm from './components/reset-form';

const page = () => {
  return (
    <AuthCardWrapper
      headerLabel="Olvidaste tú contraseña?"
      backLabel="Volver"
      backLink="/login"
    >
      <ResetForm />
    </AuthCardWrapper>
  );
};

export default page;

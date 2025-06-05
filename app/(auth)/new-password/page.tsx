import { AuthCardWrapper } from "../components/card-wrapper";
import NewPasswordForm from "./components/new-password-form";

const page = () => {
  return (
    <AuthCardWrapper
      headerLabel="Cambiar contraseña"
      backLabel="Volver"
      backLink="/login"
      social={false}
    >
      <NewPasswordForm />
    </AuthCardWrapper>
  );
};

export default page;

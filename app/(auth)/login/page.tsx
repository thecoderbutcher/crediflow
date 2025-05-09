import { AuthCardWrapper } from "../components/card-wrapper"
import { LoginForm } from "./components/login-form"

const page = () => {
  return (
    <AuthCardWrapper headerLabel="Bienvenido" backLabel="¿No tienes una cuenta?" backLink="/register" social>
        <LoginForm />
    </AuthCardWrapper>
  )
}

export default page
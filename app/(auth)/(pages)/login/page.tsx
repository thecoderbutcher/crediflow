import { AuthCardWrapper } from "../(components)/card-wrapper"
import { LoginForm } from "./(components)/login-form"

const page = () => {
  return (
    <AuthCardWrapper headerLabel="Bienvenido" backLabel="Volver" backLink="/">
        <LoginForm />
    </AuthCardWrapper>
  )
}

export default page
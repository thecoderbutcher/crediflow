import Header from "../../components/Header"
import FormCreateEmployee from "./components/FormCreateEmployee"

const page = () => {
  return (
    <div>
      <Header title="Agregar empleado" url="/employees"/>
      <FormCreateEmployee />
    </div>
  )
}

export default page

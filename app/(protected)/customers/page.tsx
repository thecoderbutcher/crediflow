import Header from "../components/Header"
import Topbar from "./components/Topbar"

const page = () => {
    return (
      <div className="flex flex-col">
        <Header title="Clientes" url="/dashboard"/>
        <Topbar />
      </div>
    )
  }
  
  export default page
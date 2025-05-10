import Header from "../components/Header"
import FilterStatus from "./components/FilterStatus"
import ListCustomer from "./list/components/ListCustomer"
import Topbar from "./components/Topbar"

const page = () => {
    return (
      <div className="flex flex-col">
        <Header title="Clientes" url="/dashboard"/>
        <Topbar />
        <FilterStatus />
        <ListCustomer />
      </div>
    )
  }
  
  export default page
import Header from "../components/Header"
import FilterStatus from "./components/FilterStatus"
import ListCustomer from "./list/components/ListCustomer"
import Topbar from "./components/Topbar"
import { auth } from "@/auth"
import { list } from "./list/action/list"

const page = async() => {
  const session = await auth();
  const customerList = await list(session?.user.id);

  return (
    <div className="flex flex-col">
      <Header title="Clientes" url="/dashboard"/>
      <Topbar />
      <FilterStatus />
      <ListCustomer listCustomer={customerList}/>
    </div>
    )
  }
  
  export default page
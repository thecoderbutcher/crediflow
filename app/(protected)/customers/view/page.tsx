
import Header from "../../components/Header"
import Profile from "./components/Profile"
import ListLoanCustomer from "./components/ListLoanCustomer" 

const page = () => {
  return (
    <div>
        <Header title="Clientes: client_id" url='/customers'/>
        <Profile /> 
        <ListLoanCustomer />
    </div>
  )
}

export default page
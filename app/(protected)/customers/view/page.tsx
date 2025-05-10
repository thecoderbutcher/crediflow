
import Header from "../../components/Header" 
import ListLoanCustomer from "./components/ListLoanCustomer" 

const page = () => {
  return (
    <div>
        <Header title="Clientes: client_id" url='/customers'/> 
        <ListLoanCustomer />
    </div>
  )
}

export default page
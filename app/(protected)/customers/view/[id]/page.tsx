import Header from '@/app/(protected)/components/Header'
import Profile from '../components/Profile'
import ListLoanCustomer from '../../../loans/list/components/ListLoanCustomer'
import { viewCustomers } from '../action/view'  
import { FaMoneyBillTransfer } from "react-icons/fa6";

interface pageProps {
    params: { id: string }
}
const page = async ({params}: pageProps) => {
    const {id} =  await params
    const customer = await viewCustomers(id)  
    return (
        <div className='flex flex-col h-screen w-full'>
            <Header title={`Cliente: ${customer?.idperson}` }url='/customers'/>
            {customer && <Profile customer={customer} />}
              <ListLoanCustomer /> 
        </div>
    )
}

export default page
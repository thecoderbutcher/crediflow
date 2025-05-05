
import Header from '../../components/Header'
import AddClientForm from './(components)/AddClientForm'

const page = () => {

    return (    
        <div className='flex flex-col justify-center'>
            <Header title="Agregar Cliente" url="/customers" />
            <AddClientForm />
        </div>
    )
}

export default page
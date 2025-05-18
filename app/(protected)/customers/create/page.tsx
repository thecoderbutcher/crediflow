import Header from '../../components/Header';
import FormCreateCustomer from './components/FormCreateCustomer';
const page = () => {
  return (
    <div className="flex flex-col w-full">
      <Header title="Agregar Cliente" url="/customers" />
      <FormCreateCustomer />
    </div>
  );
};

export default page;

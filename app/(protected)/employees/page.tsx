import Header from '../components/Header';
import Topbar from './components/Topbar';
import { listEmployees } from './list/action/list';
import ListEmployees from './list/components/ListEmployees';

const page = async () => {
  const employeeList = await listEmployees()
  return (
    <div className="flex flex-col gap-2 w-full">
      <Header title="Empleados" url="/dashboard" />
      <Topbar />
      <ListEmployees listEmployee={employeeList} />
    </div>
  );
};

export default page;

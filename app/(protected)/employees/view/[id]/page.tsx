import Header from '@/app/(protected)/components/Header';
import { viewEmployee } from '../action/view-employee';
import Profile from '../components/Profile';

interface PageProps {
  params: { id: string };
}
const page = async ({ params }: PageProps) => {
  const { id } = await params;
  const employee = await viewEmployee(id);

  return (
    <div className="flex flex-col w-full">
      <Header title={`Empleado: ${employee?.lastName}`} url="/employees" />
      {employee && <Profile employee={employee}/>}
    </div>
  );
};

export default page;

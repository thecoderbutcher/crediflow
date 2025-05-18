import Header from '../components/Header';
import Topbar from './components/Topbar';

const page = () => {
  return (
    <div className="flex flex-col w-full">
      <Header title="Prestamos" />
      <Topbar />
    </div>
  );
};

export default page;

import { FaMoneyBillTransfer, FaUserGroup } from 'react-icons/fa6';
import { HiTemplate } from 'react-icons/hi';
const About = () => {
  return (
    <section className="flex flex-col gap-4 bg-mutedText px-4 lg:px-8 xl:px-0 py-12 items-center justify-center">
      <h2 className="text-4xl font-semibold">¿Qué es Crediflow?</h2>
      <h3 className="text-xl font-semibold">
        🧠 Un software inteligente para negocios que prestan con inteligencia
      </h3>
      <p className='w-full  xl:w-1/2 font-light'>
        Nuestro sistema está diseñado para ayudarte a gestionar préstamos con
        precisión y control total. Ya sea que tengas un equipo pequeño o estés
        escalando tu operación, nuestra plataforma te brinda las herramientas
        que necesitas para mantener tu negocio funcionando sin complicaciones:
      </p>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
        <div className="flex flex-col gap-2 bg-light/50 px-1 py-2 rounded-lg shadow justify-center items-center w-[300px]">
          <div className="flex items-center justify-center w-14 h-14 text-center p-2 bg-gradient-to-tl from-green-700 via-green-600 to-green-500 border border-success rounded-full">
            <FaUserGroup className="text-3xl text-bgColor" />
          </div>
          <p className="text-center">
            Asigna empleados a tareas clave como cobranzas o nuevos préstamos.
          </p>
        </div>
        <div className="flex flex-col items-center bg-light/50 px-1 py-2 rounded-lg shadow justify-center w-[300px]">
          <div className="flex items-center justify-center w-14 h-14 text-center p-2 bg-gradient-to-tl from-yellow-700 via-yellow-600 to-yellow-500 border border-warning rounded-full">
            <FaMoneyBillTransfer className="text-3xl text-bgColor" />
          </div>
          <p className="text-center">
            Administra y aprueba cada solicitud con solo unos clics.
          </p>
        </div>
        <div className="flex flex-col bg-light/50 px-1 py-2 rounded-lg shadow items-center justify-center w-[300px]">
          <div className="flex items-center justify-center w-14 h-14 text-center p-2 bg-gradient-to-tl from-sky-700 via-sky-600 to-sky-500 border border-primary rounded-full">
            <HiTemplate className="text-3xl text-bgColor" />
          </div>
          <p className="text-center">
            Accede desde cualquier dispositivo, en cualquier momento.
          </p>
        </div>
      </div>
      <p className=' text-lg font-semibold'>
      ¡Olvidate del Excel y los cuadernos! Profesionalizá tu gestión y ganá tiempo para lo que realmente importa.
      </p>
    </section>
  );
};

export default About;

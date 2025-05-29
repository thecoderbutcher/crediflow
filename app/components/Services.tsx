import Image from 'next/image';


const Services = () => {
  const servicios = [
    { title: "Lavado Completo", description: "Interior y exterior con productos premium." },
    { title: "Pulido de Carrocería", description: "Elimina imperfecciones y realza el brillo." },
    { title: "Tratamiento Cerámico", description: "Protección duradera con efecto espejo." },
    { title: "Limpieza de Tapizados", description: "Elimina manchas y malos olores." },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-16 px-6 bg-[#f8fafc] text-[#0f172a]" id='services'>
      <h2 className="text-4xl font-bold mb-8">Nuestros Servicios</h2>
      <div className='flex flex-col gap-4 justify-around lg:flex-row'>
        <div className='flex relative'>
          <Image src={'/landing/detailing1.webp'} width={600} height={600} alt="Detailing" className='blur-xl'/>
          <Image src={'/landing/detailing1.webp'} width={600} height={600} alt="Detailing" className='absolute top-0'/>
        </div>
        <div className='flex flex-col gap-4 items-center lg:items-start lg:ml-8'>
          <p className='text-2xl font-bold text-center lg:text-start w-2/3'>EL MEJOR SERVICIO DE LAVADO DE AUTOS A MANO</p>
          <ul className='flex flex-col gap-4 items-center lg:items-start justify-center'>
            {servicios.map((servicio, index) => (
              <li
                key={index}
                className='text-center lg:text-start'
              >
                <h3 className="text-xl font-semibold">{servicio.title}</h3>
                <p className="text-sm text-gray-700">{servicio.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* <div className="max-w-7xl mx-auto text-center">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        </div>
      </div> */}
    </section>
  );
}

export default Services

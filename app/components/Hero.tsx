import Image from 'next/image' 

const Hero = () => {
  return (
    <section className="bg-secondary text-darkText py-20 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Tu Auto, <span className="text-primary">Impecable</span> como Nuevo
          </h1>
          <p className="text-mutedText text-lg md:text-xl">
            Servicios premium de detailing, limpieza profunda y protección para que tu vehículo siempre luzca impecable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary hover:bg-accent text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-md">
              Reservar turno
            </button>
            <button className="border border-accent text-accent px-6 py-3 rounded-xl hover:bg-accent hover:text-white transition-all">
              Ver servicios
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full h-full relative">
          <Image
            width={500}
            height={500}
            src={'/landing/hero-bg.webp'}
            alt="Auto limpio y brillante"
            className="rounded-2xl shadow-lg w-full object-cover blur-3xl"
          />
          <Image
            width={500}
            height={500}
            src={'/landing/hero-bg.webp'}
            alt="Auto limpio y brillante"
            className="rounded-2xl shadow-lg w-full object-cover absolute top-0 left-0"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
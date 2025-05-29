import Image from 'next/image';

const Hero = () => {
  return (
    <section className='flex flex-col lg:flex-row items-center justify-center gap-8 bg-secondary text-mutedText py-8 px-4 lg:px-12 lg:py-12'>
      <div className='flex flex-col gap-4 xl:w-1/2 2xl:w-2/5'>
        <p className='font-extrabold text-3xl text-center lg:text-start lg:text-4xl leading-10'>💰 Tu negocio de <span className='text-primary'>préstamos</span>, bajo control en <span className='text-primary'>un solo lugar</span></p>
        <p>Automatiza, asigna y aprueba préstamos fácilmente.</p>
        <p>👉 Empieza gratis y transforma la manera en que administras tus préstamos.</p>
        <div className='flex gap-8 justify-center lg:justify-start'>
          <button className='gradient-r border border-mutedText/10 p-2 rounded-xl gradient-l hover:scale-105 transition-all duration-200'>Solicitar demo</button>
          <button className='border border-mutedText/40 p-2 rounded-xl hover:scale-105 hover:bg-mutedText hover:text-secondary transition-all duration-200'>Ver precios</button>
        </div>
      </div>
      <div>
        <Image
          src={'/landing/hero.png'}
          alt="Creadiflow screenshot"
          width={600}
          height={600}
        />
      </div>
    </section>
  );
};

export default Hero;

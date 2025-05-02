const Pricing = () => {
  const precios = [
    { nombre: "Lavado Express", precio: "$8", detalles: "Exterior rápido en 15 minutos." },
    { nombre: "Lavado Premium", precio: "$20", detalles: "Interior + exterior, limpieza profunda." },
    { nombre: "Cerámico Básico", precio: "$100", detalles: "Protección de 6 meses." },
    { nombre: "Cerámico Pro", precio: "$180", detalles: "Protección de hasta 2 años." },
  ];

  return (
    <section className="py-16 px-6 bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Planes y Precios</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {precios.map((plan, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition"
            >
              <h3 className="text-2xl font-semibold mb-2">{plan.nombre}</h3>
              <p className="text-3xl font-bold text-yellow-400 mb-2">{plan.precio}</p>
              <p className="text-sm text-gray-300">{plan.detalles}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing
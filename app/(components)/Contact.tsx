

const Contact = () => {
  return (
    <section className="py-16 px-6 bg-[#f1f5f9] text-[#0f172a]">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Info de contacto */}
        <div>
          <h2 className="text-4xl font-bold mb-4">Contáctanos</h2>
          <p className="mb-6 text-gray-700">
            ¿Tenés dudas o querés agendar un turno? Completá el formulario o escribinos por WhatsApp.
          </p>
          <ul className="space-y-3 text-sm text-gray-800">
            <li><strong>📍 Dirección:</strong> Av. Principal 123, Villa Detailing</li>
            <li><strong>📞 Teléfono:</strong> +54 9 11 1234-5678</li>
            <li><strong>✉️ Email:</strong> contacto@detailingpro.com</li>
          </ul>
        </div>

        {/* Formulario */}
        <form className="bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-md space-y-6">
          <div>
            <label className="block mb-1 font-medium">Nombre</label>
            <input
              type="text"
              className="w-full input input-bordered"
              placeholder="Tu nombre"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full input input-bordered"
              placeholder="correo@example.com"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Mensaje</label>
            <textarea
              className="w-full textarea textarea-bordered"
              placeholder="Escribí tu mensaje..."
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="btn bg-[#0f172a] text-white hover:bg-[#1e293b] w-full"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
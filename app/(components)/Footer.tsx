import Link from "next/link";

const Footer = () => {
  return (
    <footer className="h-full bg-secondary text-darkText py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sección 1: Logo / Descripción */}
        <div>
          <h2 className="text-2xl font-bold text-primary">Detailling</h2>
          <p className="text-sm mt-2 text-gray-300">
            Servicio profesional de lavado, pulido y detallado automotriz.
            Atención personalizada y resultados brillantes.
          </p>
        </div>

        {/* Sección 2: Navegación */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-primary">
            Navegación
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link href="/" className="hover:text-white">
                Inicio
              </Link>
            </li>
            <li>
              <a href="#servicios" className="hover:text-white">
                Servicios
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-white">
                Contacto
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-white">
                Login
              </a>
            </li>
          </ul>
        </div>

        {/* Sección 3: Contacto */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-primary">Contacto</h3>
          <p className="text-sm text-gray-300">📍 Villa Mercedes - San Luis</p>
          <p className="text-sm text-gray-300">📞 (2657) 456-7890</p>
          <p className="text-sm text-gray-300">📧 contacto@detailing.com</p>
        </div>
      </div>

      {/* Derechos reservados */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Detailing. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;

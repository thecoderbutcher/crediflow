'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ResponsiveNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-secondary shadow-md px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex  justify-center items-center gap-1 text-xl font-bold text-darkText">
          <Image src="/app/logo2.webp" width={30} height={30} alt='Crediflow logo'/>
          Crediflow
        </div>

        {/* Botón hamburguesa */}
        <button
          className="lg:hidden text-darkText hover:text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menú en pantallas grandes */}
        <ul className="hidden lg:flex space-x-6 text-darkText font-medium">
          <li><Link href="/" className="hover:text-primary">Inicio</Link></li>
          <li><a href="#services" className="hover:text-primary">Servicios</a></li>
          <li><a href="#clientes" className="hover:text-primary">Precios</a></li>
          <li><a href="#contacto" className="hover:text-primary">Contacto</a></li>
          <li><Link href="/login" className="block hover:text-primary">Login</Link></li>
        </ul>
      </div>

      {/* Menú desplegable en móvil */}
      {isOpen && (
        <ul className="lg:hidden mt-3 space-y-3 text-darkText font-medium px-2">
          <li><Link href="/" className="hover:text-primary">Inicio</Link></li>
          <li><a href="#services" className="block hover:text-primary">Servicios</a></li>
          <li><a href="#clientes" className="block hover:text-primary">Precios</a></li>
          <li><a href="#contacto" className="block hover:text-primary">Contacto</a></li>
          <li><a href="#contacto" className="block hover:text-primary">Testimonios</a></li>
          <li><Link href="/login" className="block hover:text-primary">Login</Link></li>
        </ul>
      )}
    </nav>
  );
}

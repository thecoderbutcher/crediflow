'use client'
import { logout } from '@/app/(auth)/logout/action/logout';
import {
  FaUser,
  FaAngleRight,
  FaQuestion,
  FaShieldHalved,
  FaArrowRightFromBracket,
  FaBell
} from 'react-icons/fa6';
import { MdOutlineGTranslate } from "react-icons/md";
import { PiAppWindowFill } from "react-icons/pi";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";


const Settings = () => {
  return (
    <div className="flex flex-col w-full text-lg ">
      <div className="flex flex-col gap-8 px-8 py-8 rounded-md mx-4 bg-white shadow-secondary/20 shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaUser />
            <p className="font-semibold">Informacion personal</p>
          </div>
          <FaAngleRight className="text-secondary/50" />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MdOutlineGTranslate />
            <p className="font-semibold">Idioma</p>
          </div>
          <p>Es</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaBell />
            <p className="font-semibold">Notificaciones</p>
          </div>
          <BsToggleOff className="text-secondary/50" />
          <BsToggleOn />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PiAppWindowFill />
            <p className="font-semibold">Modo oscuro</p>
          </div>
          <BsToggleOff className="text-secondary/50" />
          <BsToggleOn />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaQuestion />
            <p className="font-semibold">FAQ</p>
          </div>
          <FaAngleRight className="text-secondary/50" />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaShieldHalved />
            <p className="font-semibold">Politica de privacidad</p>
          </div>
          <FaAngleRight className="text-secondary/50" />
        </div>
        <div className="flex items-center justify-between">
          <button onClick={()=> { logout()}} className="flex items-center gap-2">
            <FaArrowRightFromBracket />
            <p className="font-semibold">Cerrar sesión</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;

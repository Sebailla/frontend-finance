"use client";
import { useState } from "react";

import Image from "next/image";
import SpinIcon from "../../../../public/assets/icons/spinIcon";


export const GoogleSignBTN = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const LoginwithGoogle = async () => {
    try {
      setIsLoading(true);

      // toma la env disponible en el cliente (NEXT_PUBLIC_*)
      const rawApi = process.env.NEXT_PUBLIC_API_URL ?? "";

      // quitamos slash final si existe
      const apiBase = rawApi.replace(/\/+$/, "") || "http://localhost:3001/api/v1";

      // endpoint final — ajusta si tu ruta real es diferente
      const target = `${apiBase}/auth/google/login`;

      // redirige
      window.location.href = target;
    } catch (error) {
      console.error("Error al iniciar auth con Google:", error);
      setIsLoading(false);
    }
  };

  return (
    <button
      disabled={isLoading}
      onClick={LoginwithGoogle}
      className="
      lg:text-lg 
      flex 
      w-full 
      items-center 
      justify-center  
      bg-gray-500 
      text-white 
      px-6 py-3 
      rounded-xl 
      font-bold 
      font-title
      shadow-[0_4px_6px_var(--shadow-color)]
      transform 
      transition 
      duration-150 
      ease-in-out 

      hover:shadow-[0_6px_8px_var(--shadow-color)]
      hover:-translate-y-0.5
    hover:bg-gray-400

      active:shadow-[0_2px_4px_var(--shadow-color)]
      active:translate-y-0.5
      "
    >
      {isLoading && <SpinIcon />}
      {!isLoading && <Image
        src={'/google-icon-2025.svg'}
        alt="Google Icon"
        width={24}
        height={24}
        className="mr-3"
      />}
      Google
    </button>
  );
};

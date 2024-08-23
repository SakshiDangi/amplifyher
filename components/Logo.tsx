import Image from "next/image";
import React from "react";
import logo  from "../components/assets/logo.png"

export const Logo = () => {
  return (

    <Image
      src={ logo }
      width={100}
      height={100}
      alt="Logo"
    />
  );
};

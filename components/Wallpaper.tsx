import React from "react";
import Image from "next/image";

const Wallpaper = () => (
  <div>
    <div className="fixed h-full w-full overflow-hidden -z-10">
      <Image
        alt="Fedora 35 Background"
        src="/background.png"
        layout="fill"
        objectFit="cover"
        quality={quality}
      />
    </div>
    <p className="m-0 text-white text-3xl leading-10 text-center shadow-black pt-40">
      Fedora
    </p>
  </div>
);

export default Wallpaper;

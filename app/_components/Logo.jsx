import Image from "next/image";
import Link from "next/link";

import logo from "@/public/logo-placeholder.png";

function Logo() {
  return (
    <div className="relative aspect-square">
      <Link href="/">
        <Image src={logo} className="object-contain" fill alt="logo"></Image>
      </Link>
    </div>
  );
}

export default Logo;

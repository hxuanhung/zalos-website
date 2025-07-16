import Image from "next/image";
import Link from "next/link";

export const Header = () => (
  <header className="w-full flex items-center px-8 py-6">
    <Link href="/" className="cursor-pointer">
      <Image
        src="/zalos-white-logo.png"
        alt="Zalos Logo"
        width={180}
        height={48}
        className="select-none w-[180px] h-auto hover:opacity-80 transition-opacity"
      />
    </Link>
  </header>
);

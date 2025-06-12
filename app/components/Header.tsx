import Image from "next/image";
export const Header = () => (
  <header className="w-full flex items-center px-8 py-6">
    <Image
      src="/zalos-white-logo.png"
      alt="Zalos Logo"
      width={180}
      height={48}
      className="select-none w-[180px] h-auto"
    />
  </header>
);

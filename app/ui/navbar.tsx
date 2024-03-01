import Image from "next/image";

export function Navbar({ logo }: { logo: any }) {
  return (
    <nav className="m-4 mb-0 flex justify-center rounded-2xl border border-orange py-5">
      <Image src={logo} height={23.6} width={187} alt="Your clipboard logo" />
    </nav>
  );
}

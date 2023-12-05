import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="max-w-full h-auto bg-[#262626] flex flex-col justify-center items-center gap-[40px] py-12">
        <Image
          src={"/RoguePixelWhite.png"}
          width={194}
          height={0}
          alt="roguepixelwhitelogo"
        />

        <ul className="flex flex-col md:flex-row gap-6 md:gap-[80px] text-center md:text-start text-white  text-[18px]">
          <li className="cursor-pointer">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="cursor-pointer">
            <Link href={"/about"}>About</Link>
          </li>
          <li className="cursor-pointer">
            <Link href={"/services"}>Services</Link>
          </li>
          <li className="cursor-pointer">
            <Link href={"/teams"}>Teams</Link>
          </li>
        </ul>
        <p className="text-white/50">Copyright 2021</p>
      </div>
    </>
  );
}

import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="max-w-full h-[400px] bg-[#262626] flex flex-col justify-center items-center gap-[40px]">
        <Image
          src={"/RoguePixelWhite.png"}
          width={194}
          height={0}
          alt="roguepixelwhitelogo"
        />
        <ul className="flex flex-row text-white gap-[80px] text-[18px]">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">Team</li>
        </ul>
        <p className="text-white/50">Copyright 2021</p>
      </div>
    </>
  );
}

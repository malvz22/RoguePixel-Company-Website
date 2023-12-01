import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className=" bg-white sticky top-0 left-0 z-50">
        <div className="m-auto max-w-[1260px] h-[100px] flex items-center justify-between">
          <Image
            src="/RoguePixel.png"
            alt="roguePixelLogo"
            width={286}
            height={0}
          />
          <ul className="flex gap-12 font-bold text-[20px]">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">Team</li>
          </ul>
        </div>
      </div>
    </>
  );
}

"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [icon, setIcon] = useState(false);

  function handleClick() {
    setShowMenu(!showMenu);
    setIcon(!icon);
  }

  return (
    <>
      <div className=" bg-white sticky top-0 left-0 z-50">
        <div className="m-auto max-w-[1260px] h-[100px] flex items-center justify-between px-6">
          <Link className="sm:hidden md:flex" href="/">
            <Image
              src="/RoguePixel.png"
              alt="roguePixelLogo"
              width={286}
              height={0}
            />
          </Link>
          <Link className="sm:flex md:hidden" href="/">
            <Image
              src="/RoguePixelLogo.png"
              alt="roguePixelLogo"
              width={40}
              height={0}
            />
          </Link>

          <ul className="sm:hidden lg:flex gap-12 font-bold text-[20px]">
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
          <Image
            src={icon ? "/xbutton.png" : "/hamburger.png"}
            alt="hamburger"
            width={36}
            height={0}
            className="cursor-pointer sm:flex lg:hidden"
            onClick={handleClick}
          />
        </div>
        <div className={showMenu ? "flex" : "hidden"}>
          <div className="sm:flex w-full flex-col text-bold text-[36px] lg:hidden bg-white px-6 text-start">
            <hr></hr>
            <p className="p-3 cursor-pointer">
              <Link href={"/"} onClick={handleClick}>
                Home
              </Link>
            </p>
            <p className="p-3 cursor-pointer">
              <Link href={"/about"} onClick={handleClick}>
                About
              </Link>
            </p>
            <p className="p-3 cursor-pointer">
              <Link href={"/services"} onClick={handleClick}>
                Services
              </Link>
            </p>
            <p className="p-3 cursor-pointer">
              <Link href={"/teams"} onClick={handleClick}>
                Teams
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

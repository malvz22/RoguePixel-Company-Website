/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import heroImg from "../../public/heroImg2.jpg";

function HomeServices(props) {
  return (
    <>
      <div className="flex flex-col col-span-4 md:col-span-2 lg:col-span-1 text-center items-center gap-6">
        <div className="bg-[#F1F1F1] w-[100px] h-[100px] rounded-full flex justify-center items-center">
          <Image src={props.source} alt={props.alter} width={36} height={36} />
        </div>
        <p className="font-semibold text[22px]">{props.service}</p>
        <p className="font-medium text[18px]">{props.desc}</p>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <>
      <div className="relative m-auto w-full h-[100vh]">
        <Image
          src={heroImg}
          alt="Hero Banner"
          className="object-cover"
          quality={100}
          priority
          fill
        />
        <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-6 max-w-[800px] text-white px-6">
          <h1 className="sm:text-[32px] md:text-[48px] font-bold text-center">
            Digital Brilliance, Strategic Excellence: Your Success, Our Code.
          </h1>
          <p className="font-medium sm:text-[18px] md:text-[24px] text-center">
            We are passionate about transforming digital landscapes and
            empowering businesses to thrive in the online realm.
          </p>
        </div>
      </div>
      <div className="container max-w-[1260px] m-auto px-6">
        <div className="flex flex-col gap-12 justify-center py-[48px]">
          <h1 className="text-[40px] font-bold text-center">
            RoguePixel Studios
          </h1>
          <p className="text-[16px] font-semibold text-center">
            Welcome to RoguePixel Studios, where creativity meets precision in
            the ever-evolving digital landscape. We go beyond aesthetics,
            delivering digital solutions that align with your business goals and
            drive real results.
          </p>
          <div className="grid grid-cols-4 justify-items-center align-top gap-[20px]">
            <HomeServices
              source={"/mobileAppIcon.png"}
              alter={"mobileappicon"}
              service={"Mobile App Development"}
              desc={
                "Creating mobile applications to enhance user engagement and accessibility"
              }
            />
            <HomeServices
              source={"/webDev.png"}
              alter={"webdevicon"}
              service={"Website Development"}
              desc={
                "Creating visually appealing and functional websites that are user-friendly and responsive"
              }
            />
            <HomeServices
              source={"/graphicDesign.png"}
              alter={"graphicdesignicon"}
              service={"Graphic Designing"}
              desc={"Designing visual elements for online and offline use"}
            />
            <HomeServices
              source={"/digitalMarketing.png"}
              alter={"digitalmarketingicon"}
              service={"Digital Marketing"}
              desc={"Utilizing online channels to promote products or services"}
            />
          </div>
          <div className="flex justify-center">
            <Link href={"/services"}>
              <button className="rounded-full bg-[#AF1818] text-white font-bold px-[20px] py-[10px] text-[12px] md-text-[18px]">
                Our Services
              </button>
            </Link>
          </div>
        </div>
        <div className="py-12 grid sm:grid-cols-1 md:grid-cols-2 sm:justify-items-center sm:items-center gap-12">
          <Image
            className=" object-cover rounded-[20px] sm:col-span-2 md:col-span-1"
            src="/about.jpg"
            alt="Working"
            width={580}
            height={528}
          />
          <div className="flex flex-col gap-3 lg:gap-[20px] max-w-[562px] sm:col-span-2 md:col-span-1">
            <h1 className="font-bold text-[24px] lg:text-[40px] text-center md:text-start">
              Redefining digital Excellence
            </h1>
            <p className="text-[12px] lg:text-[18px] text-center md:text-start">
              Established 2021, we've embarked on a journey to reshape the
              digital experience, one pixel at a time. Our passion for
              innovation, commitment to quality, and unwavering dedication to
              our clients have positioned us as a leading digital agency.
            </p>
            <div className="mt-6 flex justify-center sm:items-center">
              <Link href={"/about"}>
                <button className="rounded-full bg-[#AF1818] text-white font-bold px-[20px] py-[10px] text-[12px] md-text-[18px]">
                  About Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#C4C4C4] bg-opacity-20">
        <div className="container max-w-[1260px] px-6 py-12 m-auto flex flex-col lg:flex-row justify-between items-center gap-3 lg:gap-[20px]">
          <h1 className="font-bold text-[24px] lg:text-[40px] max-w-[530px] text-center lg:text-start ">
            Let's Craft Your Digital Narrative
          </h1>
          <p className="text-[12px] lg:text-[18px] max-w-[660px] text-center lg:text-start">
            Whether you're a startup with a bold vision or an established brand
            seeking a digital facelift, RoguePixel Studios is your partner in
            digital innovation. Join us as we navigate the digital frontier,
            bringing your ideas to life and creating memorable digital
            experiences.
          </p>
        </div>
      </div>
      <div className="container max-w-[1260px] m-auto px-6">
        <div className="py-12 justify-center items-center text-center">
          <h1 className="font-bold text-[24px] lg:text-[40px] text-center mb-3">
            Meet Client Satisfaction after working with us
          </h1>
          <div className="grid grid-cols-4 gap-2">
            <div className="bg-gray-200 col-span-4 md:col-span-2 flex flex-col gap-3 p-4">
              <p className="font-semibold">
                Innovative Solutions, Outstanding Results
              </p>
              <p className="italic">"RoguePixel Studios doesn't just deliver projects; they deliver innovative solutions that drive outstanding results. Their digital marketing strategies significantly boosted our online visibility, and the mobile app they developed has become an essential part of our customer experience. Working with RoguePixel is synonymous with success."</p>
              <p className="italic">— Jessica Ramirez, Marketing Manager, QuantumTech Solutions</p>
            </div>
            <div className="bg-gray-200 col-span-4 md:col-span-2 flex flex-col gap-3 p-4">
              <p className="font-semibold">
                Professionalism Redefined
              </p>
              <p className="italic">"RoguePixel Studios redefines professionalism in the digital agency space. From project initiation to completion, their team demonstrated exceptional communication, transparency, and a genuine commitment to our success. Working with RoguePixel is not just a service; it's a partnership built on trust and mutual success."</p>
              <p className="italic">— Emily Carter, CEO, Pinnacle Innovations</p>
            </div>
            <div className="bg-gray-200 col-span-4 md:col-span-2 flex flex-col gap-3 p-4">
              <p className="font-semibold">
                Tailored Solutions for Every Need
              </p>
              <p className="italic">"RoguePixel Studios understands that one size doesn't fit all. Their ability to tailor solutions to our unique needs set them apart. Whether it's mobile app development, website design, or graphic creation, RoguePixel's team consistently delivers high-quality, customized solutions that resonate with our audience."</p>
              <p className="italic">— Alex Turner, COO, Synergy Enterprises</p>
            </div>
            <div className="bg-gray-200 col-span-4 md:col-span-2 flex flex-col gap-3 p-4">
              <p className="font-semibold">
                A Team You Can Trust
              </p>
              <p className="italic">"RoguePixel Studios is more than a service provider; they are a team you can trust with your digital dreams. From concept to execution, their dedication to understanding our goals and delivering on them has made them an integral part of our success. Working with RoguePixel is a decision we'd make again and again."</p>
              <p className="italic">— Jessica Miller, Founder, SparkUp Studios</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

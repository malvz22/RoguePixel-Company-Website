/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import heroImg from "../../public/heroImg2.jpg";

function HomeServices(props) {
  return (
    <>
      <div className="flex flex-col sm:col-span-4 md:col-span-2 lg:col-span-1 text-center items-center gap-6">
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
          <h1 className="text-[40px] font-semibold text-center">
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
              alt={"mobileappicon"}
              service={"Mobile App Development"}
              desc={
                "Creating mobile applications to enhance user engagement and accessibility"
              }
            />
            <HomeServices
              source={"/webDev.png"}
              alt={"webdevicon"}
              service={"Website Development"}
              desc={
                "Creating visually appealing and functional websites that are user-friendly and responsive"
              }
            />
            <HomeServices
              source={"/graphicDesign.png"}
              alt={"graphicdesignicon"}
              service={"Graphic Designing"}
              desc={"Designing visual elements for online and offline use"}
            />
            <HomeServices
              source={"/digitalMarketing.png"}
              alt={"digitalmarketingicon"}
              service={"Digital Marketing"}
              desc={"Utilizing online channels to promote products or services"}
            />
          </div>
          <div className="flex justify-center">
            <Link href={"/services"}>
              <button className="rounded-full bg-[#E92525] text-white font-bold px-[20px] py-[10px]">
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
          <div className="flex flex-col gap-[20px] max-w-[562px] sm:col-span-2 md:col-span-1">
            <h1 className="font-semibold text-[40px] sm:text-center md:text-start">
              Redefining digital Excellence
            </h1>
            <p className="text-[18px] sm:text-center md:text-start">
              Established 2021, we've embarked on a journey to reshape the
              digital experience, one pixel at a time. Our passion for
              innovation, commitment to quality, and unwavering dedication to
              our clients have positioned us as a leading digital agency.
            </p>
            <div className="mt-6 flex sm:justify-center sm:items-center">
              <Link href={"/about"}>
                <button className="rounded-full bg-[#E92525] text-white font-bold px-[20px] py-[10px]">
                  About Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#C4C4C4] bg-opacity-20">
        <div className="container max-w-[1260px] px-6 h-[293px] m-auto flex flex-row flex-wrap justify-between items-center">
          <h1 className="font-semibold text-[37px] max-w-[530px]">
            Let's Craft Your Digital Narrative
          </h1>
          <p className="max-w-[660px]">
            Whether you're a startup with a bold vision or an established brand
            seeking a digital facelift, RoguePixel Studios is your partner in
            digital innovation. Join us as we navigate the digital frontier,
            bringing your ideas to life and creating memorable digital
            experiences.
          </p>
        </div>
      </div>
      <div className="container max-w-[1260px] m-auto px-6">
        <div className="py-12 flex flex-col justify-center items-center text-center">
          <h1 className="text-[40px] font-semibold">
            Meet Client Satisfaction after working with us
          </h1>
          <p>Best Agency!</p>
          <p>
            Ultricies amet vulputate nulla in elit elit orci vitae tortor.
            Nunc ut pretium lectus aliquet varius pretium. Nec convallis morbi
            sapien aliquet augue. Nulla nulla integer pellentesque neque cum
            amet, turpis lacus, massa. Eu velit nunc adipiscing tincidunt
            blandi.
          </p>
        </div>
      </div>
    </>
  );
}

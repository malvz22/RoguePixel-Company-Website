/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import heroImg from "../../public/heroImg.jpg";

function HomeServices(props) {
  return (
    <>
      <div className="max-w-[300px] flex flex-col text-center justify-center items-center gap-7">
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
      <div className="">
        {/* <Image fill src={"/heroImg.jpg"} alt="heroimg" objectFit="cover" /> */}
        {/* <div className="justify-center">
          <h1 className="text-2xl">
            Digital Brilliance, Strategic Excellence: Your Success, Our Code.
          </h1>
          <p>
            We are passionate about transforming digital landscapes and
            empowering businesses to thrive in the online realm.
          </p>
        </div> */}
      </div>
      <div className="container max-w-[1260px] m-auto">
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
          <div className="w-full flex justify-center items-start gap-[20px] flex-wrap">
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
              alt={"mobileappicon"}
              service={"Digital Marketing"}
              desc={"Utilizing online channels to promote products or services"}
            />
          </div>
          <div className="flex justify-center">
            <button className="rounded-full bg-[#E92525] text-white font-bold px-[20px] py-[10px]">
              Our Services
            </button>
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-[115px] py-[48px] justify-center items-center">
          <div className="w-[581px] h-[528px]  relative">
            <Image className="rounded-[20px]" fill src="/about.jpg" alt="" />
          </div>
          <div className="flex flex-col gap-[20px] max-w-[562px]">
            <h1 className="font-semibold text-[40px]">
              Redefining digital Excellence
            </h1>
            <p className="text-[18px]">
              Established 2021, we've embarked on a journey to reshape the
              digital experience, one pixel at a time. Our passion for
              innovation, commitment to quality, and unwavering dedication to
              our clients have positioned us as a leading digital agency.
            </p>
            <div className="mt-6">
              <button className="rounded-full bg-[#E92525] text-white font-bold px-[20px] py-[10px]">
                About Us
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#C4C4C4] bg-opacity-20">
        <div className="container max-w-[1260px] h-[293px] m-auto flex flex-row flex-wrap justify-between items-center">
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
      <div className="container max-w-[1260px] m-auto">
        <div className="py-12">
          <h1 className="text-[40px] font-semibold">
            Meet Client Satisfaction after working with us
          </h1>
          <p>Review title</p>
          <div>stars count</div>
          <p></p>
        </div>
      </div>
    </>
  );
}

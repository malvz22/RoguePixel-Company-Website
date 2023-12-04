/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";

function Testimony(props) {
  return (
    <>
      <div className="max-w-[385px] sm:col-span-6 md:col-span-3 lg:col-span-2 h-auto flex flex-col bg-white border-solid border-[2px] border-[#e6e6e6] rounded-[20px] p-[20px] gap-5">
        <div className="flex flex-row gap-5">
          <Image
            src={props.imageSrc}
            alt={props.imageAlt}
            width={60}
            height={60}
            layout="intrinsic"
            quality={100}
          />
          <div>
            <p className="font-semibold text-[20px]">{props.company}</p>
            <p>{props.name}</p>
          </div>
        </div>
        <p>{props.testimony}</p>
      </div>
    </>
  );
}

export default function Services() {
  return (
    <>
      <div className="container max-w-[1260px] m-auto px-6">
        <div className="py-12">
          <p className="font-medium text-center text-[18px]">
            Discover how RoguePixel Studios can elevate your brand, captivate
            your audience, and propel your business towards unparalleled
            success. Explore our offerings below, and let's craft a digital
            narrative that sets you apart in a world driven by pixels and
            possibilities.
          </p>
        </div>
        <div className="py-12 flex flex-col gap-6 text-center">
          <h1 className="sm:text-[24px] lg:text-[40px] text-center font-semibold">
            Mobile App Development
          </h1>
          <p className="text-center sm:text-[16px] lg:text-[24px] font-semibold italic">
            Unlocking Innovation on Every Screen
          </p>
          <p className="sm:text-[12px] lg:text-[18px]">
            At RoguePixel Studios, our Mobile App Development service is a
            gateway to turning your visionary app ideas into reality. We
            specialize in creating user-centric, high-performance mobile
            applications for both iOS and Android platforms. From concept to
            deployment, our experienced team meticulously crafts applications
            that blend seamless functionality with an engaging user experience.
            Whether you're launching a startup or enhancing your existing
            digital presence, our Mobile App Development service is your key to
            standing out in the crowded app market.
          </p>
          <p className="text-center sm:text-[16px] lg:text-[24px] font-semibold">
            Services Include:
          </p>
          <ul className="sm:text-[12px] lg:text-[18px]">
            <li>Native App Development (iOS & Android)</li>
            <li>Cross-Platform App Development</li>
            <li>UI/UX Design for Mobile Applications</li>
            <li>App Testing and Quality Assurance</li>
            <li>App Maintenance and Updates</li>
          </ul>
        </div>
        <div className="py-12 flex flex-col gap-6 text-center">
          <h1 className="sm:text-[24px] lg:text-[40px] text-center font-semibold">
            Website Development
          </h1>
          <p className="text-center sm:text-[16px] lg:text-[24px] font-semibold italic">
            Crafting Digital Experiences That Captivate
          </p>
          <p className="sm:text-[12px] lg:text-[18px]">
            RoguePixel Studios is your destination for Website Development that
            goes beyond the ordinary. We understand that your website is the
            digital face of your brand, and our expert developers ensure it
            leaves a lasting impression. From visually stunning designs to
            seamless functionality, we specialize in creating responsive,
            user-friendly websites that resonate with your audience. Whether you
            need an e-commerce platform, a corporate site, or a creative
            portfolio, our Website Development service is tailored to meet your
            unique goals.
          </p>
          <p className="text-center sm:text-[16px] lg:text-[24px] font-semibold">
            Services Include:
          </p>
          <ul className="sm:text-[12px] lg:text-[18px]">
            <li>Custom Website Design and Development</li>
            <li>E-commerce Solutions</li>
            <li>Content Management System (CMS) Integration</li>
            <li>Responsive Web Design</li>
            <li>Website Maintenance and Support</li>
          </ul>
        </div>
        <div className="py-12 flex flex-col gap-6 text-center">
          <h1 className="sm:text-[24px] lg:text-[40px] text-center font-semibold">
            Graphic Designing
          </h1>
          <p className="text-center sm:text-[16px] lg:text-[24px] font-semibold italic">
            Elevating Brands Through Visual Brilliance
          </p>
          <p className="sm:text-[12px] lg:text-[18px]">
            In the digital realm, visuals speak louder than words, and our
            Graphic Designing service at RoguePixel Studios ensures your brand's
            visual identity is nothing short of extraordinary. Our creative team
            combines artistic flair with strategic thinking to deliver designs
            that captivate and communicate. From logos and branding collateral
            to social media graphics and marketing materials, our Graphic
            Designing service transforms your brand into a visual masterpiece,
            leaving a lasting impression on your audience.
          </p>
          <p className="text-center sm:text-[16px] lg:text-[24px] font-semibold">
            Services Include:
          </p>
          <ul className="sm:text-[12px] lg:text-[18px]">
            <li>Logo Design and Branding</li>
            <li>Print and Digital Marketing Collateral</li>
            <li>Social Media Graphics</li>
            <li>Infographics and Illustrations</li>
            <li>Packaging Design</li>
          </ul>
        </div>
        <div className="py-12 flex flex-col gap-6 text-center">
          <h1 className="sm:text-[24px] lg:text-[40px] text-center font-semibold">
            Digital Marketing
          </h1>
          <p className="text-center sm:text-[16px] lg:text-[24px] font-semibold italic">
            Navigating the Digital Frontier, Driving Real Results
          </p>
          <p className="sm:text-[12px] lg:text-[18px]">
            Embark on a journey of digital success with RoguePixel Studios'
            Digital Marketing service. Our team of marketing strategists, SEO
            experts, and social media maestros collaborate to elevate your
            online presence. We tailor data-driven campaigns that not only
            increase visibility but also convert leads into loyal customers.
            From search engine optimization to social media management, our
            Digital Marketing service is your comprehensive solution for
            achieving tangible results in the ever-evolving digital landscape.
          </p>
          <p className="text-center sm:text-[16px] lg:text-[24px] font-semibold">
            Services Include:
          </p>
          <ul className="sm:text-[12px] lg:text-[18px]">
            <li>Search Engine Optimization (SEO)</li>
            <li>Social Media Marketing and Management</li>
            <li>Pay-Per-Click (PPC) Advertising</li>
            <li>Content Marketing</li>
            <li>Email Marketing</li>
          </ul>
        </div>
        <div className="py-12 grid grid-cols-6 sm:justify-items-center sm:items-center gap-12">
          <h1 className="font-semibold sm:text-[24px] lg:text-[40px] text-center col-span-6">
            Testimonials
          </h1>
          <Testimony
            imageSrc="/testimony/customer1.png"
            imageAlt="displaypic1"
            company="NextGen Innovations"
            name="Mark Anderson"
            testimony="RoguePixel Studios has been the perfect partner for our digital journey. Their team's expertise in web development, app design, and digital marketing is unparalleled. Our online presence has evolved into something truly exceptional, thanks to RoguePixel's innovative solutions and unwavering commitment to excellence."
          />
          <Testimony
            imageSrc="/testimony/customer1.png"
            imageAlt="displaypic1"
            company="Gillette"
            name="Darrell Steward"
            testimony="Sed pretium, in et neque sed. Magna euismod ac, gravida accumsan. Viverra diam non sagittis,"
          />
          <Testimony
            imageSrc="/testimony/customer1.png"
            imageAlt="displaypic1"
            company="Gillette"
            name="Darrell Steward"
            testimony="Sed pretium, in et neque sed. Magna euismod ac, gravida accumsan. Viverra diam non sagittis,"
          />
          <Testimony
            imageSrc="/testimony/customer1.png"
            imageAlt="displaypic1"
            company="Gillette"
            name="Darrell Steward"
            testimony="Sed pretium, in et neque sed. Magna euismod ac, gravida accumsan. Viverra diam non sagittis,"
          />
          <Testimony
            imageSrc="/testimony/customer1.png"
            imageAlt="displaypic1"
            company="Gillette"
            name="Darrell Steward"
            testimony="Sed pretium, in et neque sed. Magna euismod ac, gravida accumsan. Viverra diam non sagittis,"
          />
          <Testimony
            imageSrc="/testimony/customer1.png"
            imageAlt="displaypic1"
            company="Gillette"
            name="Darrell Steward"
            testimony="Sed pretium, in et neque sed. Magna euismod ac, gravida accumsan. Viverra diam non sagittis,"
          />
        </div>
      </div>
    </>
  );
}

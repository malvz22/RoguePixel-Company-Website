/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import getData from "../Fetch/GetData";

function CoreValues(props) {
  return (
    <>
      <div className="flex flex-col items-center col-span-4 md:col-span-2 lg:col-span-1 gap-3">
        <Image src={props.source} alt={props.alter} width={100} height={100} />
        <p className="text-center font-semibold text-[18px] lg:text-[22px]">{props.name}</p>
        <p className="text-center text-[12px] lg:text-[18px]">{props.desc}</p>
      </div>
    </>
  );
}

export default async function About() {

  const data = await getData();
  const clevel = data.slice(0, 3);
  console.log(clevel);

  const detailObj = [
    {
      jobdesc: `CEO/Founder`,
      experience: `With over 2 years of visionary leadership, Dustin Ryan brings a wealth of experience to the helm of RoguePixel Studios. As the driving force behind our company's strategic direction, Dustin Ryan has consistently demonstrated a keen ability to navigate the ever-evolving landscape of the digital industry.`,
    },
    {
      jobdesc: `Creative Director`,
      experience: `With an illustrious career spanning 2 years in the realm of design and creativity, Amber Brewer stands at the forefront of RoguePixel Studios' creative vision. As our Creative Director, she leverage a diverse background in  to inspire and guide our talented team of designers.`,
    },
    {
      jobdesc: `Technical Director`,
      experience: `With a distinguished career spanning 2 years in the ever-evolving landscape of technology and development, Jill Montgomery is the driving force behind the technical prowess at RoguePixel Studios. As our Technical Director, she bring a wealth of experience and a passion for innovation to lead our dynamic technical team.`,
    },
  ]

  console.log(detailObj[0].jobdesc);

  return (
    <>
      <div className="container max-w-[1260px] m-auto px-6">
        <div className="py-12 flex flex-col justify-center items-center gap-12">
          <Image
            src={"/RoguePixel.png"}
            alt="roguePixelLogo"
            width={753}
            height={0}
            priority
          />
          <p className="font-medium text-[18px] text-center">
            Welcome to RoguePixel Studios, where creativity meets precision in
            the ever-evolving digital landscape. Established 2021, we've
            embarked on a journey to reshape the digital experience, one pixel
            at a time. Our passion for innovation, commitment to quality, and
            unwavering dedication to our clients have positioned us as a leading
            digital agency.
          </p>
        </div>
        <div className="py-12 grid grid-cols-2 sm:justify-items-center sm:items-center gap-12">
          <h1 className="text-[24px] lg:text-[40px] text-center font-bold col-span-2">
            Our History
          </h1>
          <Image
            className=" object-cover rounded-[20px] col-span-2 md:col-span-1"
            src="/about2.jpg"
            alt="Working"
            width={580}
            height={528}
            layout="intrinsic"
          />
          <div className="max-w-[700px] text-center md:text-start col-span-2 md:col-span-1">
            <p className="text-[12px] lg:text-[18px]">
              Founded by a team of seasoned professionals with a shared vision,
              RoguePixel Studios was born out of the idea that digital solutions
              should be as unique as the brands they represent. Over the years,
              we've honed our skills, adapted to emerging technologies, and
              built a legacy of delivering exceptional results for clients
              across diverse industries.
            </p>
          </div>
        </div>
        <div className="py-12 grid grid-cols-2 sm:justify-items-center sm:items-center gap-12">
          <h1 className="text-[24px] lg:text-[40px] text-center font-bold col-span-2">
            Our Culture
          </h1>
          <Image
            className=" object-cover rounded-[20px] col-span-2 md:col-span-1 order-last"
            src="/culture.jpg"
            alt="Working"
            width={580}
            height={528}
          />
          <div className="max-w-[700px] text-center md:text-start col-span-2 md:col-span-1 order-last md:order-2">
            <p className="text-[12px] lg:text-[18px]">
              At RoguePixel, we foster a culture of collaboration, innovation,
              and continuous learning. We believe in pushing boundaries and
              challenging the status quo. Our work environment is not just about
              projects; it's about a shared commitment to excellence, a passion
              for creativity, and a belief that every challenge is an
              opportunity to showcase our capabilities.
            </p>
          </div>
        </div>
        <div className="py-12 sm:justify-items-center sm:items-center flex flex-col gap-12 text-center">
          <h1 className="text-[24px] lg:text-[40px] font-bold col-span-2">
            The RoguePixel Studios Team
          </h1>
          <p className="text-[12px] lg:text-[18px]">
            Our strength lies in our team — a dynamic blend of creative minds,
            tech enthusiasts, and strategic thinkers. From web developers
            crafting seamless user experiences to marketing mavens driving
            brand engagement, each RoguePixel team member is a pixel-perfect
            contributor to our shared success story.
          </p>

          {clevel.map((data, i) => {
            return (
              <>
                <div className="flex flex-col justify-center items-center gap-2" key={data.id.value}>
                  <Image src={data.picture.large} width={150} height={150} alt="teamImg" quality={100} className="rounded-xl mb-3"></Image>
                  <p className="text-center font-semibold text-[18px] lg:text-[22px]">{data.name.first + ` ` + data.name.last}, {detailObj[i].jobdesc}</p>
                  <p className="text-center text-[12px] lg:text-[18px]">{detailObj[i].experience}</p>
                </div>
              </>
            );
          })}


        </div>
        <div className="py-12 flex flex-col gap-12">
          <h1 className="text-[24px] lg:text-[40px] text-center font-bold col-span-2">
            Why choose RoguePixel Studios?
          </h1>
          <div className="grid grid-cols-4 align-top gap-8">
            <CoreValues
              source="/innovation.png"
              alter="innovation"
              name="Innovation"
              desc="We thrive on pushing the boundaries of what's possible,
                embracing new ideas, and staying ahead of industry trends."
            />
            <CoreValues
              source="/client.png"
              alter="ClientCentricApproach"
              name="Client-Centric Approach"
              desc="Your success is our success. We build lasting partnerships, prioritize open communication, and tailor our solutions to your unique needs."
            />
            <CoreValues
              source="/integrity.png"
              alter="integrity"
              name="Integrity"
              desc="Trust is the foundation of our relationships. We operate with transparency, honesty, and a commitment to delivering on our promises."
            />
            <CoreValues
              source="/excellence.png"
              alter="excellence"
              name="Excellence"
              desc="From pixel-perfect design to flawless execution, we pursue excellence in every aspect of our work."
            />
          </div>
        </div>
      </div>
    </>
  );
}

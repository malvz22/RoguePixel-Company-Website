import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import getData from "../Fetch/GetData";


export default async function Teams() {

  const data = await getData()

  const expertiseArr = ["CEO/Founder", "Creative Director", "Technical Director", "Project Manager", "Digital Marketing Manager", "UI/UX Designer", "Web Developer (Front-end and Back-end)", "Mobile App Developer", "Graphic Designer", "Content Strategist/Writer", "Social Media Manager", "Quality Assurance (QA) Specialist"]

  return (
    <>
      <div className="container max-w-[1260px] m-auto px-6">
        <div className="py-12 flex flex-col justify-center items-center text-center gap-6">
          <h1 className="sm:text-[24px] lg:text-[40px] text-center font-semibold">
            Our Teams
          </h1>

          <p className="font-semibold py-12">Meet the RoguePixel Studios Team: Innovators, Creators, Collaborators</p>

          <div className="grid grid-cols-6 gap-6">
            {data.map((teams, i) => {
              return (
                <>
                  <div className="flex flex-col items-center align-top col-span-6 md:col-span-3 lg:col-span-2" key={teams.id.value}>
                    <Image src={teams.picture.large} width={120} height={120} quality={100} alt="teamImg" className="rounded-xl mb-3" />
                    <div className="">
                      <p className="font-semibold">{teams.name.first + ` ` + teams.name.last}</p>
                    </div>
                    <p className="">{expertiseArr[i]}</p>
                    <div className="flex flex-row justify-center items-center gap-2">
                      <MdEmail className="" />
                      <p className="text-[12px]">{teams.email}</p>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-2">
                      <FaPhone />
                      <p className="text-[12px]">{teams.phone}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

import Image from "next/image";

function PersonDetails(props) {
  return (
    <>
      <div className="flex flex-col justify-items-center align-top gap-1 sm:col-span-6 md:col-span-3 lg:col-span-2">
        <Image src={"/teams/team.jpeg"} width={180} height={180} layout="intrinsic" alt="teamImg" className="rounded-full" />
        <p className="font-semibold">{props.name}</p>
        <p className="">{props.expertise}</p>
        <p className="">{props.contact}</p>
      </div>
    </>
  );
}

export default function Teams() {
  return (
    <>
      <div className="container max-w-[1260px] m-auto px-6">
        <div className="py-12 flex flex-col justify-center items-center text-center">
          <h1 className="sm:text-[24px] lg:text-[40px] text-center font-semibold">
            Our Teams
          </h1>
          <div className="grid grid-cols-6 gap-6">
            <PersonDetails name="Testing" expertise="Random" contact="email.com" />
            <PersonDetails name="Testing" expertise="Random" contact="email.com" />
            <PersonDetails name="Testing" expertise="Random" contact="email.com" />
            <PersonDetails name="Testing" expertise="Random" contact="email.com" />
            <PersonDetails name="Testing" expertise="Random" contact="email.com" />
            <PersonDetails name="Testing" expertise="Random" contact="email.com" />
          </div>
        </div>
      </div>
    </>
  );
}

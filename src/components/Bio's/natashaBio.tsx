import Image from "next/image";

export default function NatashaBio() {
  return (
    <div
      id="natasha"
      className="text-Chocolate flex flex-row w-full bg-Sky items-center p-10 gap-10 rounded-3xl relative tablet:flex-col"
    >
      <Image
        className="rounded-3xl"
        src="/images/natasha-photo.png"
        width={350}
        height={350}
        alt="Sierra Laurent -  Brand and Marketing Director"
      />

      <div className="gap-5 flex flex-col max-w-3xl">
        <div className="gap-2">
          <h1 className="text-4xl font-bold">Natasha Vlcek</h1>
          <h3 className="text-xl font-semibold">
             Executive Assistant
          </h3>
        </div>

        <p className="text-base">
          Natasha Vlcek is the Executive Assistant at Shanfe, bringing a strong foundation in scientific training and operational leadership to the organization. She holds a Bachelor of Science in Molecular Biology and Biochemistry, which supports her analytical approach and attention to detail across Shanfe’s administrative, research, and training activities.
        </p>

        <p className="text-base">
          Before joining Shanfe, Natasha served as the Program Manager for Canada’s only combined hypobaric and hyperbaric facility, where she oversaw daily operations, coordinated research and training programs, and supported complex technical and safety processes. Her experience extends across the broader hyperbaric industry, with a particular focus on hyperbarics for tunneling and diving operations. This background has given her a deep understanding of regulatory requirements, operational logistics, and the specialized needs of industry and clinical partners.
        </p>

        <p className="text-base">
          At Shanfe, Natasha plays a key role in organizational coordination, project management, and client support. She is committed to maintaining high standards of efficiency, clear communication, and safety-focused practice, contributing to the seamless delivery of Shanfe’s consulting and training services.
        </p>
      </div>
    </div>
  );
}
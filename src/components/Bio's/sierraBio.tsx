import Image from "next/image";

export default function SierraBio() {
  return (
    <div
      id="sierra"
      className="text-Chocolate flex flex-row w-full bg-Eggshell items-center p-10 gap-10 rounded-3xl relative tablet:flex-col"
    >
      <Image
        className="rounded-3xl"
        src="/images/sierra-photo.png"
        width={350}
        height={350}
        alt="Sierra Laurent -  Brand and Marketing Director"
      />

      <div className="gap-5 flex flex-col max-w-3xl">
        <div className="gap-2">
          <h1 className="text-4xl font-bold">Sierra Laurent</h1>
          <h3 className="text-xl font-semibold">
            Brand and Marketing Director
          </h3>
        </div>

        <p className="text-base">
          Sierra Laurent is the Brand and Marketing Director at Shanfe, bringing a versatile background in graphic design, digital marketing, and web development. With expertise spanning UI/UX design, brand identity creation, and social media strategy, she has been instrumental in establishing Shanfe’s visual and digital presence from the ground up.
        </p>

        <p className="text-base">
          Prior to her role at Shanfe, Sierra gained extensive experience across multiple industries, including sports media, automotive design, and tech, where she led creative projects, developed marketing campaigns, and produced both print and digital assets. She has a proven track record of combining design and accessibility principles to create engaging, user-focused experiences, and she has contributed to projects ranging from mobile apps for accessibility to full brand identity packages for emerging businesses.
        </p>

        <p className="text-base">
          Sierra’s career is defined by collaboration, creative problem-solving, and a commitment to driving brand growth through innovative design and marketing strategies. She continues to explore new technologies and approaches in design and marketing, believing that adaptability and continuous learning are the keys to professional excellence and meaningful impact.
        </p>
      </div>
    </div>
  );
}
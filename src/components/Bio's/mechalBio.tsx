import Image from "next/image";

export default function MechalBio() {
  return (
    <div
      id="mechal"
      className="text-Chocolate flex flex-row w-full bg-Sky items-center p-10 gap-10 rounded-3xl relative tablet:flex-col"
    >
      <Image
        className="rounded-3xl"
        src="/images/female-avatar.jpg"
        width={350}
        height={350}
        alt="Mechal Lavender - Executive Administrator and Director of Training"
      />

      <div className="gap-5 flex flex-col max-w-3xl">
        <div className="gap-2">
          <h1 className="text-4xl font-bold">Mechal Lavender</h1>
          <h3 className="text-xl font-semibold">
            Executive Administrator and Director of Training
          </h3>
        </div>

        <p className="text-base">
          Mechal brings a strong background in education and administration, a degree in human services, and extensive experience in business management. As Director of Training at Shanfe, she has played a key role in the development of the company’s educational programs, leveraging her expertise in both education and business to create effective, engaging learning experiences.
        </p>

        <p className="text-base">
          She spent four years facilitating at Humber College in Ontario, where she supported students and professionals from diverse backgrounds in developing practical skills and achieving their career goals. This experience has fostered a deep commitment to creating inclusive, supportive learning environments that empower participants to succeed.
        </p>

        <p className="text-base">
          Throughout her career, Mechal has emphasized collaboration, thoughtful program development, and the continual refinement of educational and business processes. She is dedicated to lifelong learning, viewing ongoing personal and professional growth as the foundation for meaningful achievement.
        </p>
      </div>
    </div>
  );
}
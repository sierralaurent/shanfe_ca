import Image from "next/image";

export default function MechalBio() {
  return (
    <div
      id="mechal"
      className="text-Chocolate flex flex-row w-full bg-Sky items-center p-10 gap-10 rounded-3xl relative tablet:flex-col"
    >
      <Image
        className="rounded-3xl"
        src="/images/mechal-photo.png"
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
          Mechal Lavender possesses a strong background in education and administration, underpinned by a degree in human services, along with extensive experience in business management. In her capacity as Director of Training at Shanfe, she has been instrumental in the design and advancement of the company’s educational programs, expertly integrating her knowledge of both education and business to develop effective and engaging learning experiences.
        </p>

        <p className="text-base">
          Her continuous experience facilitating for a post-secondary institution in Ontario has enabled her to support a diverse range of students and professionals in cultivating practical skills and achieving their vocational objectives. This tenure has instilled a profound commitment to fostering inclusive and supportive learning environments that empower all participants to succeed.
          </p>
        <p className="text-base">
          Throughout her career, Mechal has consistently prioritized collaboration, meticulous program development, and the ongoing enhancement of educational and business processes. She is firmly dedicated to lifelong learning, regarding continuous personal and professional development as essential to meaningful accomplishment.
        </p>
      </div>
    </div>
  );
}
import Image from "next/image";

export default function RobBio() {
  return (
    <div
      id="rob"
      className="text-Chocolate rounded-3xl w-full flex flex-row tablet:flex-col items-start tablet:items-center p-8 gap-8 bg-Sky  max-w-full"
    >
      <Image
        className="rounded-3xl"
        src="/images/rob-photo.png"
        width={350}
        height={350}
        alt="Robert B. Sheffield - BA, CHT"
      />

      <div className="flex flex-col gap-5 ">
        <div className="gap-2">
          <h1 className="text-4xl font-bold">Robert B. Sheffield</h1>
          <h3 className="text-xl font-semibold">BA, CHT</h3>
        </div>

        <p className="text-base">
          Rob is Director of Education of International ATMO in San Antonio, Texas. He started his career in hyperbaric
medicine in 1985. He is an expert in wound center design and development, reimbursement, hyperbaric
and transcutaneous oximetry. He is a Certified Hyperbaric Technologist (CHT).
        </p>

        <p className="text-base">
          He is Past-President of the Undersea and Hyperbaric Medical Society (UHMS) Gulf Coast Chapter. He has served on the following committees:
        </p>
        <ul>
            <li>NFPA Technical Committee on Hyperbaric and Hypobaric Facilities (Chairman 2006-2014)</li>
            <li>UHMS Hyperbaric Oxygen Safety Committee (Chairman 2001-2010)</li>
            <li>UHMS Materials Testing Advisory Committee</li>
            <li>UHMS Practice Compliance Committee</li>
        </ul>

        <p className="text-base">
          He is co-author of the CHT/CHRN Certification Exam Practice Book. He authored committee commentary in four editions of the NFPA Health Care Facilities Handbook. He co-authored several articles on reimbursement and hyperbaric safety.
        </p>
      </div>
    </div>
  );
}
import Image from "next/image";

export default function TaliaBio() {
  return (
    <div
      id="talia"
      className="text-Chocolate flex flex-row w-full bg-Eggshell items-center p-10 gap-10 rounded-3xl relative tablet:flex-col"
    >
      <Image
        className="rounded-3xl"
        src="/images/talia-photo.png"
        width={350}
        height={350}
        alt="Sierra Laurent -  Brand and Marketing Director"
      />

      <div className="gap-5 flex flex-col max-w-3xl">
        <div className="gap-2">
          <h1 className="text-4xl font-bold">Talia Khazei</h1>
          <h3 className="text-xl font-semibold">
            Research Assistant
          </h3>
        </div>

        <p className="text-base">
         Talia Khazei is a Research Assistant at Shanfe, where she supports projects through data entry, organization, and analysis. Her experience working as a medical office assistant has equipped her with sharp attention to detail and efficiency.
        </p>
        <p className="text-base">
          A current student at The University of Toronto, Talia will be completing a bachelor’s in Women and Gender Studies in 2026, and aims to pursue a career in medicine. She is passionate about equity, health, and integrated practice, and aims to bridge research, advocacy, and clinical care in her future career.
        </p>
      </div>
    </div>
  );
}
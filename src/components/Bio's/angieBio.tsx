import Image from "next/image";

export default function AngieBio() {
  return (
    <div
      id="angela"
      className="text-Chocolate flex flex-row w-full bg-Sky items-center p-10 gap-10 rounded-3xl relative tablet:flex-col"
    >
      <Image
        className="rounded-3xl"
        src="/images/female-avatar.jpg"
        width={350}
        height={350}
        alt="Angela Wilton -  Certified Hyperbaric Technician (CHT)"
      />

      <div className="gap-5 flex flex-col max-w-3xl">
        <div className="gap-2">
          <h1 className="text-4xl font-bold">Angela Wilton</h1>
          <h3 className="text-xl font-semibold">
            Certified Hyperbaric Technician (CHT)
          </h3>
        </div>

        <p className="text-base">
          Angela Wilton is a Certified Hyperbaric Technician (CHT), with 5 years of extensive hands-on experience with monoplace systems supporting the safe operation, maintenance and program development of hyperbaric systems in clinical environments. 
        </p>
        <p className="text-base">
          Angela’s hyperbaric expertise includes daily chamber operations, patient preparation and monitoring, emergency protocols, preventative maintenance, and environmental/safety compliance.
        </p>
        <p className="text-base">
          She has pursued her education at Simon Fraser University, is Board certified through the NBDHMT and acquired her EMT/NREMT through Inter Mountain Medical Educators Inc. in Montana. 
        </p>
         <p className="text-base">
          Known for her calm presence, attention to detail, and patient first communication style, she supports clients in creating efficient, compliant and high quality hyperbaric services.
        </p>
        <p className="text-base">
          She is committed to advancing hyperbaric safety, adherence to industry standards, and delivering turnkey solutions that allow clinics to operate confidently from day one.
        </p>
      </div>
    </div>
  );
}
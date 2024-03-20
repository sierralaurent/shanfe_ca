import Image from "next/image";
import Head from 'next/head'
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import Button from "@/components/button";
import Card from "@/components/option01";


export default function Home() {
  return (
    <>
    <Head>
        <title>SHANFE | Services</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={'sticky top-0 z-50'}>
        <NavBar />
      </div>
    <div className='flex flex-col items-center'>
      <Image
        className='w-full relative'
        src='/images/Shanfe_Hero.png'
        width={2000}
        height={2000}
        alt=''
        />
    <main className={`flex flex-col items-center gap-20 p-10 max-w-7xl mobile:p-8 bg-Eggshell`}>
      <Image
      src='/LogoMark300ppi.png'
      width={200}
      height={200}
      alt=''
      />
      <div className={'max-w-7xl flex flex-row mobile:flex-col items-center gap-10'}>
        <div className='max-w-2xl'>
          <h1 className="text-5xl font-bold">What can we do with over 15 years experience?</h1>
          </div>
        <div className="max-w-2xl">
          <p className='text-lg'>Shanfe is your premier partner for comprehensive hyper/hypobaric safety solutions. Specializing in audits, training, and consultancy services, ensuring compliance with national and international standards while prioritizing safety and efficiency. With a commitment to excellence, Shanfe delivers tailored solutions that mitigate risks, optimize operations, and foster a culture of safety within your organization. </p>
          </div>
      </div>


      <div className='w-full flex flex-col items-start'>
      <Card />
      </div>
        <h1 className=" w-full flex flex-col items-start text-5xl font-bold">And More</h1>

        <div className="w-full flex flex-row justify-between">
          <div className="w-80 flex flex-col gap-5 items-center">
            <Image
              src='/Icons/Writing Icon.png'
              width={100}
              height={100}
              alt=''
              />
              <h1 className="font-bold text-xl text-center">Scientific Writing & Peer Review Submission </h1>
          </div>
          <div className="w-80 flex flex-col gap-5 items-center">
          <Image
              src='/Icons/Diving Icon.png'
              width={80}
              height={80}
              alt=''
              />
              <h1 className="font-bold text-xl text-center">Diving and Aerospace Physiology and Performance Consulting</h1>
          </div>
          <div className="w-80 flex flex-col gap-5 items-center">
          <Image
                src='/Icons/Research-Icon.png'
                width={100}
                height={100}
                alt=''
                />
              <h1 className="font-bold text-xl text-center">Research Design including ethics approval application, grant submissions, project management</h1>
          </div>
        </div>
      <Footer />
    </main>
    </div>
    </>
  );
}

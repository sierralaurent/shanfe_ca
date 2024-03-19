import Image from "next/image";
import Head from 'next/head'
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import Button from "@/components/button";

export default function About() {
  return (
    <>
    <Head>
        <title>SHANFE | About</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={'sticky top-0 z-50'}>
        <NavBar />
      </div>
      <Image
        className='w-full relative'
        src='/images/SherriFerguson_Hero.png'
        width={2000}
        height={2000}
        alt=''
        />
      <main className={`flex flex-col items-center p-24 mobile:p-8 bg-white`}>
        <h1 className={`text-xl`}>About Sherri</h1>
        <Button backgroundColor='Sky'>Read More</Button>
        <Footer />
      </main>
    </>
  );
}

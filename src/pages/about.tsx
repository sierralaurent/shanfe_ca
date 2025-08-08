import Image from "next/image";
import Head from 'next/head'
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import Button from "@/components/button";
import ScrollToTopButton from "@/components/scrollToTop";
import Script from "next/script";
import Card01 from "@/components/card01";
import Link from 'next/link';

export default function About() {
  return (
    <>
    <Head>
        <title>SHANFE | About</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn about Sherri Ferguson’s 30+ years of experience in aerospace and diving research, hyperbaric medicine, and safety leadership." />
        <meta name="keywords" content="hyperbaric, hyperbaric medicine, diving research, aerospace safety, hypobaric, SHANFE" />
      </Head>
      <>
  {/* Google Tag Manager Script */}
  <Script
    strategy="afterInteractive"
    src="https://www.googletagmanager.com/gtag/js?id=G-R38974EDZ7"
  />
  <Script id="gtag-init" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-R38974EDZ7');
    `}
  </Script>
</>
      <div className={'sticky top-0 z-50'}>
        <NavBar />
      </div>
      <Image
        className='tablet:hidden w-full relative'
        src='/images/SherriFerguson_Hero.png'
        width={2000}
        height={2000}
        alt='Your trusted partner in hyper/hypobaric safety, training, and research'
        />
        <Image
        className='desktop:hidden relative w-full relative'
        src='/images/SherriFerguson_Hero_Phone.png'
        width={2000}
        height={2000}
        alt='Your trusted partner in hyper/hypobaric safety, training, and research'
        />
      <main className={`flex flex-col items-center p-24 mobile:p-8 bg-white`}>
        <div className='flex flex-col max-w-7xl w-full gap-16 pb-24'>
          <div className='flex flex-col items-center'>
            <h1 className="text-4xl font-bold">To Summarize Sherri's 30+ Years of Experience…</h1>
            </div>
          <div className={'max-w-7xl flex flex-row items-start mobile:flex-col gap-20 mobile:gap-5'}>
            <div className='max-w-xl'>
              <p className='text-lg'>An esteemed professional with a rich background in aerospace and diving research, hyper/hypobaric and diving safety. With a passion for exploration and a dedication to advancing knowledge in her field, Sherri has made significant contributions to academia, research, and community service.</p>
              </div>
              <div className='max-w-xl items-end'>
              <p className='text-lg'>Sherri's career spans over three decades, during which she has held various leadership roles and conducted research in aerospace and diving physiology along with expertise in hyper/hypobaric and diving safety. Her expertise and commitment to excellence have earned her recognition and accolades from esteemed organizations in her field.</p>
              </div>
          </div>
          <div className='w-full flex flex-row items-center gap-20 tablet:flex-col tablet:gap-10'>
            <Image
              className='rounded-3xl'
              src='/images/sherri01.png'
              width={400}
              height={400}
              alt=''
              />
              <p className='text-3xl font-bold'>Sherri is driven by a mission to enhance safety and understanding in high-pressure environments, striving to improve the health and well-being of individuals working in challenging conditions.</p>
          </div>
          <Card01/>
          <div className='flex flex-col w-full gap-10 rounded-3xl p-10 '>
            <h1 className='text-4xl font-bold'>Education</h1>
              <div className='flex flex-row items-center gap-10 mobile:flex-col'>
                <Image
                    className='rounded-3xl'
                    src='/images/photo08.png'
                    width={200}
                    height={100}
                    alt=''
                    />
                <p className='text-lg'>Sherri holds a Master of Science in Biomedical Physiology. She is currently the
                    President of Shanfe Research and Consulting Ltd. a company she started in 2022. She
                    was the Director of the Environmental Medicine and Physiology Unit at Simon Fraser
                    University where over saw hyperbaric and hypobaric operations for 18 years. Previous
                    positions include Diving Safety Officer for the University of British Columbia and the
                    University of Victoria.</p>
                </div>
          </div>
          <div className='flex flex-col w-full gap-10 bg-Sky rounded-3xl p-10 '>
            <h1 className='text-4xl font-bold'>Research and Publications</h1>
              <div className='flex flex-row items-center gap-10 mobile:flex-col'>
                <Image
                    className='rounded-3xl'
                    src='/images/photo09.png'
                    width={200}
                    height={100}
                    alt=''
                    />
                    <div className="flex flex-col gap-5 mobile:items-center">
                <p className='text-lg'>Sherri's research has been published in esteemed journals and presented at conferences globally. Her work focuses on the effects of hypoxia and hyperbaric conditions on cognitive function and cardio-respiratory responses, contributing to advancements in hyperbaric medicine and occupational health. She is a current research scholar with the Divers Alert Network for their fatality and injury monitoring program and author of the annual report on technical diving fatalities.</p>
                     <Link href="https://dan.org/" legacyBehavior passHref>
                      <a target="_blank" rel="noopener noreferrer">
                        <Button backgroundColor="Eggshell">See Divers Alert Network (DAN)</Button>
                      </a>
                    </Link>
                    </div>                
                </div>
          </div>
          <div className='flex flex-col w-full gap-10 rounded-3xl p-10 '>
            <h1 className='text-4xl font-bold'>Awards and Recognitions</h1>
              <div className='flex flex-row items-center gap-10 mobile:flex-col'>
                <Image
                    className='rounded-3xl'
                    src='/images/photo10.png'
                    width={200}
                    height={100}
                    alt=''
                    />
                <p className='text-lg'>Sherri has received numerous awards and distinctions for her contributions to her field, including the James H. Wilson Award from the Canadian Undersea & Hyperbaric Medical Association, the Paul C. Baker award from the Undersea and Hyperbaric Medical Society and the Platinum Pro 5000 Award from Scuba Schools International.</p>
                </div>
          </div>
          <div className='flex flex-col w-full gap-10 bg-Eggshell rounded-3xl p-10 '>
            <h1 className='text-4xl font-bold'>Community Service and Leadership</h1>
              <div className='flex flex-row items-center gap-10 mobile:flex-col'>
                <Image
                    className='rounded-3xl'
                    src='/images/photo13.png'
                    width={200}
                    height={100}
                    alt=''
                    />
                <p className='text-lg'>Sherri is the current Chair of the Canadian Standard for work in compressed air environments (CSA Z275.1) and is the Vice-Chair of the CSA Technical Committee for Diving and Hyperbaric Operations. She is past-president of the Canadian Association for Underwater Science and serves and a safety and standards advisor to their executive board. She is a member of the Training Advisory Council for International Training and a member of the safety committee for the Undersea and Hyperbaric Medical Society.</p>
                </div>
          </div>
          <div className='flex items-center w-full flex-col'>
          <Link href="/Sherri Ferguson cv 2025.01.pdf" legacyBehavior passHref>
            <a target="_blank" rel="noopener noreferrer" download>
              <Button backgroundColor="Sky">Download C.V. Document</Button>
            </a>
          </Link>
          </div>
        </div>
        <ScrollToTopButton />
        <Footer />
      </main>
    </>
  );
}

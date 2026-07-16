"use client";

import Image from "next/image";
import Head from "next/head";
import NavBar from "@/components/navbar";
import NavBarAerospace from "@/components/aerospace/navbaraerospace";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scrollToTop";
import Script from "next/script";
import Link from "next/link";

import SherriBio from "@/components/Bio's/sherriBio";
import FrancoisBio from "@/components/Bio's/francoisBio";
import AaronBio from "@/components/Bio's/aaronBio";
import MechalBio from "@/components/Bio's/mechalBio";
import NatashaBio from "@/components/Bio's/natashaBio";
import SierraBio from "@/components/Bio's/sierraBio";
import TaliaBio from "@/components/Bio's/taliaBio";
import RobBio from "@/components/Bio's/robBio";
import BobBio from "@/components/Bio's/bobBio";

// ✅ Reusable staff card component
function StaffCard({
  name,
  title,
  image,
  targetId,
}: {
  name: string;
  title: string;
  image: string;
  targetId: string;
}) {
  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-6 w-64 tablet:w-56 mobile:w-40">
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className="rounded-3xl mb-4 w-full h-auto"
      />
      <h2 className="text-2xl font-bold text-center tablet:text-xl mobile:text-lg">{name}</h2>
      <p className="text-lg text-gray-600 mb-4 text-center tablet:text-base mobile:text-sm">{title}</p>
      <Link href={`#${targetId}`}>
        <button className="px-4 py-2 bg-Chocolate text-white rounded-lg hover:bg-Chocolate/80 transition text-sm tablet:text-xs">
          Read More
        </button>
      </Link>
    </div>
  );
}

export default function AerospaceAboutUs() {
  return (
    <>
      <Head>
        <title>
          SHANFE | Meet the Shanfe Team – Hypobaric Experts
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Meet the Shanfe team of hyperbaric and hypobaric medicine experts, diving safety specialists, and aerospace medical consultants."
        />
        <meta
          name="keywords"
          content="Shanfe team, Shanfe staff, hyperbaric medicine experts, hypobaric research specialists, diving medicine professionals, hyperbaric trainers, aerospace medical consultants, hyperbaric chamber instructors, clinical hyperbaric educators, diving safety specialists, hyperbaric training staff"
        />
      </Head>

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

      <div className="sticky top-0 z-50">
        <NavBarAerospace />
      </div>
    <Image
            className='w-full relative tablet:hidden'
            src='/images/aerospace/aerospace-team-hero.png'
            width={2000}
            height={2000}
            alt='Hyperbaric & Hypobaric Consultancy Services - Safety is at the core of everything SHANFE offers.
    We promote safety in hyperbaric & hypobaric environments, diving, aerospace and hyperbaric oxygen therapy through education, audits, research and consulting.'
            />
            <Image
            className='desktop:hidden w-full relative'
            src='/images/aerospace/aerospace-team-hero-mobile.png'
            width={2000}
            height={2000}
            alt='Hyperbaric & Hypobaric Consultancy Services - Safety is at the core of everything SHANFE offers.
    We promote safety in hyperbaric & hypobaric environments, diving, aerospace and hyperbaric oxygen therapy through education, audits, research and consulting.'
            />

      <main className="flex flex-col items-center p-24 pt-18 mobile:p-8 bg-white scroll-smooth">

          <div className="flex flex-col items-center gap-8 max-w-7xl">
            <h1 className='text-4xl font-bold'>Meet the Experts Behind Safer Aerospace Operations</h1>
            <h1 className="text-2xl text-center">
              Our team brings together decades of experience in aerospace, hypobaric medicine, compliance, 
              research, and technical education. Together, we're committed to advancing safety through 
              practical expertise, innovative solutions, and industry-leading training.
            </h1>

        </div>

        <div className="flex flex-col items-center gap-10 p-10 max-w-7xl w-full">
            {/* Header */}
            <div className="flex flex-col gap-5 p-5">
              <h1 className="text-6xl font-bold">Staff</h1>
              <p className="text-lg">
                Behind every successful course and certification is our committed
                administrative team. From enrollment to certification support,
                they’re here to ensure a seamless experience for all students and
                clients.
              </p>
            </div>

            {/* Staff Cards */}
            <div className="flex flex-row flex-wrap justify-between mobile:flex-col mobile:items-center gap-5 justify-start w-full">
              <div className="">
                <StaffCard
                  name="Sherri Ferguson"
                  title="Director of Operations"
                  image="/images/sherri-ferguson.png"
                  targetId="sherri"
                />
              </div>
              <div className="">
                <StaffCard
                  name="Mechal Lavender"
                  title="Director of Education"
                  image="/images/mechal-photo.png"
                  targetId="mechal"
                />
              </div>
              <div className="">
                <StaffCard
                  name="Sierra Laurent"
                  title="Brand and Marketing Director"
                  image="/images/sierra-photo.png"
                  targetId="sierra"
                />
              </div>
            </div>
            <div className="flex flex-row flex-wrap mobile:flex-col mobile:items-center gap-20 justify-start w-full">
                <div className="">
                <StaffCard
                  name="Natasha Vleck"
                  title="Executive Assistant "
                  image="/images/natasha-photo.png"
                  targetId="natasha"
                />
              </div>
              <div className="">
                <StaffCard
                  name="Talia Khazei"
                  title="Research Assistant "
                  image="/images/talia-photo.png"
                  targetId="talia"
                />
              </div>
              </div>
          </div>

        <div className="flex flex-col items-center gap-10 p-10 max-w-7xl w-full">
            {/* Header */}
            <div className="flex flex-col gap-5 p-5">
              <h1 className="text-6xl font-bold">Faculty</h1>
              <p className="text-lg">
                 Our instructors are leaders in their fields — from hyperbaric
              medicine and chamber operations to emergency preparedness and dive
              safety. Each brings unique experience and a passion for teaching
              to every course we offer.
              </p>
            </div>

            {/* Staff Cards */}
            <div className="flex flex-row flex-wrap gap-5 justify-between mobile:flex-col mobile:items-center w-full">
              <div className="">
                <StaffCard
                  name="François Burman"
                  title="Course Instructor"
                  image="/images/francois-photo.png"
                  targetId="francois"
                />
              </div>
              <div className="">
                  <StaffCard
                    name="Aaron Griffin"
                    title="Course Instructor"
                    image="/images/aaron-griffin.png"
                    targetId="aaron"
                  />
              </div>
              <div className="">
                  <StaffCard
                    name="Robert Sheffield"
                    title="Course Instructor"
                    image="/images/rob-photo.png"
                    targetId="rob"
                  />
              </div>
              <div className="">
                  <StaffCard
                    name="Bob Abrams"
                    title="Course Instructor"
                    image="/images/bob-photo2.png"
                    targetId="bob"
                  />
              </div>
            </div>
          </div>


<div className="flex flex-col items-center gap-10 pt-10 pb-10 max-w-7xl">
          <SherriBio/>
          <MechalBio/>
          <SierraBio/>
          <NatashaBio/>
          <TaliaBio/>
          <AaronBio />
          <RobBio/>
          <FrancoisBio />
          <BobBio/>
          
          </div>
        <ScrollToTopButton />
        <Footer />
      </main>
    </>
  );
}
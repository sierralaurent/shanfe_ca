"use client";

import Image from "next/image";
import Head from "next/head";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scrollToTop";
import Script from "next/script";
import Link from "next/link";

import SherriBio from "@/components/Bio's/sherriBio";
import FrancoisBio from "@/components/Bio's/francoisBio";
import AaronBio from "@/components/Bio's/aaronBio";
import MechalBio from "@/components/Bio's/mechalBio";
import SierraBio from "@/components/Bio's/sierraBio";

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

export default function About() {
  return (
    <>
      <Head>
        <title>
          SHANFE | Meet the Shanfe Team – Hyperbaric & Hypobaric Experts
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
        <NavBar />
      </div>

      <main className="flex flex-col items-center p-24 mobile:p-8 bg-white scroll-smooth">

          <div className="flex flex-col p-10 gap-8 max-w-7xl">
            <h1 className="text-6xl flex font-bold text-center">
              Meet the SHANFE Team – Hyperbaric & Hypobaric Experts
            </h1>
            <h3 className="text-xl pb-10 text-center">
              At SHANFE, our team is made up of experienced professionals
              dedicated to advancing education in hyperbaric medicine, dive
              safety, and emergency response. Together, we deliver practical,
              real-world training backed by the latest in industry best
              practices.
            </h3>

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
            <div className="flex flex-row flex-wrap gap-5 justify-start w-full">
              <div className="w-[calc(33.333%-1.25rem)] tablet:w-[calc(50%-1.25rem)] mobile:w-[calc(50%-1.25rem)]">
                <StaffCard
                  name="Sherri Ferguson"
                  title="Director of Operations"
                  image="/images/sherri-ferguson.png"
                  targetId="sherri"
                />
              </div>
              <div className="w-[calc(33.333%-1.25rem)] tablet:w-[calc(50%-1.25rem)] mobile:w-[calc(50%-1.25rem)]">
                <StaffCard
                  name="Mechal Lavender"
                  title="Executive Administrator and Director of Training"
                  image="/images/female-avatar.jpg"
                  targetId="mechal"
                />
              </div>
              <div className="w-[calc(33.333%-1.25rem)] tablet:w-[calc(50%-1.25rem)] mobile:w-[calc(50%-1.25rem)]">
                <StaffCard
                  name="Sierra Laurent"
                  title="Brand and Marketing Director"
                  image="/images/female-avatar.jpg"
                  targetId="sierra"
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
            <div className="flex flex-row flex-wrap gap-5 mobile:p-0 justify-start w-full">
              <div className="w-[calc(33.333%-1.25rem)] tablet:w-[calc(50%-1.25rem)] mobile:w-[calc(50%-1.25rem)]">
                <StaffCard
                  name="François"
                  title="Course Instructor"
                  image="/images/francois-photo.png"
                  targetId="francois"
                />
              </div>
              <div className="w-[calc(33.333%-1.25rem)] tablet:w-[calc(50%-1.25rem)] mobile:w-[calc(50%-1.25rem)]">
                  <StaffCard
                    name="Aaron"
                    title="Course Instructor"
                    image="/images/aaron-griffin.png"
                    targetId="aaron"
                  />
              </div>
            </div>
          </div>


<div className="flex flex-col items-center gap-10 pt-10 pb-10 max-w-7xl">
          <SherriBio />
          <MechalBio/>
          <SierraBio/>
          <FrancoisBio />
          <AaronBio />
          </div>
        <ScrollToTopButton />
        <Footer />
      </main>
    </>
  );
}
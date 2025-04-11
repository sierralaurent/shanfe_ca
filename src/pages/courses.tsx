import Image from "next/image";
import Head from 'next/head';
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import Button from "@/components/button";
import ScrollToTopButton from "@/components/scrollToTop";

type Course = {
  title: string;
  dates: string;
  format: string;
  tuition: string;
};

const courses: Course[] = [
  {
    title: 'Chamber Core Competency',
    dates: 'May 11–17',
    format: 'In Person – St. John’s',
    tuition: '$3,000',
  },
  {
    title: 'Clinical Hyperbaric Medicine',
    dates: 'Monthly',
    format: 'Online (5 days)',
    tuition: '$975',
  },
  {
    title: 'HCO – Diving Operations Support',
    dates: 'On Demand',
    format: 'Online / In Person (5 days)',
    tuition: '$5,000',
  },
  {
    title: 'HCO – Tunnel Operations Support',
    dates: 'On Demand',
    format: 'Online (3 days)',
    tuition: '$2,000',
  },
  {
    title: 'Hyperbaric Safety Specialist',
    dates: 'August 23–25',
    format: 'In Person – Thunder Bay',
    tuition: '$1,500',
  },
  {
    title: 'Acrylics Technician',
    dates: 'August 26',
    format: 'In Person – Thunder Bay',
    tuition: '$500',
  },
  {
    title: 'SOS Hyperlite Evacuation Chamber',
    dates: 'TBD',
    format: 'In Person (2 days)',
    tuition: '$1,800',
  },
];

export default function Courses() {
  return (
    <>
      <Head>
        <title>SHANFE | Courses</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={'sticky top-0 z-50'}>
        <NavBar />
      </div>

      <main className="flex flex-col items-center p-24 pb-20 pt-20 mobile:p-8 bg-white w-full">
        <div className="max-w-5xl w-full">
          <h1 className="text-4xl font-bold mb-6 text-center">Hyperbaric Operations Training</h1>
          <p className="mb-4">
            Welcome to Shanfe Research and Consulting Ltd.'s professional training programs for individuals
            seeking careers in hyperbaric operations. Our comprehensive courses prepare participants for
            a wide range of roles including:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>Clinical hyperbaric medicine</li>
            <li>Diving operations</li>
            <li>Tunneling and construction support</li>
            <li>Search and rescue with portable chambers</li>
            <li>Research and technical operations</li>
          </ul>
          <p className="mb-6">
            All certification pathways begin with the <strong>Chamber Core Competency</strong> course. From there,
            students can pursue specialty certifications. All programs are eligible for certification by the
            <strong> Divers Certification Board of Canada (DCBC)</strong>, in accordance with <em>CSA Z275.4 standards</em>.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">2025 Course Offerings</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full table-auto border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 border">Course</th>
                  <th className="px-4 py-2 border">Dates</th>
                  <th className="px-4 py-2 border">Format</th>
                  <th className="px-4 py-2 border">Tuition</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 border">{course.title}</td>
                    <td className="px-4 py-2 border">{course.dates}</td>
                    <td className="px-4 py-2 border">{course.format}</td>
                    <td className="px-4 py-2 border">{course.tuition}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mb-2">Additional Information</h3>
          <ul className="list-disc list-inside mb-6">
            <li>Tuition fees do not include travel, textbooks, or chamber operator logbook.</li>
            <li>Hybrid and online courses are designed for flexibility and accessibility.</li>
            <li>Upon successful completion, Shanfe provides job placement support through industry connections and referrals.</li>
          </ul>

          <p className="mb-4">
            Ready to start your journey into hyperbaric operations? Contact us today to:
          </p>
          <ul className="list-disc list-inside mb-8">
            <li>Request a detailed syllabus</li>
            <li>Register for a course</li>
            <li>Speak with an advisor</li>
          </ul>

          <div className="text-center">
            
          </div>
        </div>

        <ScrollToTopButton />
        <Footer />
      </main>
    </>
  );
}

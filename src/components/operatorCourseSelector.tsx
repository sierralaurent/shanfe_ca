"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

interface Course {
  title: string;
  href: string;
}

const operatorData: Record<string, Course[]> = {
  "Clinical Chamber Operator (Unrestricted)": [
    { title: "100 Introduction to Hyperbaric Medicine", href: "/introhyperbaricmedicine" },
    { title: "110 Core Competencies of Hyperbaric Operations", href: "/hyperbariccorecompetency" },
    { title: "120 Multiplace Chamber Operator", href: "/multiplaceoperations" },
    { title: "130 Monoplace Chamber Operator", href: "/hyperbaricmedicine" },
  ],
  "Clinical Chamber Operator (Restricted Monoplace)": [
    { title: "100 Introduction to Hyperbaric Medicine", href: "/introhyperbaricmedicine" },
    { title: "110 Core Competencies of Hyperbaric Operations", href: "/hyperbariccorecompetency" },
    { title: "130 Monoplace Chamber Operator", href: "/hyperbaricmedicine" },
  ],
  "Clinical Chamber Operator (Restricted Multiplace)": [
    { title: "100 Introduction to Hyperbaric Medicine", href: "/introhyperbaricmedicine" },
    { title: "110 Core Competencies of Hyperbaric Operations", href: "/hyperbariccorecompetency" },
    { title: "120 Multiplace Chamber Operator", href: "/multiplaceoperations" },
  ],
  "Chamber Operator – Tunnelling Operations": [
    { title: "110 Core Competencies of Hyperbaric Operations", href: "/hyperbariccorecompetency" },
    { title: "120 Multiplace Chamber Operator", href: "/multiplaceoperations" },
    { title: "140 Tunnelling Operations", href: "/tunneloperations" },
  ],
  "Chamber Operator – Diving Operations": [
    { title: "110 Core Competencies of Hyperbaric Operations", href: "/hyperbariccorecompetency" },
    { title: "120 Multiplace Chamber Operator", href: "/multiplaceoperations" },
    { title: "150 Diving Ops", href: "/courses/150-diving-ops" },
  ],
  "Chamber Operator – SOS Hyperlite": [
    { title: "110 Core Competencies of Hyperbaric Operations", href: "/hyperbariccorecompetency" },
    { title: "160 SOS Hyperlite", href: "/soshyperlitechamberoperations" },
  ],
  "Compressed Air Worker – Tunnelling Operations": [
    { title: "140 Tunnelling Operations", href: "/tunneloperations" },
    { title: "170 Compressed Air Worker", href: "/" },
  ],
  "Inside Attendant – Clinical Operations": [
    { title: "100 Introduction to Hyperbaric Medicine", href: "/introhyperbaricmedicine" },
    { title: "170 Compressed Air Worker", href: "/" },
  ],
};

const operatorImages: Record<string, string> = {
  "Clinical Chamber Operator (Unrestricted)": '/images/photo19.png',
  "Clinical Chamber Operator (Restricted Monoplace)": '/images/photo28.jpg',
  "Clinical Chamber Operator (Restricted Multiplace)": '/images/photo22.png',
  "Chamber Operator – Tunnelling Operations": '/images/photo15.png',
  "Chamber Operator – Diving Operations": '/images/photo20.png',
  "Chamber Operator – SOS Hyperlite": '/images/photo18.png',
  "Compressed Air Worker – Tunnelling Operations": '/images/photo27.png',
  "Inside Attendant – Clinical Operations": '/images/photo17.png',
};

export default function OperatorCourseSelector() {
  const [selected, setSelected] = useState("");
  const currentImage = selected ? operatorImages[selected] : '/images/photo26.png';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto bg-white shadow-2xl p-6 rounded-lg border border-Sky border-t-4 flex flex-row mobile:flex-col items-center md:flex-row md:flex-row items-start"
    >
      <div className="flex-shrink-0 mr-6 mb-6 md:mb-0">
        <Image
          className="rounded-3xl shadow-md"
          src={currentImage}
          width={300}
          height={200}
          alt={selected || 'Operator'}
        />
      </div>

      <div className="flex-1">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Certification Requirements
        </h2>
        <p className="text-gray-600 mb-6">
          Select an operator type to view the required training courses.
        </p>

        <div className="relative text-gray-900 mb-6">
          <select
            className="w-full cursor-pointer border border-gray-300 bg-white rounded-lg px-4 py-3 text-lg font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-700"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="">Select Operator Type…</option>
            {Object.keys(operatorData).map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {selected && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-blue-50 border-l-4 border-Sky p-5 rounded-lg shadow-inner"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Required Courses:</h3>
            <ul className="list-disc space-y-2 pl-5 text-gray-800">
              {operatorData[selected].map((course) => (
                <li key={course.title}>
                  <Link
                    href={course.href}
                    className="text-blue-700 hover:underline hover:text-blue-900 transition"
                  >
                    {course.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

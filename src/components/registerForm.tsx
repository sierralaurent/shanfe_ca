"use client";

import { useState } from "react";
import Button from "@/components/button";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    homeAddress: "",
    mailingAddress: "",
    courses: [] as string[],
  });

  const [submitted, setSubmitted] = useState(false);

  const courses = [
    "#100 Introduction to Hyperbaric Medicine",
    "#110 Hyperbaric Core Competencies (Feb 10-12,)",
    "#110 Hyperbaric Core Competencies (Mar 1-3)",
    "#120 Multiplace Chamber Operator (Mar 26-29)",
    "#130 Monoplace Chamber Operator (Feb 8-9)",
    "#140 Tunnelling Chamber Operations",
    "#150 Diving Chamber Operations",
    "#160 SOS Hyperlite Chamber Operations",
    "#170 Compressed Air Worker",
    "#180 Hyperbaric Safety (Feb 13-14)",
    "#190 Inspection and Maintenance of Acrylics (Feb 15)"

  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        courses: checked
          ? [...prev.courses, value]
          : prev.courses.filter((c) => c !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
        alert("Form submitted! We will contact you for the next steps.");
      } else {
        console.error("Form submission failed:", data);
        alert("Failed to submit form: " + data.message);
      }
    } catch (err) {
      console.error("Unexpected error submitting form:", err);
      alert("Something went wrong while submitting the form.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl flex flex-col items-center mx-auto p-6 space-y-6 border border-gray-300 shadow-md rounded-lg bg-white">
      <h2 className="text-2xl font-bold">Registration Form</h2>

      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        name="homeAddress"
        placeholder="Home Address"
        value={formData.homeAddress}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        name="mailingAddress"
        placeholder="Mailing Address (if different)"
        value={formData.mailingAddress}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <fieldset className="border p-4 w-full rounded">
        <legend className="font-semibold">Select Courses</legend>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {courses.map((course) => (
            <label key={course} className="flex items-center gap-2">
              <input
                type="checkbox"
                name="courses"
                value={course}
                checked={formData.courses.includes(course)}
                onChange={handleChange}
              />
              {course}
            </label>
          ))}
        </div>
      </fieldset>

      <Button backgroundColor="Eggshell" disabled={submitted}>
        {submitted ? "Submitted" : "Submit Registration"}
      </Button>
      <div className="flex flex-col items-center gap-2 p-6">
      <p className="text-2xl font-bold">
              To request a detailed syllabus:
            </p>
            <p className="text-lg">
              Email: <a href="mailto:mechal@shanfe.ca" className="text-blue-600 underline hover:text-blue-800">mechal@shanfe.ca</a>
            </p>
            <p className="text-lg">
              Phone: <a href="tel:+16048027069" className="text-blue-600 underline hover:text-blue-800">+1-604-802-7069</a>
            </p>
        </div>
    </form>
  );
};

export default RegisterForm;
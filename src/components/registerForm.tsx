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

  const courses = [
    "Chamber Core Competency",
    "Chamber Operator Refresher",
    "HCO- Clinical Hyperbaric Medicine",
    "HCO- Diving Operations Support",
    "HCO- Tunnel Operations Support",
    "HCO- SOS Hyperlite Evacuation Chamber",
    "Hyperbaric Safety Specialist",
    "Acrylics Technician",
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
        alert("Form submitted!");
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
    <form onSubmit={handleSubmit} className="max-w-xl flex flex-col items-center mx-auto p-4 space-y-6">
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

      <Button backgroundColor="Eggshell">Submit Registration</Button>
    </form>
  );
};

export default RegisterForm;
"use client";

import { useState } from "react";

// Course data
const courses = [
  { title: "HCO - Clinical Hyperbaric Medicine", start: "2025-06-17", end: "2025-06-21", type: "Live Stream" },
  { title: "HCO - Clinical Hyperbaric Medicine", start: "2025-07-08", end: "2025-07-12", type: "Live Stream" },
  { title: "HCO - Clinical Hyperbaric Medicine", start: "2025-08-12", end: "2025-08-16", type: "Live Stream" },
  { title: "HCO - Clinical Hyperbaric Medicine", start: "2025-09-09", end: "2025-09-13", type: "Live Stream" },
  { title: "HCO - Clinical Hyperbaric Medicine", start: "2025-10-21", end: "2025-10-25", type: "Live Stream" },
  { title: "HCO - Clinical Hyperbaric Medicine", start: "2025-11-11", end: "2025-11-15", type: "Live Stream" },
  { title: "HCO - Clinical Hyperbaric Medicine", start: "2025-12-09", end: "2025-12-13", type: "Live Stream" },
  { title: "Chamber Core Competencies", start: "2025-08-22", end: "2025-08-23", type: "Thunder Bay, Ontario, CA" },
  { title: "Hyperbaric Safety Specialist", start: "2025-08-23", end: "2025-08-25", type: "Thunder Bay, Ontario, CA" },
  { title: "Emergency Action Plan", start: "2025-08-26", end: "2025-08-26", type: "Thunder Bay, Ontario, CA" },
  { title: "Chamber Core Competencies", start: "2025-10-27", end: "2025-11-02", type: "St. John’s, NL, CA" },
  { title: "Chamber Core Competencies", start: "2025-11-17", end: "2025-11-23", type: "St. John’s, NL, CA" },
];

function areSameDay(d1: Date, d2: Date): boolean {
  return d1.toDateString() === d2.toDateString();
}

function getMonthName(monthIndex: number) {
  return new Date(0, monthIndex).toLocaleString("default", { month: "long" });
}

function getCalendarStart(date: Date): Date {
  const first = new Date(date.getFullYear(), date.getMonth(), 1);
  const start = new Date(first);
  start.setDate(first.getDate() - first.getDay()); // back to Sunday
  return start;
}

function getWeekRows(date: Date): Date[][] {
  const start = getCalendarStart(date);
  const rows: Date[][] = [];
  for (let w = 0; w < 6; w++) {
    const week: Date[] = [];
    for (let d = 0; d < 7; d++) {
      const day = new Date(start);
      day.setDate(start.getDate() + w * 7 + d);
      week.push(day);
    }
    rows.push(week);
  }
  return rows;
}

export default function CourseCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const weeks = getWeekRows(currentDate);

  const handlePrev = () => {
    const d = new Date(currentDate);
    d.setMonth(d.getMonth() - 1);
    setCurrentDate(d);
  };

  const handleNext = () => {
    const d = new Date(currentDate);
    d.setMonth(d.getMonth() + 1);
    setCurrentDate(d);
  };

  return (
    <div className="w-full mx-auto mt-10 p-4">
      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePrev} className="text-blue-500 hover:underline">Previous</button>
        <h2 className="text-xl font-bold">{getMonthName(month)} {year}</h2>
        <button onClick={handleNext} className="text-blue-500 hover:underline">Next</button>
      </div>

      <div className="flex text-center font-semibold mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="flex-1">{day}</div>
        ))}
      </div>

      {weeks.map((week, weekIdx) => {
        return (
          <div key={weekIdx} className="relative flex border-b min-h-[4rem]">
            {week.map((day, idx) => {
              const isCurrentMonth = day.getMonth() === month;
              return (
                <div key={idx} className={`flex-1 border-r p-1 text-sm ${!isCurrentMonth ? "bg-gray-100 text-gray-400" : ""}`}>
                  {day.getDate()}
                </div>
              );
            })}

            {/* Render courses overlapping this week */}
            {courses
              .filter(course => {
                const start = new Date(course.start);
                const end = new Date(course.end);
                const weekStart = week[0];
                const weekEnd = week[6];
                return end >= weekStart && start <= weekEnd;
              })
              .map((course, i) => {
                const start = new Date(course.start);
                const end = new Date(course.end);
                const weekStart = week[0];

                const firstDayInWeek = Math.max(0, Math.floor((Math.max(start.getTime(), weekStart.getTime()) - weekStart.getTime()) / (1000 * 60 * 60 * 24)));
                const lastDayInWeek = Math.min(6, Math.floor((Math.min(end.getTime(), week[6].getTime()) - weekStart.getTime()) / (1000 * 60 * 60 * 24)));

                const span = lastDayInWeek - firstDayInWeek + 1;
                const leftPercent = (firstDayInWeek / 7) * 100;
                const widthPercent = (span / 7) * 100;

                return (
                  <div
                    key={course.title + i}
                    className="absolute top-6 bg-blue-200 text-blue-900 text-xs font-semibold px-2 py-1 rounded shadow truncate"
                    style={{
                      left: `${leftPercent}%`,
                      width: `${widthPercent}%`,
                      zIndex: 10,
                    }}
                    title={`${course.title} (${course.type})`}
                  >
                    {course.title}
                    <div className="text-[10px]">{course.type}</div>
                  </div>
                );
              })}
          </div>
        );
      })}
    </div>
  );
}
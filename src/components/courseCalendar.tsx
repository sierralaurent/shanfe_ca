"use client";

import { useState } from "react";
import Link from "next/link";

// Course data
const courses = [
  { title: "#100 - Introduction to Hyperbaric Medicine", start: "2025-06-17", end: "2025-06-21", type: "Live Stream" },
  { title: "#100 - Introduction to Hyperbaric Medicine", start: "2025-07-08", end: "2025-07-12", type: "Live Stream" },
  { title: "#100 - Introduction to Hyperbaric Medicine", start: "2025-08-12", end: "2025-08-16", type: "Live Stream" },
  { title: "#100 - Introduction to Hyperbaric Medicine", start: "2025-09-09", end: "2025-09-13", type: "Live Stream" },
  { title: "#100 - Introduction to Hyperbaric Medicine", start: "2025-10-21", end: "2025-10-25", type: "Live Stream" },
  { title: "#100 - Introduction to Hyperbaric Medicine", start: "2025-11-11", end: "2025-11-15", type: "Live Stream" },
  { title: "#100 - Introduction to Hyperbaric Medicine", start: "2025-12-09", end: "2025-12-13", type: "Live Stream" },
  { title: "#100 - Introduction to Hyperbaric Medicine", start: "2026-01-13", end: "2026-01-17", type: "Live Stream" },
  { title: "#100 - Introduction to Hyperbaric Medicine", start: "2026-02-03", end: "2026-02-07", type: "Live Stream" },
  { title: "#100 - Introduction to Hyperbaric Medicine", start: "2026-03-10", end: "2026-03-14", type: "Live Stream" },
  { title: "#100 - Introduction to Hyperbaric Medicine", start: "2026-04-14", end: "2026-04-18", type: "Live Stream" },    
  { title: "#100 - Introduction to Hyperbaric Medicine", start: "2026-05-05", end: "2026-05-09", type: "Live Stream" },
  { title: "#100 - Introduction to Hyperbaric Medicine", start: "2026-06-09", end: "2026-06-13", type: "Live Stream" },
  { title: "#100 - Introduction to Hyperbaric Medicine", start: "2026-07-14", end: "2026-07-18", type: "Live Stream" },
  { title: "#100 - Introduction to Hyperbaric Medicine", start: "2026-08-11", end: "2026-08-15", type: "Live Stream" },
  { title: "#100 - Introduction to Hyperbaric Medicine", start: "2026-09-15", end: "2026-09-19", type: "Live Stream" },
  { title: "#100 - Introduction to Hyperbaric Medicine", start: "2026-10-06", end: "2026-10-10", type: "Live Stream" },
  { title: "#100 - Introduction to Hyperbaric Medicine", start: "2026-11-10", end: "2026-11-14", type: "Live Stream" },
  { title: "#100 - Introduction to Hyperbaric Medicine", start: "2026-12-08", end: "2026-12-12", type: "Live Stream" },
  { title: "#120 - Multiplace Chamber Operator", start: "2025-10-31", end: "2025-11-01", type: "St. John's, NL, CA" },
  { title: "#180 - Hyperbaric Safety", start: "2025-08-23", end: "2025-08-26", type: "Thunder Bay, Ontario, CA" },
  { title: "#110 - Hyperbaric Core Compentencies", start: "2026-02-11", end: "2026-02-13", type: "Calgary, AB, CA" },
  { title: "#110 - Hyperbaric Core Compentencies", start: "2026-03-01", end: "2026-03-04", type: "Tobermory, ON, CA" },
];

// Map course titles to URLs
const courseLinks: Record<string, string> = {
  "#100 - Introduction to Hyperbaric Medicine": "/introhyperbaricmedicine",
  "#110 - Hyperbaric Core Compentencies": "/hyperbariccorecompetency",
  "#120 - Multiplace Chamber Operator": "/multiplaceoperations",
  "#130 - Monoplace Chamber Operator": "/hyperbaricmedicine",
  "#140 - Tunnelling Chamber Operations Course": "/tunneloperations",
  "#160 - SOS Hyperlite Chamber Operations": "/soshyperlitechamberoperations",
  "#180 - Hyperbaric Safety": "/safetyspecialist",
  "#190 - Inspection and Maintenance of Acrylics": "/acrylicsinspectionandmaintenance",
};

function getMonthName(monthIndex: number) {
  return new Date(0, monthIndex).toLocaleString("default", { month: "long" });
}

function getCalendarStart(date: Date): Date {
  const first = new Date(date.getFullYear(), date.getMonth(), 1);
  const start = new Date(first);
  start.setDate(first.getDate() - first.getDay());
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

      {weeks.map((week, weekIdx) => (
        <div key={weekIdx} className="relative flex border-b min-h-[4rem]">
          {week.map((day, idx) => {
            const isCurrentMonth = day.getMonth() === month;
            return (
              <div
                key={idx}
                className={`flex-1 border-r p-1 text-sm ${!isCurrentMonth ? "bg-gray-100 text-gray-400" : ""}`}
              >
                {day.getDate()}
              </div>
            );
          })}

          {/* Render overlapping courses directly stacked (same top, z-index by duration) */}
          {(() => {
            const weekCourses = courses.filter(course => {
              const start = new Date(course.start);
              const end = new Date(course.end);
              return end >= week[0] && start <= week[6];
            });

            return weekCourses.map((course, i) => {
              const start = new Date(course.start);
              const end = new Date(course.end);
              const weekStart = week[0];

              const firstDayInWeek = Math.max(0, Math.floor((Math.max(start.getTime(), weekStart.getTime()) - weekStart.getTime()) / (1000 * 60 * 60 * 24)));
              const lastDayInWeek = Math.min(6, Math.floor((Math.min(end.getTime(), week[6].getTime()) - weekStart.getTime()) / (1000 * 60 * 60 * 24)));

              const span = lastDayInWeek - firstDayInWeek + 1;
              const leftPercent = (firstDayInWeek / 7) * 100;
              const widthPercent = (span / 7) * 100;

              // Shorter course = higher zIndex
              const duration = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
              const zIndex = 100 - duration; // Short = on top

              const commonStyle = {
                left: `${leftPercent}%`,
                width: `${widthPercent}%`,
                top: `1.25rem`, // Same top for all
                zIndex,
              };

              const href = courseLinks[course.title];
              const content = (
                <div className="truncate">
                  {course.title}
                  <div className="text-[10px]">{course.type}</div>
                </div>
              );

              return href ? (
                 <Link
                      key={course.title + i}
                      href={href}
                      className="absolute bg-blue-200 text-blue-900 text-xs font-semibold px-2 py-1 rounded shadow border border-blue-300 hover:bg-blue-300 transition-colors"
                      style={commonStyle}
                      title={`${course.title} (${course.type})`}
                    >
                      {content}
                    </Link>
                  ) : (
                    <div
                      key={course.title + i}
                      className="absolute bg-blue-200 text-blue-900 text-xs font-semibold px-2 py-1 rounded shadow border border-blue-300 truncate"
                      style={commonStyle}
                      title={`${course.title} (${course.type})`}
                    >
                      {content}
                    </div>
              );
            });
          })()}
        </div>
      ))}
    </div>
  );
}
import React, { useState } from "react";

export default function CourseList() {
  const originalCourses = [
    "Frontend Frameworks",
    "Database Management Systems",
    "Data Structures",
    "Aritifical Intillegence & Machine Learning",
    "Computer Networks",
  ];

  const [courses, setCourses] = useState([...originalCourses]);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("dragIndex", index);
  };

  const handleDrop = (e, index) => {
    const dragIndex = Number(e.dataTransfer.getData("dragIndex"));

    const updated = [...courses];
    const [moved] = updated.splice(dragIndex, 1);
    updated.splice(index, 0, moved);

    setCourses(updated);
  };

  return (
    <div>
      {/* Original List */}
      <h2>Course List</h2>
      <ul style={{ listStyle: "none", padding: 0, width: 300 }}>
        {originalCourses.map((course, index) => (
          <li
            key={index}
            style={{
              padding: "10px",
              marginBottom: "8px",
              
              borderRadius: "6px",
            }}
          >
            {course}
          </li>
        ))}
      </ul>

      <hr />

      {/* Draggable List */}
      <h2>Drag to Reorder Courses</h2>
      <ul style={{ listStyle: "none", padding: 0, width: 300 }}>
        {courses.map((course, index) => (
          <li
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, index)}
            style={{
              padding: "10px",
              marginBottom: "8px",
              background: "#f1f2f6",
              borderRadius: "6px",
              cursor: "grab",
            }}
          >
            {course}
          </li>
        ))}
      </ul>

      {/* Updated Order */}
      <h2>Updated Order of Courses</h2>
      {courses.map((c, i) => (
        <div key={i}>{c}</div>
      ))}
    </div>
  );
}

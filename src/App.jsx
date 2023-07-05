import React from "react";
import "./App.css";

export default function App() {
    const students = [
        { name: "John", age: 20, grades: [50, 75, 89] },
        { name: "Gerald", age: 25, grades: [88, 34, 93] },
        { name: "Khan", age: 22, grades: [44, 21, 37] },
    ];

    const calculateAverageGrade = (grades) => {
        const sum = grades.reduce((total, grade) => total + grade, 0);
        return sum / grades.length;
    }

    const printStudentInfo = (student) => {
        const averageGrade = calculateAverageGrade(student.grades);
        console.log(`${student.name} (${student.age}) - ${averageGrade}`);
    }

    students.forEach(printStudentInfo);

    return (
        <div>
            Hello World
        </div>
    );
}

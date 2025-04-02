import { useEffect, useState } from "react";
import "./Home.css";
import { CustomCardButton } from "../components/CustomCardButton";

const testArr = [
  {
    id: 1,
    courseName: "Intro to Vet Tech",
    length: 5,
    chapters: [
      {
        chapterName: "Introduction to Veterinary Technology",
        chapterLength: 4,
      },
      { chapterName: "Veterinary Tools and Equipment", chapterLength: 4 },
      { chapterName: "Anatomy and Physiology", chapterLength: 4 },
      { chapterName: "Learning Dog Breeds", chapterLength: 4 },
      { chapterName: "Animal Nursing and Care", chapterLength: 4 },
    ],
  },
  {
    id: 2,
    courseName: "Basic Veterinary Health and Care",
    length: 5,
    chapters: [
      { chapterName: "Medical Terminology", chapterLength: 4 },
      { chapterName: "Clinical Laboratory Procedures", chapterLength: 4 },
      { chapterName: "Pharmacology", chapterLength: 4 },
      { chapterName: "Diagnostic Imaging", chapterLength: 4 },
      { chapterName: "Surgery and Anesthesia", chapterLength: 4 },
    ],
  },
  {
    id: 3,
    courseName: "Advanced Animal Health",
    length: 5,
    chapters: [
      {
        chapterName: "Animal Reproduction 1: Basics of Animal Reproduction",
        chapterLength: 4,
      },
      {
        chapterName: "Animal Reproduction 2: Advanced Reproductive Procedures",
        chapterLength: 4,
      },
      { chapterName: "Animal Behavior and Psychology", chapterLength: 4 },
      { chapterName: "Animal Nutrition", chapterLength: 4 },
      { chapterName: "Common Parasites and Parasitology", chapterLength: 4 },
    ],
  },
  {
    id: 4,
    courseName: "Advanced Veterinary Health and Care",
    length: 6,
    chapters: [
      { chapterName: "Emergency and Critical Care", chapterLength: 4 },
      { chapterName: "Veterinary Dentistry", chapterLength: 4 },
      {
        chapterName: "Laboratory Animal Science and Exotic Animals",
        chapterLength: 4,
      },
      {
        chapterName: "Veterinary Office and Client Communication",
        chapterLength: 4,
      },
      { chapterName: "Clinical Externship", chapterLength: 4 },
      {
        chapterName: "Certification and Licensing Preparation",
        chapterLength: 4,
      },
    ],
  },
];

export const Home = () => {
  const [users, setUsers] = useState([{}]);
  useEffect(() => {
    fetch("/course-data/courses.json")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  console.log(users);

  return (
    <div className="background">
      <h1>My Courses</h1>
      <div className="buttonContainer">
        {testArr.map((element) => {
          return (
            <CustomCardButton
              text={element.courseName}
              image={element.id.toString()}
            />
          );
        })}
      </div>
      <h1 className="courses">Courses</h1>
      <div className="buttonContainer">
        {testArr.map((element) => {
          return (
            <CustomCardButton
              text={element.courseName}
              image={element.id.toString()}
            />
          );
        })}
      </div>
    </div>
  );
};

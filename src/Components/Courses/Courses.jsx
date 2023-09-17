import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import Button from "../Buttons/button";

const Courses = ({ handleClickSelect }) => {
  const [courses, setCourses] = useState([]);
  const [isDescendingPrice, setIsDescendingPrice] = useState(true);
  const [isDescendingCredit, setIsDescendingCredit] = useState(true);
  useEffect(() => {
    fetch("Courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handleClickSortByPrice = (courses) => {
    const sortedByPrice = [...courses];
    if (isDescendingPrice) {
      sortedByPrice.sort((a, b) => a.price - b.price);
    } else {
      sortedByPrice.sort((a, b) => b.price - a.price);
    }
    setCourses(sortedByPrice);
    setIsDescendingPrice(!isDescendingPrice);
  };
  
  const handleClickSortByCredit = (courses) => {
    const sortedByCredit = [...courses];
    if (isDescendingCredit) {
      sortedByCredit.sort((a, b) => a.credit_hours - b.credit_hours);
    } else {
      sortedByCredit.sort((a, b) => b.credit_hours - a.credit_hours);
    }
    setCourses(sortedByCredit);
    setIsDescendingCredit(!isDescendingCredit);
  };
  return (
    <div className="w-full lg:w-3/4 my-5">
      <Button
        courses={courses}
        handleClickSortByPrice={handleClickSortByPrice}
        handleClickSortByCredit={handleClickSortByCredit}
      ></Button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
        {courses.map((course) => (
          <Course
            key={course.id}
            course={course}
            handleClickSelect={handleClickSelect}
          ></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;

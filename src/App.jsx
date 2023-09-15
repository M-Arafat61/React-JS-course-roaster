import { useEffect, useState } from "react";
import Course from "./assets/components/course/Course";
import Cart from "./assets/components/cart/Cart";

function App() {
  // use state for data.json
  const [courses, setCourses] = useState([]);
  const [courseInfo, setCourseInfo] = useState([]);
  const handleSelect = course => {
    const isExist = courseInfo.find(
      courseTitle => courseTitle.title == course.title
    );
    if (isExist) {
      return alert("already added");
    } else {
      setCourseInfo([...courseInfo, course]);
    }
    // console.log(course);
  };
  // fetch json
  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
      .then(data => setCourses(data));
  }, []);
  // console.log(courses);
  return (
    <div>
      <h1>Course Registration</h1>
      <div className="flex">
        <div className="w-3/4 grid grid-cols-3 gap-5 p-4 ">
          {courses.map(course => (
            <Course
              key={course.id}
              course={course}
              handleSelect={() => handleSelect(course)}
            ></Course>
          ))}
        </div>
        <div className="w-1/4 p-5">
          <Cart courseInfo={courseInfo}></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;

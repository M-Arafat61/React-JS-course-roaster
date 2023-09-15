import { useEffect, useState } from "react";
import Course from "./assets/components/course/Course";
import Cart from "./assets/components/cart/Cart";

function App() {
  // use state for data.json
  const [courses, setCourses] = useState([]);
  const [courseInfo, setCourseInfo] = useState([]);
  const [credit, setCredit] = useState(0);

  const handleSelect = course => {
    const isExist = courseInfo.find(
      courseTitle => courseTitle.title == course.title
    );
    let prevCredit = course?.credit;
    // if (isExist) {
    //   return alert("already added");
    // } else {
    //   setCourseInfo([...courseInfo, course]);
    //   courseInfo.forEach(item => {
    //     // prevCredit += item.credit;
    //     prevCredit += item.credit;
    //   });
    //   if (prevCredit !== 0 && prevCredit <= 20) {
    //     return setCredit(prevCredit);
    //   }
    // }
    if (isExist) {
      return alert("ddd");
    }
    if (!isExist && credit >= 20) {
      return alert("nn");
    }
    setCourseInfo([...courseInfo, course]);
    courseInfo.forEach(item => {
      // prevCredit += item.credit;
      prevCredit += item.credit;
    });
    if (prevCredit !== 0 && prevCredit <= 20) {
      return setCredit(prevCredit);
    }
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
          <Cart courseInfo={courseInfo} credit={credit}></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;

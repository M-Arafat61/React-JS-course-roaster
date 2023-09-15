import { useEffect, useState } from "react";
import Course from "./assets/components/course/Course";
import Cart from "./assets/components/cart/Cart";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // use state for data.json
  const [courses, setCourses] = useState([]);
  const [courseInfo, setCourseInfo] = useState([]);
  const [credit, setCredit] = useState(0);
  const [remaining, setRemaining] = useState(20);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSelect = course => {
    const isExist = courseInfo.find(
      courseTitle => courseTitle.title == course.title
    );

    if (isExist) {
      return toast.warn("Course is already added", {
        style: {
          color: "black",
          fontSize: "20px",
          backgroundColor: "hotpink",
        },
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
    }
    let prevCredit = course?.credit;

    const remainingHour = remaining - prevCredit;
    // remaining hour validation
    if (remainingHour >= 0) {
      setRemaining(remainingHour);
    }
    // total credit
    courseInfo.forEach(item => {
      prevCredit += item.credit;
    });
    if (prevCredit <= 20) {
      setCredit(prevCredit);
    }
    if (!isExist && prevCredit > 20) {
      return toast.warn("See if total credit exceeds or not!", {
        style: {
          color: "black",
          fontSize: "20px",
          backgroundColor: "cyan",
        },
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
    }

    // total price
    let prevPrice = course?.price;
    courseInfo.forEach(coursePrice => {
      prevPrice += coursePrice.price;
    });
    setTotalPrice(prevPrice);

    // copying each course to courseInfo
    setCourseInfo([...courseInfo, course]);
  };

  // fetch json
  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
      .then(data => setCourses(data));
  }, []);
  // console.log(courses);

  return (
    <div className="max-w-screen-xl m-auto">
      <h1 className="text-[#1C1B1B] text-2xl font-bold tracking-wide text-center pt-10 pb-10">
        Course Registration
      </h1>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-5 p-5 ">
          {courses.map(course => (
            <Course
              key={course.id}
              course={course}
              handleSelect={() => handleSelect(course)}
            ></Course>
          ))}
        </div>
        <div className="md:w-1/4 p-5 ">
          <Cart
            courseInfo={courseInfo}
            credit={credit}
            remaining={remaining}
            totalPrice={totalPrice}
          ></Cart>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
}

export default App;

import PropTypes from "prop-types";
const Course = ({ course, handleSelect }) => {
  const { img, title, description, price, credit } = course;
  // each course is an object
  return (
    <div className="rounded-lg  bg-[#f3eaea]">
      <div className="flex justify-center h-36">
        <img src={img} />
      </div>
      <div className="pt-5 pl-5 pr-5">
        <h2 className="text-[#1C1B1B] text-base font-semibold tracking-tight">
          {title}
        </h2>
        <p className="text-gray-500 text-sm tracking-tighter">{description}</p>
        <div className="flex justify-between items-center pt-5 pb-5">
          <div className="flex jus">
            <img src="/public/dollar.svg" alt="" />
            <p>Price: {price}</p>
          </div>
          <div className="flex">
            <img src="/public/book.svg" alt="" />
            <p>Credit: {credit}hr</p>
          </div>
        </div>
      </div>
      <div
        className="text-center bg-blue-400 rounded-xl
       text-white text-xl tracking-tighter font-semibold "
      >
        <button onClick={handleSelect} className="">
          Select
        </button>
      </div>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
  handleSelect: PropTypes.func,
};

export default Course;

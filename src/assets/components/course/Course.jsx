import PropTypes from "prop-types";
const Course = ({ course, handleSelect }) => {
  const { img, title, description, price, credit } = course;
  // each course is an object
  return (
    <div className="rounded-lg  bg-[#f3eaea] flex flex-col">
      <div className="flex justify-center">
        <img src={img} />
      </div>
      <div className=" pt-5 pl-5 pr-5 ">
        <h2 className="text-[#1C1B1B] text-base font-semibold tracking-tight">
          {title}
        </h2>
        <p className="text-gray-500 text-sm tracking-tighter">{description}</p>
      </div>
      <div className="mt-auto pt-3 pb-3 flex justify-center gap-5">
        <div className="flex">
          <img src="/dollar.svg" alt="" />
          <p>Price: {price}</p>
        </div>
        <div className="flex">
          <img src="/book.svg" alt="" />
          <p>Credit: {credit}hr</p>
        </div>
      </div>

      <div
        className="mt-auto text-center bg-blue-400 rounded-xl
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

import PropTypes from "prop-types";

const Cart = ({ courseInfo }) => {
  return (
    <div>
      <h3>Credit Hour Remaining hr</h3>
      <hr className="flex border border-gray-400 " />

      <h1>Course Name </h1>
      {courseInfo.map((info, idx) => (
        <p key={info.id}>
          {(idx = idx + 1)}. {info.title}
        </p>
      ))}
      <h1>Course Name</h1>

      <hr className="flex border border-gray-400 " />
      <h3>Total Credit Hour : </h3>
      <hr className="flex border border-gray-400 " />
      <h3>Total Price : USD</h3>
    </div>
  );
};
Cart.propTypes = {
  courseInfo: PropTypes.array.isRequired,
};
export default Cart;

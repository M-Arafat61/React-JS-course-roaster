import PropTypes from "prop-types";
// import { useState } from "react";

const Cart = ({ courseInfo, credit, remaining, totalPrice }) => {
  // const [credit, setCredit] = useState(0);
  return (
    <div>
      <h3>Credit Hour Remaining {remaining} hr</h3>
      <hr className="flex border border-gray-400 " />

      <h1>Course Name </h1>
      {courseInfo.map((info, idx) => (
        <p key={info.id}>
          {(idx = idx + 1)}. {info.title}
        </p>
      ))}

      <hr className="flex border border-gray-400 " />
      <h3>Total Credit Hour : {credit}</h3>
      <hr className="flex border border-gray-400 " />

      <h3>Total Price : {totalPrice} USD</h3>
    </div>
  );
};
Cart.propTypes = {
  courseInfo: PropTypes.array.isRequired,
  credit: PropTypes.number,
  remaining: PropTypes.number,
  totalPrice: PropTypes.number,
};
export default Cart;

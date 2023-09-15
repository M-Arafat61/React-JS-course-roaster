import PropTypes from "prop-types";
// import { useState } from "react";

const Cart = ({ courseInfo, credit, remaining, totalPrice }) => {
  // const [credit, setCredit] = useState(0);
  return (
    <div className="space-y-5">
      <div>
        <h3 className="text-[#2F80ED] font-bold text-xl">
          Credit Hour Remaining {remaining} hr
        </h3>
      </div>
      <hr className="flex border border-gray-300 " />

      <div>
        <h1 className="text-black font-bold pb-5 text-xl">Course Name </h1>
        {courseInfo.map((info, idx) => (
          <p key={info.id}>
            {(idx = idx + 1)}. {info.title}
          </p>
        ))}
      </div>

      <hr className="flex border border-gray-300 " />
      <div>
        <h3 className="text-xl text-gray-600 font-medium">
          Total Credit Hour : {credit}hr
        </h3>
      </div>
      <hr className="flex border border-gray-300 " />

      <div>
        <h3 className="text-xl text-gray-600 font-semibold">
          Total Price : {totalPrice} USD
        </h3>
      </div>
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

import { MdOutlineDeleteForever } from 'react-icons/md';
const Cart = ({ cart, remainingHour, totalCreditHour, totalPrice, handleClickRemove }) => {
  return (
    <div className="w-full md:w-3/4 lg:w-1/4 p-5 my-5 md:mt-[104px] rounded-lg shadow-lg h-full border-2 mx-auto">
      <h1 className="text-lg font-semibold text-blue-600 pb-2 border-b-2">
        Credit Hour Remaining: {remainingHour} hr
      </h1>
      <h1 className="text-xl font-bold my-2">Course Name</h1>
      <div className=" text-gray-600 my-2 ">
        {cart.map((course, idx) => (
          <li className="list-none flex items-center justify-between my-2" key={course.id}><p>{idx+1}. {course.title} </p><button onClick={()=>handleClickRemove(course)} className='text-2xl font-semibold text-red-600'><MdOutlineDeleteForever></MdOutlineDeleteForever></button></li>
          
        ))}
      </div>
      <h1 className="text-lg font-semibold py-2 border-y-2 my-2">
        Total Credit Hour: {totalCreditHour}
      </h1>
      <h1 className="text-lg font-semibold">Total Price: {totalPrice} USD</h1>
    </div>
  );
};

export default Cart;

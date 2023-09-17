import { useState } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Courses from "./Components/Courses/Courses";
import Header from "./Components/Header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cart, setCart] = useState([]);
  const [remainingHour, setRemainingHour] = useState([20]);
  const [totalCreditHour, setTotalCreditHour] = useState([0]);
  const [totalPrice, setTotalPrice] = useState([0]);

  const handleClickSelect = (course) => {
    const isExist = cart.find((item) => item.id === course.id);
    if (isExist) {
      return toast.info("The course has already been enrolled.");
    }
    const newCart = [...cart, course];
    const remaining = parseInt(remainingHour - course.credit_hours);
    const totalCredit = parseInt(totalCreditHour + course.credit_hours);
    let total = course.price;
    cart.forEach((item) => {
      total += item.price;
    });
    if (remaining < 0 && totalCredit > 20) {
      return toast.error(
        "You don't have enough credit hours to enroll this course"
      );
    } else {
      setRemainingHour(remaining);
      setTotalCreditHour(totalCredit);
      setTotalPrice(parseFloat(total).toFixed(2));
      setCart(newCart);
      return toast.success("This course is added to the cart successfully.");
    }
  };
  const handleClickRemove = (course) => {
    const remainingCart = cart.filter((item) => item.id !== course.id);
    setRemainingHour(parseInt(remainingHour + course.credit_hours));
    setTotalCreditHour(parseInt(totalCreditHour - course.credit_hours));
    setTotalPrice(parseFloat(totalPrice - course.price).toFixed(2));
    setCart(remainingCart);
    return toast.success("The course removed from cart successfully.");
  };
  return (
    <>
      <Header></Header>
      <div className="flex flex-col lg:flex-row gap-3">
        <Courses handleClickSelect={handleClickSelect}></Courses>
        <Cart
          cart={cart}
          remainingHour={remainingHour}
          totalCreditHour={totalCreditHour}
          totalPrice={totalPrice}
          handleClickRemove={handleClickRemove}
        ></Cart>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;

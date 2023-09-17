const Button = ({courses, handleClickSortByPrice, handleClickSortByCredit}) => {
  
  return (
    <div className="flex justify-between my-5">
      <button onClick={()=>handleClickSortByPrice(courses)} className="bg-blue-500 px-3 py-2 text-xl font-semibold  text-white  rounded-lg">
        Sort by price
      </button>
      <button onClick={()=>handleClickSortByCredit(courses)} className="bg-blue-500 px-3 py-2 text-xl font-semibold  text-white  rounded-lg">Sort by credit</button>
    </div>
  );
};

export default Button;

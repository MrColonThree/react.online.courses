import { FiBookOpen } from "react-icons/fi";


const Course = ({ course, handleClickSelect }) => {
  const { title, image, description, price, credit_hours } = course;
  return (
    <div className="p-4 rounded-lg shadow-lg border-2  mx-auto mb-3">
      <img className="w-full h-44 mx-auto rounded-lg" src={image} alt="" />
      <h2 className="text-xl font-semibold mt-3">{title}</h2>
      <div className="my-2">
        <p className="text-sm">{description}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p className="text-2xl flex items-center gap-1">
          $<span className="text-gray-600 text-lg"> Price: {price}</span>
        </p>
        <p className="text-lg flex items-center gap-1">
          <FiBookOpen className="text-2xl"></FiBookOpen>
          <span className="text-gray-600">Credit: {credit_hours}hr</span>
        </p>
      </div>
      <button
        onClick={() => handleClickSelect(course)}
        className="w-full text-center bg-blue-500 py-2 text-xl font-semibold  text-white  rounded-lg"
      >
        Select
      </button>
    </div>
  );
};

export default Course;

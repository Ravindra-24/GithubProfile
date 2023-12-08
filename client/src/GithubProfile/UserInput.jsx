import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const UserInput = ({setData, setProgress}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        if(inputValue === "" || inputValue === null) {
            return toast.error("Please enter a username");
        };
        
        setProgress(10);
        const response = await axios.get(
          `https://api.github.com/users/${inputValue}`
        );
        console.log(response.data);
        setProgress(50);
        setData(response.data);
        toast.success("User found");
        setProgress(90);
      } catch (error) {
          toast.error("User not found");
      } finally {
        setProgress(100);
      }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="m-2">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="border border-gray-700 bg-gray-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter Github username"
        />
        <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-md mt-2 ml-2"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default UserInput;

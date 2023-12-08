import React, { useState } from "react";
import UserInput from "./UserInput";
import UserCard from './UserCard'

const Main = ({ setProgress }) => {
  const [data, setData] = useState(null);
  

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <UserInput setData={setData} setProgress={setProgress}/>
      {data && (
       <UserCard data={data} />
      )}
    </div>
  );
};

export default Main;

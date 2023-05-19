import React from "react";
import { useSelector } from "react-redux";

const Explore = () => {
  
    const user = useSelector(state => state.authReducer)
    console.log(user)
    console.log(user)

  return (
    <div>
      {user ? <p>User is logged in</p> : <p>User is not logged in</p>}
    </div>
  );
};

export default Explore;
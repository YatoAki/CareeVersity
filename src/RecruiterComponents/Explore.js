import React from "react";
import { getAuth } from "firebase/auth";

const Explore = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <div>
      {user ? <p>User is logged in</p> : <p>User is not logged in</p>}
    </div>
  );
};

export default Explore;
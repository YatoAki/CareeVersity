import { useState, useEffect } from "react";
import db from "../Firebase";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { Link } from "react-router-dom";

const AboutJobApplicants = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (props.info) {
      props.info.forEach((uid) => loadData(uid));
    }
    console.log(data)
  }, [props.info]);

  const loadData = async (id) => {
    try {
      const q = query(collection(db, "user"), where("uid", "==", id));
      const querySnapshot = await getDocs(q);
      const fetchedData = querySnapshot.docs.map((doc) => doc.data());
      console.log(fetchedData);
      setData((prevData) => [...prevData, fetchedData[0]]);
    } catch (error) {
      console.error("Error fetching job data:", error);
    }
  };

  return (
    <div>
        <h3>Applied</h3>
        <ul>
        {data ? 
        data.map((info) => {
            return(
                <Link to={"/people/" + info.uid }><li>{info.username}</li></Link>
            )
        }): null
        }
        </ul>
        
    </div>
  );
};

export default AboutJobApplicants;

import { useParams } from 'react-router-dom';
import Header from '../UtilityComponents/Header';
import { useState,useEffect } from 'react';
import { collection, getDocs, query, where } from "@firebase/firestore";
import db from '../Firebase';
import profileIcon from "../assets/profileIcon.avif"
import "./JobseekerProfile.css"
import SwiperSlider from '../JobseekerComponents/SwiperSlider';

const JobseekerProfile = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);

    useEffect(() => {
      loadData();
    }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount
  
    const loadData = async () => {
        try {
          console.log(id); // Check the value of id
          const q = query(collection(db, "user"), where("uid", "==", id));
          const querySnapshot = await getDocs(q);
          const fetchedData = querySnapshot.docs.map((doc) => doc.data());
          console.log(fetchedData);
          setData(fetchedData[0]);
        } catch (error) {
          console.error("Error fetching job data:", error);
        }
      };
      

  return (
    <div className='JobseekerProfile'>
        <Header/>
        <div className='container'>
            <img src={profileIcon} alt="" />
            <h2>{data.username}</h2>
            <p className='bio'>{data.bio}</p>
            <div className='details'>
                <h3>Date of Birth: </h3>
                <p>{data.dateOfBirth}</p>

                <h3>Location: </h3>
                <p>{data.currentLocation}</p>

                <h3>Role: </h3>
                <p>{data.role}</p>
            </div>
        </div>
        <h4>Finished Course</h4>
        <SwiperSlider/>

        <h4>Courses on Progress</h4>
        <SwiperSlider/>
    </div>
  );
};

export default JobseekerProfile;

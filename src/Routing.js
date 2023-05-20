import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login,setUserData } from "./actions/index";
import db from './Firebase';
import {collection, doc, getDoc } from 'firebase/firestore';

import Home from './HomeComponents/Home';
import RecruiterSignup from "./RecruiterComponents/Signup";
import RecruiterExplore from "./RecruiterComponents/Explore";
import RecruiterLogin from "./RecruiterComponents/Login";
import RecruiterDashboard from "./RecruiterComponents/Dashboard";
import RecruiterJob from "./RecruiterComponents/Job";

import JobseekerSignup from "./JobseekerComponents/Signup";
import JobseekerExplore from "./JobseekerComponents/Explore";
import JobseekerLogin from "./JobseekerComponents/Login";

const Routing = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [type, setType] = useState()
    useEffect(() => {
      const auth = getAuth();
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (user) {
          dispatch(login(user.uid));
  
          try {
            const userRef = doc(collection(db, 'user'), user.uid);
            const docSnapshot = await getDoc(userRef);
            if (docSnapshot.exists()) {
              const userData = docSnapshot.data();
              console.log(userData);
              setType(userData.type)
              dispatch(setUserData(userData));
            } else {
              console.log('No user data found!');
            }
  
            setLoading(false);
          } catch (error) {
            console.log('Error retrieving user data:', error);
          }
        } else {
          setLoading(false);
        }
      });
  
      // Clean up the listener when the component unmounts
      return () => unsubscribe();
    }, [dispatch]);

    if (loading) {
        // Render a loading state until the authentication state is restored
        return <div>Loading...</div>;
    }

    return (
        <BrowserRouter basename='/CareeVersity'>
            <Routes>
                <Route path="" element={<Home/>}/>

                <Route path="/jobseeker/login" element={<JobseekerLogin/>}/>
                <Route path="/jobseeker/signup" element={<JobseekerSignup/>}/>
                {type === "jobseeker" || "admin" ? 
                <>
                  <Route path='/jobseeker' element={<JobseekerExplore />} />
                  <Route path='/jobseeker/job' />
                  <Route path='/jobseeker/learn' />
                  <Route path='/jobseeker/learn/:id'/>
                </>
                :
                <>
                  <Route path='/jobseeker' element={<JobseekerLogin />} />
                  <Route path='/jobseeker/job' />
                  <Route path='/jobseeker/learn' />
                  <Route path='/jobseeker/learn/:id'/>
                </>
                }


                <Route path="/recruiter/login" element={<RecruiterLogin/>}/>
                <Route path="/recruiter/signup" element={<RecruiterSignup/>}/>
                {type === "recruiter" || "admin" ? 
                <>
                  <Route path="/recruiter" element={<RecruiterExplore/>}/>
                  <Route path="/recruiter/dashboard" element={<RecruiterDashboard/>}/>
                  <Route path="/recruiter/job" element={<RecruiterJob/>}/>
                </>
                :
                <>
                  <Route path="/recruiter" element={<RecruiterLogin/>}/>
                  <Route path="/recruiter/dashboard" element={<RecruiterLogin/>}/>
                  <Route path="/recruiter/job" element={<RecruiterLogin/>}/>
                </>
                }
                
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;

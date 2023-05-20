import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from "./actions/index";

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

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(login(user.uid));
            }
            setLoading(false);
        });

        // Clean up the listener when the component unmounts
        return () => unsubscribe();
    }, []);

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
                <Route path="/jobseeker" element={<JobseekerExplore/>}/>
                <Route path="/jobseeker/job"/>
                <Route path="/jobseeker/learn"/>
                <Route path="/jobseeker/learn/:id"/>
                <Route path="/recruiter/login" element={<RecruiterLogin/>}/>
                <Route path="/recruiter/signup" element={<RecruiterSignup/>}/>
                <Route path="/recruiter" element={<RecruiterExplore/>}/>
                <Route path="/recruiter/dashboard" element={<RecruiterDashboard/>}/>
                <Route path="/recruiter/job" element={<RecruiterJob/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;

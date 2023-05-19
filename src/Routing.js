import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './HomeComponents/Home';

import RecruiterSignup from "./RecruiterComponents/Signup"
import RecruiterExplore from "./RecruiterComponents/Explore"
import RecruiterLogin from "./RecruiterComponents/Login"

import JobseekerSignup from "./JobseekerComponents/Signup"
import JobseekerExplore from "./JobseekerComponents/Explore"
import JobseekerLogin from "./JobseekerComponents/Login"

const Routing = () => {

    return(
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
                <Route path="/recruiter/dashboard"/>
                <Route path="/recruiter/job"/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing
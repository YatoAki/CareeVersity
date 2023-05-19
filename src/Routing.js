import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './HomeComponents/Home';
import RecruiterLogin from "./RecruiterComponents/Login";
import RecruiterSignup from "./RecruiterComponents/Signup"

import JobseekerSignup from "./JobseekerComponents/Signup"

const Routing = () => {

    return(
        <BrowserRouter basename='/CareeVersity'>
            <Routes>
                <Route path="" element={<Home/>}/>
                
                <Route path="/jobseeker/login"/>
                <Route path="/jobseeker/signup" element={<JobseekerSignup/>}/>
                <Route path="/jobseeker"/>
                <Route path="/jobseeker/job"/>
                <Route path="/jobseeker/learn"/>
                <Route path="/jobseeker/learn/:id"/>

                <Route path="/recruiter/login" element={<RecruiterLogin/>}/>
                <Route path="/recruiter/signup" element={<RecruiterSignup/>}/>
                <Route path="/recruiter"/>
                <Route path="/recruiter/dashboard"/>
                <Route path="/recruiter/job"/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './HomeComponents/Home';

const Routing = () => {

    return(
        <BrowserRouter basename='/CareeVersity'>
            <Routes>
                <Route path="" element={<Home/>}/>
                
                <Route path="/jobseeker/login"/>
                <Route path="/jobseeker/signup"/>
                <Route path="/jobseeker"/>
                <Route path="/jobseeker/job"/>
                <Route path="/jobseeker/learn"/>
                <Route path="/jobseeker/learn/:id"/>

                <Route path="/recruiter/login" />
                <Route path="/recruiter/signup"/>
                <Route path="/recruiter"/>
                <Route path="/recruiter/dashboard"/>
                <Route path="/recruiter/job"/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing
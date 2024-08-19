import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./container/Home";
import Login from "./container/Login";
import CreatedFY from "./container/Created_FY";
import Results from "./container/Results";
import ResultsFilter from "./container/ResultsFilter";
import LikeButton from "./container/LikeButton";
import Profile from "./container/Profile";
import Saved from "./container/Saved";
import Signup from "./container/Signup";
import Reset from "./container/Reset";
import Create from "./container/Create";
import Upload from "./container/Upload";
import RecUsers from "./container/RecUsers";
import Thanks from "./container/Thanks";



export default function Navigate() {

  return (
    <Routes>
        <Route exact path='/created_fy' element={<CreatedFY/>}/>
        <Route exact path='/recusers' element={<RecUsers/>}/>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/> 
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/reset' element={<Reset/>}/>
        <Route exact path='/profile' element={<Profile/>}/>
        <Route exact path='/create' element={<Create/>}/>
        <Route exact path='/add' element={<Upload/>}/>
        <Route exact path='/thanks' element={<Thanks/>}/>
        <Route exact path='/saved' element={<Saved/>}/>
        <Route exact path="/results" element={<Results />} />
        <Route exact path="/resultsfilter" element={<ResultsFilter />} />
        <Route exact path='/likeButton' element={<LikeButton/>}/>
    </Routes>
  );
}

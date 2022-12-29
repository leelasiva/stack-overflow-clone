import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from '../pages/home/Home';
import Auth from '../pages/auth/Auth';
import Questions from '../pages/questions/Questions';
import AskQuestion from '../pages/askQuestion/AskQuestion';
import DisplayQuestion from '../pages/questions/DisplayQuestion';

const AllRoutes = () => {
  return (
    <Routes>
     <Route exact path='/' element={<Home/>}/>
     <Route  path='/Auth' element={<Auth/>}/>
     <Route  path='/Questions' element={<Questions/>}/>
     <Route  path='/AskQuestion' element={<AskQuestion/>}/>
     <Route path='/Question/:id' element={<DisplayQuestion/>}/>
    </Routes>

  )
}

export default AllRoutes
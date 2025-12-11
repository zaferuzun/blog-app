import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from '../components/Home/HomePage';
import BlogList from '../components/Blogs/BlogList';
import BlogDetails from '../components/Blogs/BlogDetails';
import Contact from '../components/Home/Contact';
import NotFound from '../components/Errors/NotFound';
import Header from '../components/Home/Header';
import AddBlogPage from '../components/Blogs/AddBlogPage';




export const AppRouter = () => {
  return (
    <Router>
        <Header/>
        <Routes>
          <Route path="/" element ={<HomePage/>}/>
          <Route path="/blogs" element = {<BlogList/>}/>
          <Route path="/blogs/:id" element = {<BlogDetails/>}/>
          <Route path="/create" element = {<AddBlogPage/>}/>
          <Route path="/contact" element = {<Contact/>}/>
          <Route path="*" element = {<NotFound/>}/>

        </Routes>
    </Router>
  )
}

export default AppRouter;

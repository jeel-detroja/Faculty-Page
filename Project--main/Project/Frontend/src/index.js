import React from 'react';
import ReactDOM from 'react-dom/client';
import List from './component/StudentList'; 
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Faq from './pages/Faq';
import Layout from './pages/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudentPanel from './component/AddStudent';
import StudentDetails from './component/DetaileStudent';
import EditStudent from './component/EditStudentInfo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='about' element={<About />} />
      {/* <Route path='faq' element={<Faq />} /> */}
      <Route path='contact' element={<Contact />} />
      <Route path='student' element={<List />} />
      <Route path='student/add' element={<StudentPanel />} />
      <Route path='student/:id' element={<StudentDetails />} />
      <Route path='student/edit/:id' element={<EditStudent />} />

      </Route>
    </Routes>
  </BrowserRouter>
);

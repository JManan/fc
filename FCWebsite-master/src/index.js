import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './com/Nav';
import Aboutus from './com/Aboutusdesc'
import Member from './com/Member'
import reportWebVitals from './reportWebVitals';
import Footer from './com/footer'
let members= [
  {
    sno:1,
    name:"name1",
    designation:"VP",
    desc:"This is placeholder text. To change this content, double-click on the element and click Change Content."
  },
  {
    sno:2,
    name:"name2",
    designation:"VP",
    desc:"This is placeholder text. To change this content, double-click on the element and click Change Content."
  },
  {
    sno:3,
    name:"name3",
    designation:"VP",
    desc:"This is placeholder text. To change this content, double-click on the element and click Change Content."
  },
  {
    sno:4,
    name:"name4",
    designation:"VP",
    desc:"This is placeholder text. To change this content, double-click on the element and click Change Content."
  },
  {
    sno:5,
    name:"name5",
    designation:"VP",
    desc:"This is placeholder text. To change this content, double-click on the element and click Change Content."
  },
  {
    sno:6,
    name:"name6",
    designation:"VP",
    desc:"This is placeholder text. To change this content, double-click on the element and click Change Content."
  }
]

// let members = async () => {
//   let response = await fetch('http://localhost:8000/members/')
//   let data = await response.json()
//   console.log("data:", data)
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Aboutus></Aboutus>
    <Member memberList={members}></Member>
    <Footer/>
  </React.StrictMode>
);

reportWebVitals();
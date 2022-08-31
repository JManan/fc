import "./Aboutusdesc.css";
import React , { Component}  from 'react';
import aboutusimg from "./aboutusimg.webp";
function Aboutus(props){
    return(
        <>
        <center><h1>About Us</h1></center>
        <center><h5>Finding Inspiration in every Turn</h5></center>
        <center><p>This is your About Page. This space is a great opportunity to give a full background on who you are, what you do and what your website has to offer. Double click on the text box to start editing your content and make sure to add all the relevant details you want site visitors to know.</p></center>
        <img src={aboutusimg} alt="a pic for about us page" className="aboutimg"/>
        <center><h1 className="story">Our Story</h1></center>
        <center><p>Every website has a story, and your visitors want to hear yours. This space is a great opportunity to give a full background on who you are, what your team does, and what your site has to offer. Double click on the text box to start editing your content and make sure to add all the relevant details you want site visitors to know.
        <br/><br/>
        If you’re a business, talk about how you started and share your professional journey. Explain your core values, your commitment to customers, and how you stand out from the crowd. Add a photo, gallery, or video for even more engagement.</p></center>
        <center><h1>Team Members</h1></center>
        </>
    )
}
export default Aboutus
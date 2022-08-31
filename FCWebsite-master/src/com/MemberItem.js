import "./MemberItem.css";
import React from 'react'
import memberimg from "./member_img1.webp";
export const MemberItem=({Members})=>{
    return(
        <div className="all_members">
            <img src={memberimg} alt={Members.name} className="mem_img"></img>
            <h4>{Members.name}</h4>
            <h5>{Members.designation}</h5>
            <p className="member_desc">{Members.desc}</p>
        </div>
    )
}
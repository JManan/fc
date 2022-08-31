import "./Member.css"
import React from 'react'
import {MemberItem} from "../com/MemberItem";
const Members = (props)=>{
    return(
        <div className="container">
            {
                props.memberList.map((elem)=>{
                    return <MemberItem key ={elem.sno} Members={elem}/>
                })
            }
        </div>
    )
}
export default Members
/* <MemberItem Members={props.memberList[0]}/> */

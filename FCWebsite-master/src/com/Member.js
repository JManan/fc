import "./Member.css"
import React, {useState, useEffect} from 'react'
import {MemberItem} from "../com/MemberItem";
import Team from '/home/manan/Desktop/fc/team/models.py'
import { useEffect, useState } from "react"

const Members = ()=> {
    
    let [members, setMembers] = useState([])

    useEffect(()=>{
        getmembers()
    }, [])


    let getmembers = async () => {
        let response = await fetch('http://localhost:8000/members/')
        let data = await response.json()
        console.log('data', data)
    }

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

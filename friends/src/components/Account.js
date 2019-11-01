import React, {useState, useEffect } from 'react'
import api from '../utils/api'
import Friend from './Friend'


export default function Account(props) {

    const [friends, setFriends] = useState()

    useEffect(() => {
        api().get("/api/friends")
        .then(results => {
            console.log(results.data)
            setFriends(results.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[])

    return (
        <div>
            <h1>My Friends Account</h1>
         {friends ? friends.map((item,index) => {
            return < Friend friend={item} key={index}/>}) : <p>loading..</p> }  
        </div>
    )
}

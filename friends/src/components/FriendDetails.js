import React, {useEffect, useState} from 'react'
import api from '../utils/api'

export default function FriendDetails(props) {

    console.log("details", props.match.params.id)

    const [friends, setFriends] = useState()

    useEffect(() => {
        api().get(`/api/friends/${props.match.params.id}`)
        .then(results => {
            console.log("details res", results.data)
            setFriends(results.data)
            console.log('friend', friends)
        })
        .catch(err =>{
            console.log(err)
        })
    },[])

    return (
        <>
           {friends ? (
               <div className="card">
                   <p>{friends.name}</p>
                   <p>{friends.email}</p>
               </div>
               ) : <p>loading..</p> }
        </>
    )
}

import React from 'react'
import {Link} from 'react-router-dom'

export default function Friend({friend}) {
    console.log(friend.id)
    return (
        <Link to={`friend/${friend.id}`} friend={friend}>
            <div className="card">
                {friend.name}
            </div>
        </Link>
        
    )
}

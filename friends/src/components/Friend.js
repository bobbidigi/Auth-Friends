import React from 'react'

export default function Friend({friend}) {
    // console.log("friend")
    return (
        <div className="card">
            {friend.name}
        </div>
    )
}

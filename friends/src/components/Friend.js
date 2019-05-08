import React from 'react';

function Friend(props){
    const num = Math.floor(Math.random() * 600)
    return (
        <div className="friend-card" key={props.friend.id}>
            <img className="profile-pic" src={`https://placekitten.com/200/${num}`} alt="cats are my only friends" />
            <p><strong>Name:</strong> {props.friend.name}</p>
            <p><strong>Age:</strong> {props.friend.age}</p>
            <p><strong>Email:</strong> {props.friend.email}</p>
            <p></p>
            <p></p>
         </div>
    )
}

export default Friend;
import React from 'react';

function Friend(props){
    const num = Math.floor(Math.random() * 9)
    if(!props.friend) {
        return <h2>Loading Friends...</h2>
    }
    return (
        <div className="friend-card">
            <img className="profile-pic" src={`https://randomuser.me/api/portraits/lego/${num}.jpg`} alt="lego person" />
            <section className="friend-info">
                <p><strong>Name:</strong> {props.friend.name}</p>
                <p><strong>Age:</strong> {props.friend.age}</p>
                <p><strong>Email:</strong> {props.friend.email}</p>
            </section>
         </div>
    )
}

export default Friend;
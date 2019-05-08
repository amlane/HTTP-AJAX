import React from 'react';

function Friends(props){
    return (
        <>
        <h2>This is my friend's list:</h2>
        {props.friends.map( friend => {
            return (
                <div key={friend.email}>
                    <p>{friend.name}</p>
                </div>
            )
        })}
        </>
    )
}

export default Friends;
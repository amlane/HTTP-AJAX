import React from 'react';
import Friend from './Friend';

function Friends(props){
    return (
        <>
        {props.friends.map( friend => {
            return (
                <Friend
                friend={friend}
                />
            )
        })}
        </>
    )
}

export default Friends;
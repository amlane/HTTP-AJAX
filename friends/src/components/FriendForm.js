import React from 'react';

function FriendForm(props){
    return(
        <div className="form-background">
            <form className="add-new-friend">
                <h3>Add a new friend!</h3>
                <p>Name: <input /></p>
                <p>Age: <input /></p>
                <p>Email: <input /></p>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default FriendForm;
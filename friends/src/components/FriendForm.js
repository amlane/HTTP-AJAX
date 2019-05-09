import React from 'react';

function FriendForm(props){
    return(
        <div className="form-background">
            <form className="add-new-friend" onSubmit={props.submitForm}>
                <h3>Add a friend!</h3>
                <p>Name: 
                    <input
                    name="name"
                    placeholder="...enter name"
                    onChange={props.changeHandler}
                    value={props.name}
                    />
                </p>
                <p>Age: 
                    <input 
                    name="age"
                    placeholder="...enter age"
                    onChange={props.changeHandler}
                    value={props.age}
                    />
                </p>
                <p>Email: 
                    <input 
                    name="email"
                    placeholder="...enter email"
                    onChange={props.changeHandler}
                    value={props.email}
                    />
                </p>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default FriendForm;
import React from 'react';

class FriendForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newFriend: {
                name: '',
                age: '',
                email: ''
                }
        }
    }

    render(){
    return(
        <div className="form-background">
            <form className="add-new-friend" onSubmit={this.props.submitForm}>
                <h3>Add a friend!</h3>
                <p>Name: 
                    <input
                    name="name"
                    placeholder="...enter name"
                    onChange={this.props.changeHandler}
                    value={this.props.name}
                    />
                </p>
                <p>Age: 
                    <input 
                    name="age"
                    placeholder="...enter age"
                    onChange={this.props.changeHandler}
                    value={this.props.age}
                    />
                </p>
                <p>Email: 
                    <input 
                    name="email"
                    placeholder="...enter email"
                    onChange={this.props.changeHandler}
                    value={this.props.email}
                    />
                </p>
                <button>Submit</button>
            </form>
        </div>
    )
    }
}

export default FriendForm;
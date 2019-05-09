import React from 'react';

class FriendForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newFriend: {
                name: '',
                age: '',
                email: '', 
                id: Date.now()
                }
        }
    }

    changeHandler = (e) => {
    this.setState({ 
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value 
       }
    })
  }

  handleSubmit = e => {
      e.preventDefault();
      this.props.addFriend(this.state.newFriend)
  }

    render(){
    return(
        <div className="form-background">
            <form className="add-new-friend" onSubmit={this.handleSubmit}>
                <h3>Add a friend!</h3>
                <p>Name: 
                    <input
                    name="name"
                    placeholder="...enter name"
                    onChange={this.changeHandler}
                    value={this.props.name}
                    />
                </p>
                <p>Age: 
                    <input 
                    name="age"
                    placeholder="...enter age"
                    onChange={this.changeHandler}
                    value={this.props.age}
                    />
                </p>
                <p>Email: 
                    <input 
                    name="email"
                    placeholder="...enter email"
                    onChange={this.changeHandler}
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
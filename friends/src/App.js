import React from 'react';
import axios from 'axios';

import Friends from './components/Friends';
import FriendForm from './components/FriendForm';

import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      friends: [],
      newFriend: {
      name: '',
      age: '',
      email: ''
      }
    }
  }

  componentDidMount(){
    axios
      .get('http://localhost:5000/friends')
      .then( res => { 
        console.log(res)
        this.setState({ friends: res.data })
       })
       .catch( err => {
        console.log(err)
       })
  }

  changeHandler = (e) => {
    this.setState({ 
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value 
       }
    })
  }

  submitForm = e => {
    e.preventDefault();
    this.setState({ 
      friends: [...this.state.friends, this.state.newFriend],
      newFriend: ""
     })
  }

    render(){
    return (
      <div className="App">
        <h1>Lego Friends</h1>
        <FriendForm
        submitForm={this.submitForm}
        changeHandler={this.changeHandler}
        friend={this.state.friend}
        />
        <h2>Friends List</h2>
        <div className="all-my-friends"> 
          <Friends
          friends={this.state.friends}
          />
        </div>

      </div>
    );
  }
}

export default App;

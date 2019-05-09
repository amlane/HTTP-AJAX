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
      name: '',
      age: '',
      email: ''
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

  submitForm = e => {
    e.preventDefault();
    let newLegoFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }

    this.setState(prevState => {
      return {
        friends: [...prevState.friends, newLegoFriend]
      }
    })
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

    render(){
    return (
      <div className="App">
        <h1>Lego Friends</h1>
        <FriendForm
        submitForm={this.submitForm}
        changeHandler={this.changeHandler}
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

import React from 'react';
import axios from 'axios';

import Friends from './components/Friends';
import FriendForm from './components/FriendForm';

import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      friends: []
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

    render(){
    return (
      <div className="App">
        <h1>Friends</h1>
        <FriendForm />
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

import React from 'react';
import Friends from './components/Friends';
import axios from 'axios';
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
        <h2>This is my friend's list:</h2>
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

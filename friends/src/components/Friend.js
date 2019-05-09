import React from 'react';

class Friend extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            friend: null
        }
    }

    deleteFriend = e => {
        e.preventDefault();
        this.props.deleteFriend(this.state.friend.id)
    }

    render(){
        const num = Math.floor(Math.random() * 9)
        if(!this.props.friend) {
            return <h2>Loading Friends...</h2>
        }
        return (
            <div className="friend-card">
                <img className="profile-pic" src={`https://randomuser.me/api/portraits/lego/${num}.jpg`} alt="lego person" />
                <section className="friend-info">
                    <p><strong>Name:</strong> {this.props.friend.name}</p>
                    <p><strong>Age:</strong> {this.props.friend.age}</p>
                    <p><strong>Email:</strong> {this.props.friend.email}</p>
                    <button className="edit-btn">e</button>
                    <button onClick={this.props.deleteFriend} className="delete-btn">X</button>
                </section>
            </div>
        )
    }
}

export default Friend;

import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import { Card } from './card Movie/Card'
import Cicker from './Cilcker/Cicker'
import Chat from './Chat/Chat'
import Todo from './todo/TodoList'

class App extends React.Component {
  state = {
    value: 0,
    card: [{
      pic: "https://i.pinimg.com/236x/60/a6/02/60a6028ef10d95d1085514e5ae9d50b6--landscape-photos-beautiful-pictures.jpg",
      title: "card 1",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, non. Molestias accusamus autem quas vero rem ratione perferendis iste laborum!",

    },
    {
      pic: "https://i.pinimg.com/236x/60/a6/02/60a6028ef10d95d1085514e5ae9d50b6--landscape-photos-beautiful-pictures.jpg",
      title: "card 2",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, non. Molestias accusamus autem quas vero rem ratione perferendis iste laborum!",

    },
    {
      pic: "https://i.pinimg.com/236x/60/a6/02/60a6028ef10d95d1085514e5ae9d50b6--landscape-photos-beautiful-pictures.jpg",
      title: "card 3",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, non. Molestias accusamus autem quas vero rem ratione perferendis iste laborum!",

    },
    {
      pic: "https://i.pinimg.com/236x/60/a6/02/60a6028ef10d95d1085514e5ae9d50b6--landscape-photos-beautiful-pictures.jpg",
      title: "card 4",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, non. Molestias accusamus autem quas vero rem ratione perferendis iste laborum!",

    },
    {
      pic: "https://i.pinimg.com/236x/60/a6/02/60a6028ef10d95d1085514e5ae9d50b6--landscape-photos-beautiful-pictures.jpg",
      title: "card 5",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, non. Molestias accusamus autem quas vero rem ratione perferendis iste laborum!",

    }
    ]
  }
  plus = () => this.setState({ value: this.state.value + 1 });
  refresh = () => this.setState({ value: 0 });
  minus = () => this.setState({ value: this.state.value - 1 });

  render() {
    const card = this.state.card;


    return (
      <div className="App">
        <Todo />
        <Cicker value={this.state.value} plus={this.plus} refresh={this.refresh} minus={this.minus} />
        <div className="container_card">
          <div className="Navbar"></div>
          <div className="card">
            {card.map(obj => <Card pic={obj.pic} title={obj.title} content={obj.content} />)}
          </div>
        </div>
        <Chat />
      </div>
    );

  }

}

export default App;

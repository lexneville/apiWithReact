import React from 'react';
import axios from 'axios';
import './App.css';
import {Users} from './components/Users.js'


class App extends React.Component {

  state = {
    users: [
      // {
      //   name: "David",
      //   city: "Cornwall",
      // },
      // {
      //   name: "Peter",
      //   city: "Reading",
      // },
    ],
    loading: false,
  }
//the following fuction runs once the page has completely loaded
  async componentDidMount() {
    this.setState({
      loading: true,
    })
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(response.data);
    this.setState({
      users: response.data,
      loading: false,
    })
  }


  render() {

    const allUsers = this.state.users.map( (object) => {
      return <h1 key={object.id} >My name is {object.name} and I'm from {object.address.city}</h1>
    } )

    return (
      <div>
        <Users data={allUsers} loading={this.state.loading}/>
      </div>

    );
  }
}

export default App;

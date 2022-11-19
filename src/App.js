import  logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from "react-bootstrap"
import Contacts from "./Components/Contacts";
import AddContact from "./Components/AddContact";





class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      users:[
        {
          name:"Sandra",
          number: "0245896531",
          location: "Pluto",
          id: "jankj",
        },
        {
          name:"Yenuwaa",
          number: "0601111155",
          location: "Venus",
          id: "jeclj"
        },
        {
          name:"Maabena",
          number: "0803674837",
          location: "Jupiter",
          id:"alaska"
        },
       
      ]
    }
  }
  addNewUser = (user)=>{
    user.id= Math.random().toString()
    this.setState({
      users:[...this.state.users, user]
    })
  }
  deleteUser=(id)=>{
    let undeletedUsers=this.state.users.filter(user=> user.id !== id )
    this.setState({
      users: undeletedUsers
    })
  }
  editUser=(id, updateUser)=>{
    this.setState({
      users: this.state.users.map(user  => user.id === id ? updateUser : user)
    })
  }
  render(){
  return (
      <>
        <Container fluid style={{marginTop : "2rem"}}>
        <Row>
          <Col md="4">
            <AddContact addUser={this.addNewUser}/>
          </Col>
          <Col>
            <Contacts usersData = {this.state.users} 
            deleteUser= {this.deleteUser}
            editUser={this.editUser}/>
          </Col>
        </Row>
      </Container>
    
     </>
    
  );
  }
}
export default App;

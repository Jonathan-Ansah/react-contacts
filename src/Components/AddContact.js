import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddContact extends Component {
    constructor(props){
        super(props);
        this.state={
            name: "",
            number: "",
            location: ""
        }
    }
    handleChange = (e)=>{
        e.preventDefault();
        this.setState({
            [e.target.name]:e.target.value
        })
        console.log(this.state);
    }
    handleSubmit =(e) =>{
        e.preventDefault();
        this.props.addUser(this.state);
        this.setState({
            name: "",
            number: "",
            location: "",
        })
    }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" name="name"
            value={this.state.name} onChange={this.handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Number</Form.Label>
            <Form.Control type="number" placeholder="Enter Number" 
            name="number"
            value={this.state.number} onChange={this.handleChange} 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder="Enter Location" name="location" 
            value={this.state.location} onChange={this.handleChange} />
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddContact;
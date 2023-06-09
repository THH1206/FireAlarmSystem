import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../../fe/src/App.css';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://192.168.1.185:8090/api/listSensor`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => 
        <li>
          <Card className='card' style={{ width: '18rem' }}>
      <Card.Header>
        <Card.Title className='title'><h3>Fire Warning</h3></Card.Title>
      </Card.Header>
      <Card.Img className="anh" variant="top" src= 'https://conganquangbinh.gov.vn/wp-content/uploads/2019/12/%E1%BA%A3nh-b%C3%A1o-ch%C3%A1y-114.jpg'/>
      <ListGroup>
        <ListGroup.Item className='conditon'>Company ID: {person.companyID}</ListGroup.Item>
        <ListGroup.Item className='conditon'>Company Name: {person.companyName}</ListGroup.Item>
        <ListGroup.Item className='conditon'>Time: {person.time}</ListGroup.Item>
	      <ListGroup.Item className='conditon'>Status: {person.status}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      </Card.Body>
    </Card>
          </li>)}
      </ul>
    )
  }
}
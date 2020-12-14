import React from "react"
import "../src/index.css"
import Header from "./components/Header";
import Container from "react-bootstrap/Container"
import Form from "./components/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import City from "./components/City"
import Temperatures from "./components/Temperatures"
import Wind from "./components/Wind"
import 'bootstrap/dist/css/bootstrap.min.css';
const API={
  key:"218ea5458ae26e3b821a14a0c6828736",
  base:"https://api.openweathermap.org/data/2.5/"
}

class App extends React.Component {
  constructor(){
    super()
    this.state={
      cityName:'',
      country:'',
      temperature:'0',
      date:'',
      temp_min:'',
      temp_max:'',
      humidity:'',
      wind:''
    }
  }

  handleCallback =(childData)=>{

    this.setState({cityName:childData.cityName,country:childData.country,date:childData.date,temperature:childData.temperature,temp_min:childData.temp_min,temp_max:childData.temp_max,wind:childData.wind});
  }
  
  render(){
    return (
      <Container fluid className="custom">
        <Row className="mt-1">
          <Header></Header>
        </Row>
        <Row className="mt-5 justify-content-center">
            <Form parentCallback={this.handleCallback}></Form>
        </Row>
        <Row className="mt-5">
            <City data={this.state}></City>
            <Temperatures data={this.state}></Temperatures>
            <Wind data={this.state}></Wind>
        </Row>
        
      </Container>
      
    );
  }
  
}

export default App;

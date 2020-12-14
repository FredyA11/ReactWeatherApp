import React from "react"
import logo192 from "../images/logo192.png"
import "./styles/image.css"
import "../index.css"
import "../components/styles/city.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from "react-bootstrap/Col"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
class Header extends React.Component{
    constructor(props){
        super(props)

        this.state={
            city:"",
            country:"",
            date:""
        }
    }
    
    render(){
        console.log("Pais:"+this.props.data.country);
        console.log("Ciudad:"+this.props.data.cityName);
        if(this.props.data.cityName!=""){
            return(
                <Col xl={3} className="ml-4">
                    <Jumbotron fluid className="shadow rounded customJ">
                        <Container className="text-center">
                            <h1> {this.props.data.cityName},{this.props.data.country} </h1>
                            <h4> {this.props.data.date} </h4>
                        </Container>
                    </Jumbotron>
                    
                   
                </Col>
            )
        }
        else{
            return(
                <div>

                </div>
            )
        }
        
    }
}

export default Header
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

//218ea5458ae26e3b821a14a0c6828736
import axios from 'axios';
class Form extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props.data);
        this.state={
            cityName:"Merida",
            country:"MX",
            temperature:'0',
            date:'',
            temp_min:'',
            temp_max:'',
            humidity:'',
            wind:''
        }
        var self=this;
    }

    handleChange = (e) =>{
        this.setState({cityName:e.target.value})
    }

    clickButton = (e) =>{
        console.log("La ciudad es:"+this.state.cityName);
        const data={
            city:this.state.cityName
        }
        axios.get('https://api.openweathermap.org/data/2.5/weather?q='+this.state.cityName+'&appid=218ea5458ae26e3b821a14a0c6828736&units=metric', {
            
          })
          .then((response)=> {
              console.log(response.data);
            console.log(response.data.main.temp);
            var fullDate="";
            var d= new Date();
            
            var d2= d.getDate();
            var dateObj = new Date();
            var month = dateObj.getUTCMonth() + 1; //months from 1-12
            var day = dateObj.getUTCDate();
            var year = dateObj.getUTCFullYear();

            var newdate = day + "/" + month + "/" + year;
            
            this.setState({cityName:response.data.name,country:response.data.sys.country,temperature:response.data.main.temp,date:newdate,temp_min:response.data.main.temp_min,temp_max:response.data.main.temp_max,wind:response.data.wind.speed});
            this.props.parentCallback(this.state);
            axios.get('https://api.openweathermap.org/data/2.5/forecast?q='+this.state.cityName+'&appid=218ea5458ae26e3b821a14a0c6828736&units=metric', {
                    
                })
                .then((response)=> {
                    console.log("Forecast:"+response.data);
                    //api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}

                })
                .catch((error)=> {
                    console.log(error);
                })
          })
          .catch((error)=> {
            console.log(error);
          })
    }

    render(){
        return(
            
            <Col xl={5}>
                <Row className="justify-content-center">
                    <Col xl={12} className="justify-content-center">
                    <input type="text" onChange={this.handleChange} placeholder="City Name . . ." className="form-control input-custom rounded-pill shadow" />
                    </Col>
                    
                </Row>
                <Row className="mt-4 justify-content-center">
                    <Col xl={3} >
                    <button className="btn btn-primary rounded-pill d-block" onClick={this.clickButton}   >Get Weather</button>
                    </Col>
                    
                </Row>
            </Col>
            
        )
    }
    
}

export default Form
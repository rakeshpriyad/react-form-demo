import React, { Component } from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
class MyEntryForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            age: '',
            salary: '',
            city: '',
            userState: '',
            country: '',
            dob: new Date()
        }
    }


    handleDateChange = date => {
        this.setState({
            dob: date
        });
    }

    handleNameChange = props => {
		this.setState({ name: props.value })
    }
    
    handleAgeChange = props => {
		this.setState({ age: props.value })
    }
    
    handleSalaryChange = props => {
		this.setState({ salary: props.value })
    }
    
    handleCityChange = props => {
		this.setState({ city: props.value })
	}

    handleStateChange = props => {
		this.setState({ userState: props.value })
    }
    
    handleCountryChange = props => {
		this.setState({ country: props.value })
    }
   /*  componentDidMount(){
        alert(this.state);
    } */

    handleSubmit = event => {
		alert(`${this.state}`)
		event.preventDefault()
	}

    render() {
        const { name, age, salary,city, userState,country,dob } = this.state
        const Label = Form.Label;
        const Control = Form.Control;
        const Row = Form.Row;
        return (
            <div>
                <Form sm="20" onSubmit={this.handleSubmit}>
                    <Row sm="10">
                        <Label column sm="2">
                            Name
                        </Label>
                        <Col sm="10">
                            <Control type="text" placeholder="Name"    />
                        </Col>
                    </Row>
                    <Row>
                        <Label column sm="2">
                            Age
                        </Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder="Age" value={age}  onChange={this.handleAgeChange}/>
                        </Col>
                    </Row>
                    <Row>
                        <Label column sm="2">
                            Salary
                        </Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder="Salary" value={salary}  onChange={this.handleSalaryChange}/>
                        </Col>
                    </Row>
                    <Row>
                        <Label column sm="2">
                            City
                        </Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder="City" value={city}  onChange={this.handleCityChange}/>
                        </Col>
                    </Row>
                    <Row>
                        <Label column sm="2">
                            State
                        </Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder="State" value={userState}  onChange={this.handleStateChange}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="2">
                            <Label >
                                Country
                        </Label>
                        </Col>
                        <Col sm="10">
                            <Form.Control type="text" placeholder="Country" value={country}  onChange={this.handleCountryChange}/>
                        </Col>
                    </Row>
                    <Row >
                        <Col sm="2">
                            <Label>DOB</Label>
                        </Col>
                        <Col sm="10">
                            <DatePicker value={dob}
                                selected={this.state.dob}
                                onChange={this.handleDateChange}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Button >Submit</Button>
                    </Row>
                </Form>
            </div>
        )
    }
}

export default MyEntryForm

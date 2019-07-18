
import React from 'react';
import { Row, Form, Col, Button } from 'react-bootstrap';
import Select from 'react-select';


const states = [
    {
        label: 'Bihar',
        value: 'BH'
    },
    {
        label: 'Uttar Pradesh',
        value: 'UP'
    },
    {
        label: 'Madhya Pradesh',
        value: 'MP'
    },
    {
        label: 'West Bengal',
        value: 'WB'
    }
];
class RegisterUser extends React.Component {

    constructor(props) {
        super(props);
        this.initialState = {
            userName: '',
            age: '',
            dob: '',
            addr: '',
            city: '',
            addrState: '',
            country: '',

        }
        this.state = this.initialState;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        

    }

   

    /* getStates = () =>
    new Promise(resolve =>
        setTimeout(() => {
            resolve(states);
        }, 1000)
    ); */


    /* componentDidMount() {
        this.getStates().then(data =>
            this.setState({ addrStates: data, addrState: this.addrState}));
    } */

    handleSelectChange = addrState => {
        this.setState({ addrState });
        console.log(`Option selected:`, addrState);
      };
    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        alert(` ${this.state.userName} ${this.state.age} ${this.state.dob} ${this.state.addr} ${this.state.city} ${this.state.addrState.value} ${this.state.country}`);
    }

    createOptions = () =>
        this.state.addrStates.length
            ? this.state.addrStates.map(data => (
                <option key={data.id} value={data.id}>
                    {data.name}
                </option>
            ))
            : "";

    states = () => this.states;
    render() {
       // const { addrState } = this.state;
        return (
            <div>
                <h2>User registration</h2>
                <Row>
                    <Col sm={6}>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="userName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="userName"
                                    value={this.state.userName}
                                    onChange={this.handleChange}
                                    placeholder="User Name" />
                            </Form.Group>
                            <Form.Group controlId="age">
                                <Form.Label>Age</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="age"
                                    value={this.state.age}
                                    onChange={this.handleChange}
                                    placeholder="Age" />
                            </Form.Group>
                            <Form.Group controlId="dob">
                                <Form.Label>DOB</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="dob"
                                    value={this.state.dob}
                                    onChange={this.handleChange}
                                    placeholder="DOB" />
                            </Form.Group>
                            <Form.Group controlId="addr">
                                <Form.Label>addr</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="addr"
                                    value={this.state.addr}
                                    onChange={this.handleChange}
                                    placeholder="Address" />
                            </Form.Group>
                            <Form.Group controlId="city">
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="city"
                                    value={this.state.city}
                                    onChange={this.handleChange}
                                    placeholder="City" />
                            </Form.Group>
                           
                            {/* <Form.Group controlId="exampleForm.addrState">
                                <Form.Label>State</Form.Label>
                                {
                                    <Form.Control as="select" dataLiveSearch="true">
                                        {this.createOptions()}
                                    </Form.Control>
                                }
                            </Form.Group> */}
 <Select
        value={this.state.addrState}
        onChange={this.handleSelectChange}
        options={states}
      />
                            
                            <Form.Group controlId="country">
                                <Form.Label>Country</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="country"
                                    value={this.state.country}
                                    onChange={this.handleChange}
                                    placeholder="Country" />
                            </Form.Group>
                            <Form.Group>
                                <Button variant="success" type="submit">Save</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default RegisterUser;

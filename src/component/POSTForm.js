import React, { Component } from 'react'
import axios from 'axios'
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
import Button from 'react-bootstrap/Button';

export class POSTForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userId:'',
             title: '',
             body:'',
             startDate: new Date()
        }
       // this.handleDateChange = this.handleDateChange.bind(this);
    }

    
    handleDateChange = date => {
        this.setState({
            startDate: date
          });
    }
    // handleDateChange(date) {
    //     this.setState({
    //       startDate: date
    //     });
    //   }

    changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

        submitHandler = (e) => {
            e.preventDefault()
            console.log(e)
            axios
			.post('https://jsonplaceholder.typicode.com/posts', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})

        }
    
    render() {
            const { userId, title, body } = this.state
            return (
                <div>
                    <form onSubmit={this.submitHandler}>
                        <div>
                            <input
                                type="text"
                                name="userId"
                                value={userId}
                                onChange={this.changeHandler}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="title"
                                value={title}
                                onChange={this.changeHandler}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="body"
                                value={body}
                                onChange={this.changeHandler}
                            />
                        </div>
                        <div>

                        <DatePicker
        selected={this.state.startDate}
        onChange={this.changeHandler}
      />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
        )
    }
}

export default POSTForm

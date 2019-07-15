import React, { Component } from 'react'
import MyForm from './MyForm';
import POSTForm from './POSTForm';
import PostList from './PostList';

export class Test extends Component {
    render() {
        return (
            <div>
               <PostList />
              My component 
              <POSTForm />
              <MyForm /> 
            </div>
        )
    }
}

export default Test

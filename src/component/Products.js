import React, { Component } from 'react'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import cellEditFactory from 'react-bootstrap-table2-editor';

const API = 'http://localhost:8080/';
const DEFAULT_QUERY = 'products';

export default class Product extends Component {
    constructor(){
        super();
        this.state = {
            products: [],
            isLoading: false,
            error: null,
          };
        // fix the this value
      }

      componentDidMount() {
        this.setState({ isLoading: true });
    
        fetch(API + DEFAULT_QUERY)
          .then(response => {
            if (response.ok) {
                let rdata =response.json();
                console.log(rdata)
              return rdata;
            } else {
              throw new Error('Something went wrong ...');
            }
          })
          .then(data => {
              console.log(data)
              this.setState({ products: data, isLoading: false })
        }
          )
          .catch(error => this.setState({ error, isLoading: false }));
      }
    
    render() {
        const { products, isLoading, error } = this.state;
        const columns = [{
            dataField: 'id',
            text: 'Product ID',
            sort: true
          }, {
            dataField: 'name',
            text: 'Product Name',
            sort: true,
            filter: textFilter()
          }, {
            dataField: 'price',
            text: 'Product Price',
            sort: true,
            filter: textFilter()
          }];
        if (error) {
            return <p>{error.message}</p>;
          }
      
          if (isLoading) {
            return <p>Loading ...</p>;
          }
      
          return (
              
            <BootstrapTable  keyField='id' data={ products } columns={ columns }  filter={ filterFactory() } pagination={ paginationFactory()} cellEdit={ cellEditFactory({ mode: 'click' }) }/>
          );
    }   
}

import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import EditProduct from './EditProduct';

const API = 'http://localhost:8080/';
const DEFAULT_QUERY = 'products';

class ProductList extends Component {

  constructor(props) {
    super(props);
    this.state = {products: [], isLoading: true};
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({products: data, isLoading: false}));
  }

  async remove(id) {
    await fetch(API + DEFAULT_QUERY + `/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedProducts = [...this.state.products].filter(i => i.id !== id);
      this.setState({products: updatedProducts});
    });
  }

  render() {
    const {products, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const productList = products.map(product => {
      return <tr key={product.id}>
        <td style={{whiteSpace: 'nowrap'}}>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
        <ButtonGroup>
            <Button size="sm" color="primary" tag={Link} to={"/products/" + product.id}>Edit</Button>
            <Button size="sm" color="danger" onClick={() => this.remove(product.id)}>Delete</Button>
          </ButtonGroup>
        </td>
      </tr>
    });

    return (
        
      
      <div>
        <Container fluid>
          <div className="float-right">
            <Button color="success" tag={Link} to="/products/new">Add Product</Button>
          </div>
          <h3>Product List</h3>
          <Table className="mt-4">
            <thead>
            <tr>
              <th width="20%">Id</th>
              <th width="20%">Product Name</th>
              <th>Events</th>
              <th width="10%">price</th>
            </tr>
            </thead>
            <tbody>
            {productList}
            </tbody>
          </Table>
        </Container>
      </div>
      
    );
  }
}

export default ProductList;
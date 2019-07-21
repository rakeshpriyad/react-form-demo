import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
const API = 'http://localhost:8080/products';
const DEFAULT_QUERY = 'products';
class EditProduct extends Component {

    emptyProduct = {
        id: '',
        name: '',
        price: '',
        createdAt: '',
        updatedAt: '',
    };

    constructor(props) {
        super(props);
        this.state = {
            product: this.emptyProduct
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /* async componentDidMount() {
      //if (this.props.match.params.id !== 'new') {
       const productdata = await (await fetch(`/products/${this.props.match.params.id}`)).json();
       this.setState({product: productdata});
      //} 
    } */
    async componentDidMount() {
    if ( this.props.match.params.id !== 'new' ) {
        try {
          const response = await (await fetch(API+`/${this.props.match.params.id}`)).json();
          console.log(response)
          this.setState({product: response});
        } catch (error) {
          this.props.history.push('/');
        }
      }
    }
   


handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let product = { ...this.state.product };
    product[name] = value;
    this.setState({ product });
}

async handleSubmit(event) {
    event.preventDefault();
    const {product, csrfToken} = this.state;

    await fetch(API, {
      method: (product.id) ? 'PUT' : 'POST',
      headers: {
        'X-XSRF-TOKEN': this.state.csrfToken,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product),
      credentials: 'include'
    });
   // this.props.history.push('/products');
  }

async handleSubmit(event) {
    event.preventDefault();
    const { product } = this.state;

    await fetch(API , {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product),
    });
    this.props.history.push('/products');
}

render() {
    const { product } = this.state;
    const title = <h2>{'Add Product'}</h2>;

    return <div>
        <Container>
            {title}
            <Form onSubmit={this.handleSubmit}>

                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" name="name" id="name" value={product.name || ''}
                        onChange={this.handleChange} autoComplete="name" />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input type="text" name="description" id="description" value={product.description || ''}
                        onChange={this.handleChange} autoComplete="name" />
                </FormGroup>
                <FormGroup>
                    <Label for="price">Price</Label>
                    <Input type="text" name="price" id="price" value={product.price || ''}
                        onChange={this.handleChange} autoComplete="Price" />
                </FormGroup>

                <div className="row">
                    <FormGroup className="col-md-4 mb-3">
                        <Label for="createdAt">createdAt</Label>
                        <Input type="text" name="createdAt" id="createdAt" value={product.createdAt || ''}
                            onChange={this.handleChange} autoComplete="createdAt" />
                    </FormGroup>

                </div>
                <FormGroup>
                    <Button color="primary" type="submit">Save</Button>{' '}
                    <Button color="secondary" tag={Link} to="/groups">Cancel</Button>
                </FormGroup>
            </Form>
        </Container>
    </div>
}
}

//export default ;
export default withRouter(EditProduct);
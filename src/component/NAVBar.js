import React from 'react'
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contacts from './Contacts'
import RegisterUser from './RegisterUser'
import { Navbar, Nav, NavDropdown, FormControl, Form, Button } from 'react-bootstrap'
import ProductList from './ProductList';
import EditProduct from './EditProduct';

function NAVBar() {
    return (
        <Router >

            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={NavLink} to='/home' exact>Home</Nav.Link>
                        <Nav.Link as={NavLink} to='/products' >Products</Nav.Link>
                        <Nav.Link as={NavLink} to='/register' exact>Register</Nav.Link>
                        <Nav.Link as={NavLink} to='/about'>About</Nav.Link>
                        <Nav.Link as={NavLink} to='/contacts'>Contacts</Nav.Link>
                        <NavDropdown title="Help" id="basic-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to='/home'>Action</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/about'>Another action</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/contacts'>Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={NavLink} to='/home'>Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <Route >
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contacts" component={Contacts} />
                <Route path="/register" component={RegisterUser} />
                <Route path="/products" component={ProductList} />
                <Route path="/products/:id" component={EditProduct} />
            </Route>
        </Router>
    )
}

export default NAVBar

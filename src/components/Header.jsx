import React from 'react'
import { Badge, Container, Dropdown, FormControl, Navbar, Nav } from 'react-bootstrap'
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu'
import {FaShoppingCart } from "react-icons/fa"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' style={{height: 80}}>
        <Container>
            <Navbar.Brand>
             <Link href="/">Shopping cart</Link>  
            </Navbar.Brand>
            <Navbar.Text className='search'>
              <FormControl style={{width: 500}}
                placeholder="search"
                className='m-auto'
              />
            </Navbar.Text>
            <Nav>
              <Dropdown>
                <Dropdown.Toggle>
                  <FaShoppingCart color='white' fontSize="25px"  />
                  <Badge>{100}</Badge>
                </Dropdown.Toggle>
                <DropdownMenu style={{ minWidth: 370 }}>
                 <span style={{ padding: 10}} > Cart is empty</span>
                </DropdownMenu>
              </Dropdown>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header
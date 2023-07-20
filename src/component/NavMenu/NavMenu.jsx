import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import {list} from "../../App"
function NavMenu() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-0">
            <list.Consumer>
              {
                (list)=>{
                  return(
                    list.map((menu)=>{
                      return(
                        <Nav.Link>{menu}</Nav.Link>
                      )
                    })
                  )
                }
              }
            </list.Consumer>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavMenu
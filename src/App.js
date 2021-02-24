import React from 'react';
import {BrowserRouter as  Router, Route, Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Allen Anthony Nagtalon',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Resume', path: '/resume'},
      ],
      home: {
        title: 'This is the title.',
        subTitle: 'This is the subtitle',
        text: 'This is the text'
      } ,
      about: {
        title: 'About Me'
      } ,
      resume: {
        title: 'My Resume'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Allen A Nagtalon</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/">About</Link>
                <Link className="nav-link" to="/">Resume</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Router>      
    );
  }
}

export default App;

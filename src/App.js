import React from 'react'
import {BrowserRouter as  Router, Route, Link} from "react-router-dom"
import Container from 'react-bootstrap/Container'
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
          <p>Placeholder</p>
        </Container>
      </Router>      
    );
  }
}

export default App;

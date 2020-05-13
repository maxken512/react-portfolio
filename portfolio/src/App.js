import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer.js'
import HomePage from './views/homepage.js'
import ContactPage from './views/contactpage.js'
import AboutPage from './views/aboutpage.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Max Kennedy',
      headerLinks: [
        {title:'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'Have a look at some of my projects'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: "Let's Connect"
      }
    }
  };
  render() {
    return (
      <Router>
        <Container className= 'p-0' fluid= {true}>
          
          <Navbar className='border-bottom'>
            <Navbar.Brand>Max Kenendy</Navbar.Brand>
            <Navbar.Toggle aria-controls= "navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              
              <Link className= "nav-link" to= "/">Home</Link>
              <Link className= "nav-link" to= "/about">About</Link>
              <Link className= "nav-link" to= "/contact">Contact</Link>
             
            </Navbar.Collapse>
            
          </Navbar>
          <Route path= '/' exact render={() => <HomePage title= {this.state.home.title} />} />
          <Route path= '/about' exact render={() => <AboutPage title= {this.state.about.title} />} />
          <Route path= '/contact' exact render={() => <ContactPage title= {this.state.contact.title} />} />
        <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;

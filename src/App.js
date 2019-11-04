import React, { useState } from 'react';
import logo from './logo.svg';
import { Navbar, Button, Collapse, Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Typography from './Typography/Typography';
import Drawer from './Drawer/Drawer';

function App() {
  const [open, setOpen] = useState(false);
  const showComponents = function() {
    console.log('helllo')
  }
  return (
    <div id="differentlyAbled">
      <header>
        <Navbar bg="dark" variant="dark" fixed="top">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {' React Bootstrap'}
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Button variant="link"
                onClick={() => setOpen(!open)}
                aria-controls="nav-drawer"
                aria-expanded={open}
              >
                <img
                  alt="ham"
                  src={logo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />
              </Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
        <Collapse in={open}>
          <div id="nav-drawer">
            <Drawer openComponent={showComponents}/>
          </div>
        </Collapse>
      </header>
      <main>
        <Typography />
      </main>
    </div>
  );
}

export default App;

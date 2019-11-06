import React, { useState } from 'react';
import logo from './logo.svg';
import { Navbar, Button, Collapse, Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Typography from './Typography/Typography';
import Drawer from './components/Drawer/Drawer';

function App() {
  const [open, setOpen] = useState(false);
  const showComponents = function(e) {
    document.querySelector('#main-content').focus();
  }
  return (
    <div id="differentlyAbled">
      <header>
        <Navbar bg="dark" variant="dark" fixed="top">
          <Navbar.Brand tabIndex="0" onClick={showComponents} onKeyDown={showComponents}>
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {' Skip to main content'}
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
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
          </Navbar.Collapse>
        </Navbar>
        <Collapse in={open}>
          <div id="nav-drawer">
            <Drawer/>
          </div>
        </Collapse>
      </header>
      <main id="main-content" tabIndex="-1">
        <Container>
          <Typography />
        </Container>
      </main>
    </div>
  );
}

export default App;

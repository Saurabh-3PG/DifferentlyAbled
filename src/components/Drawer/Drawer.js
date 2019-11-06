
import React, { Component } from 'react';
import logo from '../../logo.svg';
import { Navbar, Button, Collapse, Container, Row, Col } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Dropdown } from "../Dropdown";  

class Drawer extends Component {
    render(props) {
        return (
            
                <Container>
                    <Row>
                        <Col>
                        <Router>
                            <div>
                                <ul>
                                <li>
                                    <Link to="/">Dropdown</Link>
                                </li>
                                </ul>

                                <Switch>
                                <Route exact path="/">
                                <Dropdown label='Dropdown'>
                                    <option value={0}> { 'Option 1' }</option>
                                    <option value={1}>{ 'Option 2' }</option>
                                </Dropdown>
                                </Route>
                                {/* <Route path="/about">
                                    <About />
                                </Route>
                                <Route path="/dashboard">
                                    <Dashboard />
                                </Route> */}
                                </Switch>
                            </div>
                            </Router>

                            <ul>
                                <li>
                                    <a href>
                                        <span>
                                            <img alt=""
                                                src={logo}
                                                width="30"
                                                height="30"
                                            />
                                        </span>
                                        <h1>
                                            Typography
                        </h1>
                                    </a>
                                </li>
                                <li>
                                    <a href>
                                        <span>
                                            <img alt=""
                                                src={logo}
                                                width="30"
                                                height="30"
                                            />
                                        </span>
                                        <h1>
                                            Images
                        </h1>
                                    </a>
                                </li>
                                <li>
                                    <a href>
                                        <span>
                                            <img alt=""
                                                src={logo}
                                                width="30"
                                                height="30"
                                            />
                                        </span>
                                        <h1>
                                            Buttons
                        </h1>
                                    </a>
                                </li>
                                <li>
                                    <a href>
                                        <span>
                                            <img alt=""
                                                src={logo}
                                                width="30"
                                                height="30"
                                            />
                                        </span>
                                        <h1>
                                            Dropdown
                        </h1>
                                    </a>
                                </li>
                                <li>
                                    <a href>
                                        <span>
                                            <img alt=""
                                                src={logo}
                                                width="30"
                                                height="30"
                                            />
                                        </span>
                                        <h1>
                                            Modal
                        </h1>
                                    </a>
                                </li>
                                <li>
                                    <a href>
                                        <span>
                                            <img alt=""
                                                src={logo}
                                                width="30"
                                                height="30"
                                            />
                                        </span>
                                        <h1>
                                            Tooltips
                        </h1>
                                    </a>
                                </li>
                                <li>
                                    <a href>
                                        <span>
                                            <img alt=""
                                                src={logo}
                                                width="30"
                                                height="30"
                                            />
                                        </span>
                                        <h1>
                                            Popover
                        </h1>
                                    </a>
                                </li>
                                <li>
                                    <a href>
                                        <span>
                                            <img alt=""
                                                src={logo}
                                                width="30"
                                                height="30"
                                            />
                                        </span>
                                        <h1>
                                            Flipcard
                        </h1>
                                    </a>
                                </li>
                                <li>
                                    <a href>
                                        <span>
                                            <img alt=""
                                                src={logo}
                                                width="30"
                                                height="30"
                                            />
                                        </span>
                                        <h1>
                                            Lists
                        </h1>
                                    </a>
                                </li>
                                <li>
                                    <a href>
                                        <span>
                                            <img alt=""
                                                src={logo}
                                                width="30"
                                                height="30"
                                            />
                                        </span>
                                        <h1>
                                            Form
                        </h1>
                                    </a>
                                </li>
                                <li>
                                    <a href>
                                        <span>
                                            <img alt=""
                                                src={logo}
                                                width="30"
                                                height="30"
                                            />
                                        </span>
                                        <h1>
                                            Range Sliders
                        </h1>
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <a href>
                                <h1>
                                    Final templete
                    </h1>
                            </a>
                        </Col>
                    </Row>
                </Container>
        );
    }
}
export default Drawer;

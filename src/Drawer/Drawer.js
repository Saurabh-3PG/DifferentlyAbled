
import React, { Component } from 'react';
import logo from './../logo.svg';
import { Navbar, Button, Collapse, Container, Row, Col } from 'react-bootstrap';

class Drawer extends Component {
    render(props) {
        return (
            
                <Container>
                    <Row>
                        <Col>
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

import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Dropdown } from "../components/Dropdown";
import Slider from "../components/Slider";
import Typography from "../components/Typography";
import './HomePage.css';

class HomePage extends React.Component {
    render(props) {
        return (
            <main className="focus" id="main">
                <Container fluid>
                    <Router>
                        <Row>
                            <Col className="margin-top" sm={3}>
                                <ListGroup>
                                    <ListGroup.Item>
                                        <Link to="/">Dropdown</Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link to="/Slider">Slider</Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link to="/Typography">Typography</Link>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col className="margin-top" sm={9} id="main-container">
                                <Switch>
                                        <Route exact path="/">
                                            <Dropdown label='Dropdown'>
                                                <option value={0}> {'Option 1'}</option>
                                                <option value={1}>{'Option 2'}</option>
                                            </Dropdown>
                                        </Route>
                                        <Route path="/Slider">
                                            <Slider label={'Slider'} min={0} max={10}
                                                ariaLabel={'Slider sample'}
                                            />
                                        </Route>
                                        <Route path="/Typography">
                                            <Typography />
                                        </Route>
                                </Switch>
                            </Col>
                        </Row>
                    </Router>
                </Container>
            </main>
        );
    }
}
export default HomePage;
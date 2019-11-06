import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Dropdown } from "../components/Dropdown";
import Slider from "../components/Slider";
import './HomePage.css';

class HomePage extends React.Component {
    render(props) {
        return (
            <Container id="main" tabIndex="-1">
            <Router>
                <Row>
                    <Col sm={4}>
                        
                            <div>
                                <ul>
                                    <li>
                                        <Link to="/">Dropdown</Link>
                                    </li>
                                    <li>
                                        <Link to="/Slider">Slider</Link>
                                    </li>
                                </ul>
                            </div>
                    </Col>
                    <Col sm={8}>
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
                        </Switch>
                    </Col>
                </Row>
                </Router>
            </Container>
        );
    }
}
export default HomePage;
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
import { Lang } from '../Lang/Lang.js';
import Details from './Details';
import dropdownHtml from '../Images/dropdown/Html.png';
import dropdownReactJs from '../Images/dropdown/ReactJs.png';
import dropdownRenderedHTML from '../Images/dropdown/RenderedHTML.png';
import sliderHtml from '../Images/slider/Html.png';
import sliderReactJs from '../Images/slider/ReactJs.png';
import sliderRenderedHTML from '../Images/slider/RenderedHTML.png';

class HomePage extends React.Component {
    componentDidMount() {
        console.log(Lang);
    }
    render(props) {
        return (
            <main className="focus" id="main">
                <Container fluid>
                    <Router>
                        <Row>
                            <Col className="margin-top" sm={3}>
                                <ListGroup>
                                    <ListGroup.Item>
                                        <Link to="/">Home</Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link to="/Dropdown">Dropdown</Link>
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
                                            <hr />
                                            <Details
                                                heading={Lang.dropdown.heading} 
                                                subheading={Lang.dropdown.subheading} 
                                                paragraph={Lang.dropdown.maindiscription} 
                                                AccessiblityTips={Lang.dropdown.AccessiblityTips}
                                                CodeExampleHtml={dropdownHtml}
                                                CodeExampleReactJs={dropdownReactJs}
                                                RenderedHTML={dropdownRenderedHTML}
                                                GitLink={Lang.dropdown.GitLink}
                                            />
                                            <hr />
                                        </Route>
                                        <Route exact path="/Dropdown">
                                            <Dropdown label='Dropdown'>
                                                <option value={0}> {'Option 1'}</option>
                                                <option value={1}>{'Option 2'}</option>
                                            </Dropdown>
                                            <hr />
                                            <Details
                                                heading={Lang.dropdown.heading} 
                                                subheading={Lang.dropdown.subheading} 
                                                paragraph={Lang.dropdown.maindiscription} 
                                                AccessiblityTips={Lang.dropdown.AccessiblityTips}
                                                CodeExampleHtml={dropdownHtml}
                                                CodeExampleReactJs={dropdownReactJs}
                                                RenderedHTML={dropdownRenderedHTML}
                                                GitLink={Lang.dropdown.GitLink}
                                            />
                                            <hr />
                                        </Route>
                                        <Route path="/Slider">
                                            <Slider label={'Slider'} min={0} max={10}
                                                ariaLabel={'Slider sample'}
                                            />
                                            <hr />
                                            <Details
                                                heading={Lang.slider.heading} 
                                                subheading={Lang.slider.subheading} 
                                                paragraph={Lang.slider.maindiscription} 
                                                AccessiblityTips={Lang.slider.AccessiblityTips}
                                                CodeExampleHtml={sliderHtml}
                                                CodeExampleReactJs={sliderReactJs}
                                                RenderedHTML={sliderRenderedHTML}
                                                GitLink={Lang.slider.GitLink}
                                            />
                                            <hr />
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
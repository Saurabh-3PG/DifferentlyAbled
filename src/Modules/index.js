import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Dropdown, Slider, Typography, Checkbox } from "../components";
//Modules
import { InputPage } from "./InputPage";
import { TextareaPage } from "./TextareaPage";
//lang
import { Lang } from '../Lang/Lang.js';
//layout
import Introduction from './Introduction';
import Details from '../Layout/Details';
// dropdown images
import dropdownHtml from '../Images/dropdown/Html.png';
import dropdownReactJs from '../Images/dropdown/ReactJs.png';
import dropdownRenderedHTML from '../Images/dropdown/RenderedHTML.png';
// slider images
import sliderHtml from '../Images/slider/Html.png';
import sliderReactJs from '../Images/slider/ReactJs.png';
import sliderRenderedHTML from '../Images/slider/RenderedHTML.png';

class HomePage extends React.Component {
    componentDidMount() {
        console.log(Lang);
    }
    render(props) {
        return (
            <div>
                <Container>
                    <Router>
                        <Row>
                            <Col className="margin-top" sm={3}>
                                <ListGroup>
                                    <ListGroup.Item>
                                        <Link to="/">Introduction</Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link to="/Dropdown">Dropdown</Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link to="/Slider">Slider</Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link to="/Checkbox">Checkbox</Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link to="/Input">Input [type="text"]</Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link to="/Textarea">TextareaPage</Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link to="/Typography">Typography</Link>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col sm={9} id="main-container">
                                <main id="">
                                <Switch>
                                        <Route exact path="/">
                                            <Introduction />
                                            <h1 title="Hooray! When someone describes a site as accessible, they mean that any user can use all its features and content, regardless of how the user accesses the web even and especially users with physical or mental impairments.">Hover</h1>
                                        </Route>
                                        <Route exact path="/Dropdown">
                                            <hr />
                                            <Dropdown label='Dropdown'>
                                                <option value={0}> {'Option 1'}</option>
                                                <option value={1}>{'Option 2'}</option>
                                            </Dropdown>
                                            <hr />
                                            <Details
                                                heading={Lang.components.dropdown.heading} 
                                                subheading={Lang.components.dropdown.subheading} 
                                                paragraph={Lang.components.dropdown.maindiscription} 
                                                AccessiblityTips={Lang.components.dropdown.AccessiblityTips}
                                                CodeExampleHtml={dropdownHtml}
                                                CodeExampleReactJs={dropdownReactJs}
                                                RenderedHTML={dropdownRenderedHTML}
                                                GitLink={Lang.components.dropdown.GitLink}
                                            />
                                            <hr />
                                        </Route>
                                        <Route path="/Slider">
                                            <hr />
                                            <Slider label={'Slider'} min={0} max={10}
                                                ariaLabel={'Slider sample'}
                                            />
                                            <hr />
                                            <Details
                                                heading={Lang.components.slider.heading} 
                                                subheading={Lang.components.slider.subheading} 
                                                paragraph={Lang.components.slider.maindiscription} 
                                                AccessiblityTips={Lang.components.slider.AccessiblityTips}
                                                CodeExampleHtml={sliderHtml}
                                                CodeExampleReactJs={sliderReactJs}
                                                RenderedHTML={sliderRenderedHTML}
                                                GitLink={Lang.components.slider.GitLink}
                                            />
                                            <hr />
                                        </Route>
                                        <Route path="/Checkbox">
                                            <Checkbox id='chkSample' label='Sample checkbox'/>
                                        </Route>
                                        <Route path="/Input">
                                            <InputPage />
                                        </Route>
                                        <Route path="/Textarea">
                                            <TextareaPage />
                                        </Route>
                                        <Route path="/Typography">
                                            <Typography />
                                        </Route>
                                </Switch>
                                </main>
                            </Col>
                        </Row>
                    </Router>
                </Container>
            </div>
        );
    }
}
export default HomePage;
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
import PageIntro from '../Layout/PageIntro';
// dropdown images
import dropdownHtml from '../Images/dropdown/Html.png';
import dropdownReactJs from '../Images/dropdown/ReactJs.png';
import dropdownRenderedHTML from '../Images/dropdown/RenderedHTML.png';
// slider images
import sliderHtml from '../Images/slider/Html.png';
import sliderReactJs from '../Images/slider/ReactJs.png';
import sliderRenderedHTML from '../Images/slider/RenderedHTML.png';
// checkbox images
import checkbox_Html from '../Images/checkbox/Html.png';
import checkbox_ReactJs from '../Images/checkbox/ReactJs.png';
import checkbox_RenderedHTML from '../Images/checkbox/RenderedHTML.png';

class HomePage extends React.Component {
    componentDidMount() {
        // console.log(Lang);
    }
    render(props) {
        return (
            <div>
                <Container>
                    <Router>
                        <Row>
                            <Col className="margin-top" md={3}>
                                <ListGroup>
                                    <ListGroup.Item>
                                        <Link to="/">Introduction</Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link to="/dropdown">Dropdown</Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link to="/slider">Slider</Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link to="/checkbox">Checkbox</Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link to="/textInput">Text Input</Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link to="/textarea">Textarea</Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link to="/typography">Typography</Link>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col md={9} id="main-container">
                                <main id="">
                                <Switch>
                                        <Route exact path="/">
                                            <Introduction />
                                        </Route>
                                        <Route exact path="/dropdown">
                                            <PageIntro
                                                heading={Lang.modules.dropdown.heading}
                                                subheading={Lang.modules.dropdown.subheading}
                                                paragraph={Lang.modules.dropdown.maindiscription}
                                            />
                                            <hr />
                                            <Dropdown label='Dropdown'>
                                                <option value={0}> {'Option 1'}</option>
                                                <option value={1}>{'Option 2'}</option>
                                            </Dropdown>
                                            <hr />
                                            <Details module="dropdown" default="default"
                                                CodeExampleHtml={dropdownHtml}
                                                CodeExampleReactJs={dropdownReactJs}
                                                RenderedHTML={dropdownRenderedHTML}
                                            />
                                            <hr />
                                        </Route>
                                        <Route path="/slider">
                                            <PageIntro
                                                heading={Lang.modules.slider.heading}
                                                subheading={Lang.modules.slider.subheading}
                                                paragraph={Lang.modules.slider.maindiscription} 
                                            />
                                            <hr />
                                            <Slider label={'Slider'} min={0} max={10}
                                                ariaLabel={'Slider sample'}
                                            />
                                            <hr />
                                            <Details module="slider" default="default"
                                                CodeExampleHtml={sliderHtml}
                                                CodeExampleReactJs={sliderReactJs}
                                                RenderedHTML={sliderRenderedHTML}
                                            />
                                            <hr />
                                        </Route>
                                        <Route path="/checkbox">
                                            <PageIntro
                                                heading={Lang.modules.checkbox.heading}
                                                subheading={Lang.modules.checkbox.subheading}
                                                paragraph={Lang.modules.checkbox.maindiscription}
                                            />
                                            <hr />
                                            <Checkbox id='chkSample' label='Sample checkbox'/>
                                            <hr />
                                            <Details module="checkbox" default="default"
                                                CodeExampleHtml={checkbox_Html}
                                                CodeExampleReactJs={checkbox_ReactJs}
                                                RenderedHTML={checkbox_RenderedHTML}
                                            />
                                        </Route>
                                        <Route path="/textInput">
                                            <InputPage />
                                        </Route>
                                        <Route path="/textarea">
                                            <TextareaPage />
                                        </Route>
                                        <Route path="/typography">
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
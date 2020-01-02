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
// checkbox images
import checkbox_Html from '../Images/checkbox/Html.png';
import checkbox_ReactJs from '../Images/checkbox/ReactJs.png';
import checkbox_RenderedHTML from '../Images/checkbox/RenderedHTML.png';

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
                                        <Link to="/Textarea">Textarea</Link>
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
                                        </Route>
                                        <Route exact path="/Dropdown">
                                            <hr />
                                            <Dropdown label='Dropdown'>
                                                <option value={0}> {'Option 1'}</option>
                                                <option value={1}>{'Option 2'}</option>
                                            </Dropdown>
                                            <hr />
                                            <Details
                                                heading={Lang.modules.dropdown.heading} 
                                                subheading={Lang.modules.dropdown.subheading} 
                                                paragraph={Lang.modules.dropdown.maindiscription} 
                                                AccessiblityTips={Lang.modules.dropdown.AccessiblityTips}
                                                CodeExampleHtml={dropdownHtml}
                                                CodeExampleReactJs={dropdownReactJs}
                                                RenderedHTML={dropdownRenderedHTML}
                                                GitLink={Lang.modules.dropdown.GitLink}
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
                                                heading={Lang.modules.slider.heading} 
                                                subheading={Lang.modules.slider.subheading} 
                                                paragraph={Lang.modules.slider.maindiscription} 
                                                AccessiblityTips={Lang.modules.slider.AccessiblityTips}
                                                CodeExampleHtml={sliderHtml}
                                                CodeExampleReactJs={sliderReactJs}
                                                RenderedHTML={sliderRenderedHTML}
                                                GitLink={Lang.modules.slider.GitLink}
                                            />
                                            <hr />
                                        </Route>
                                        <Route path="/Checkbox">
                                            <hr />
                                            <Checkbox id='chkSample' label='Sample checkbox'/>
                                            <hr />
                                            <Details
                                                heading={Lang.modules.checkbox.heading}
                                                subheading={Lang.modules.checkbox.subheading}
                                                paragraph={Lang.modules.checkbox.maindiscription}
                                                AccessiblityTips={Lang.modules.checkbox.AccessiblityTips}
                                                CodeExampleHtml={checkbox_Html}
                                                CodeExampleReactJs={checkbox_ReactJs}
                                                RenderedHTML={checkbox_RenderedHTML}
                                                GitLink={Lang.modules.checkbox.GitLink}
                                            />
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
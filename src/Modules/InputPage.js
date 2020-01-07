import React from 'react';
import { Row, Col } from 'react-bootstrap';
//Lang
import { Lang } from '../Lang/Lang.js';
//components
import { Input } from "../components/Input";
import Details from '../Layout/Details';
import PageIntro from '../Layout/PageIntro';
// checkbox images
import inputText_Html from '../Images/inputText/Html.png';
import inputText_ReactJs from '../Images/inputText/ReactJs.png';
import inputText_RenderedHTML from '../Images/inputText/RenderedHTML.png';

export class InputPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render(props) {
        return (
            <Row>
                <Col>
                    <PageIntro
                        heading={Lang.modules.inputText.heading}
                        subheading={Lang.modules.inputText.subheading}
                        paragraph={Lang.modules.inputText.maindiscription}
                    />
                    <hr />
                    <Input id="inputText" label={this.props.label} />
                    <hr />
                    <Details module="inputText" default="default"
                        CodeExampleHtml={inputText_Html}
                        CodeExampleReactJs={inputText_ReactJs}
                        RenderedHTML={inputText_RenderedHTML}
                    />
                </Col>
            </Row>
        );
    }
}
// export default Inputpage;
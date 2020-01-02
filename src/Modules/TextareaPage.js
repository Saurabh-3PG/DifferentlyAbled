import React from 'react';
import { Row, Col } from 'react-bootstrap';
//Lang
import { Lang } from '../Lang/Lang.js';
//components
import { Textarea } from "../components/Textarea";
import Details from '../Layout/Details';
// checkbox images
import textarea_Html from '../Images/textarea/Html.png';
import textarea_ReactJs from '../Images/textarea/ReactJs.png';
import textarea_RenderedHTML from '../Images/textarea/RenderedHTML.png';

export class TextareaPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render(props) {
        return (
            <Row>
                <Col>
                    <Textarea id="textarea" ariaId="aria_textarea" label={Lang.modules.textarea.heading}></Textarea>
                    <hr />
                    <Details
                        heading={Lang.modules.textarea.heading}
                        subheading={Lang.modules.textarea.subheading}
                        paragraph={Lang.modules.textarea.maindiscription}
                        AccessiblityTips={Lang.modules.textarea.AccessiblityTips}
                        CodeExampleHtml={textarea_Html}
                        CodeExampleReactJs={textarea_ReactJs}
                        RenderedHTML={textarea_RenderedHTML}
                        GitLink={Lang.modules.textarea.GitLink}
                        
                    />
                </Col>
            </Row>
        );
    }
}
// export default Inputpage;
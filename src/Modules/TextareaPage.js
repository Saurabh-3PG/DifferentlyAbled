import React from 'react';
import { Row, Col } from 'react-bootstrap';
//Lang
import { Lang } from '../Lang/Lang.js';
//components
import { Textarea } from "../components/Textarea";

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
                    <Textarea id="textarea" ariaId="aria_textarea" label={Lang.modules.Textarea.heading}></Textarea>
                </Col>
            </Row>
        );
    }
}
// export default Inputpage;
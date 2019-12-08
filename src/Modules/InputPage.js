import React from 'react';
import { Row, Col } from 'react-bootstrap';
//Lang
import { Lang } from '../Lang/Lang.js';
//components
import { Input } from "../components/Input";

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
                    <Input id="inputText" label={Lang.modules.InputPage.heading}></Input>
                </Col>
            </Row>
        );
    }
}
// export default Inputpage;
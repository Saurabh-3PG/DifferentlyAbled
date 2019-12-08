import React from 'react';
import { Row, Col } from 'react-bootstrap';
//Lang
import { Lang } from '../Lang/Lang.js';
//layout
import PageIntro from '../Layout/PageIntro';

class Introduction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render(props) {
        return (
            <Row>
                <Col>
                    <hr />
                    <PageIntro
                        heading={Lang.default.Home.heading}
                        subheading={Lang.default.Home.subheading}
                        paragraph={Lang.default.Home.discription}
                    />
                    <hr />
                    {/* others */}
                </Col>
            </Row>
        );
    }
}
export default Introduction;
import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
//lang
import { Lang } from '../../Lang/Lang';
class PageHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render(props) {

        return (
            <header>
                <Container>
                    <Row>
                        <Col>
                            <h1 dangerouslySetInnerHTML={{ __html: Lang.default.heading }} />
                        </Col>
                    </Row>
                </Container>
            </header>
        );
    }
}
export default PageHeader;
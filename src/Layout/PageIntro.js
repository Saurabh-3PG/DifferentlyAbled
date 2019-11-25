import React from 'react';
import { Row, Col } from 'react-bootstrap';



class PageIntro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render(props) {
        let heading = <h1>{this.props.heading}</h1>;
        let subheading = <div><b><i>{this.props.subheading}</i></b></div>;
        let paragraph = <p>{this.props.paragraph}</p>;
        return (
            <Row>
                <Col>
                    {this.props.heading ? heading : null}
                    {this.props.subheading ? subheading : null}
                    {this.props.paragraph ? paragraph : null}
                </Col>
            </Row>
        );
    }
}
export default PageIntro;
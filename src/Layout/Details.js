import React from 'react';
import { Image, Row, Col, Tabs, Tab } from 'react-bootstrap';
import { Lang } from '../Lang/Lang.js';
import PageIntro from './PageIntro';

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render(props) {
        return (
            <div id="details">
                <PageIntro 
                    heading={this.props.heading}
                    subheading={this.props.subheading}
                    paragraph={this.props.paragraph}
                />
                <hr />
                <div>
                    <b><i>{Lang.default.AccessiblityTips}</i></b>
                </div>
                <ul>
                    {
                        this.props.AccessiblityTips.map(AccessiblityTips => {
                            return (
                                <li key={AccessiblityTips.tip}>
                                    {AccessiblityTips.tip}
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                <Row className="margin-bottom">
                    <Col>
                        <h2><i>{Lang.default.CodeExample}</i></h2>
                        <Tabs defaultActiveKey="Html" transition={false}>
                            <Tab eventKey="Html" title="Html">
                                <Image src={this.props.CodeExampleHtml} alt={Lang.default.CodeExample} />
                            </Tab>
                            <Tab eventKey="ReactJs" title="ReactJs">
                                <Image src={this.props.CodeExampleReactJs} alt={Lang.default.CodeExample} />
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
                <hr />
                <Row className="margin-bottom">
                    <Col>
                        <h3><i>{Lang.default.RenderedHTML}</i></h3>
                        <Image src={this.props.RenderedHTML} alt={Lang.default.RenderedHTML} />
                    </Col>
                </Row>
                <hr />
                <Row className="margin-bottom">
                    <Col>
                        <h3><i>{Lang.default.GitLink}</i></h3>
                        <a href={this.props.GitLink}>{this.props.GitLink}</a>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Details;
import React from 'react';
import { Image, Row, Col, Tabs, Tab } from 'react-bootstrap';
import { Lang } from '../../Lang/Lang.js';
class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moduleDetails: Lang.modules[this.props.module],
            default: Lang[this.props.default]
        };
    }
    render(props) {
        return (
            <div id="details">
                 <Row className="margin-bottom">
                    <Col>
                        <h2><i>{this.state.default.CodeExample}</i></h2>
                        <Tabs defaultActiveKey="Html" transition={false}>
                            <Tab eventKey="Html" title="Html">
                                <Image src={this.props.CodeExampleHtml} alt={this.state.default.CodeExample} />
                            </Tab>
                            <Tab eventKey="ReactJs" title="ReactJs">
                                <Image src={this.props.CodeExampleReactJs} alt={this.state.default.CodeExample} />
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
                <hr />
                <Row className="margin-bottom">
                    <Col>
                        <h3><i>{this.state.default.RenderedHTML}</i></h3>
                        <Image src={this.props.RenderedHTML} alt={this.state.default.RenderedHTML} />
                    </Col>
                </Row>
                <hr />
                <div>
                    <h3>{this.state.moduleDetails.accessiblity.heading}</h3>
                </div>
                <hr />
                {
                    this.state.moduleDetails.accessiblity.tips.map(tips => {
                        return (
                            <div>
                                <div><b><i>{tips.for}</i></b></div>
                                <ol>
                                    {
                                        tips.steps.map(steps => {
                                            return (
                                                <li>{steps.step}</li>
                                            )
                                        })
                                    }
                                </ol>
                            </div>
                        )
                    })
                }
                <hr />
                <Row className="margin-bottom">
                    <Col>
                        <h3><i>{this.state.default.GitLink}</i></h3>
                        <a href={this.state.moduleDetails.GitLink} target="_blank" rel="noopener noreferrer">{this.state.moduleDetails.GitLink}</a>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Details;
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
                        <h3><i dangerouslySetInnerHTML={{ __html: this.state.default.RenderedHTML }} /></h3>
                        <Image src={this.props.RenderedHTML} alt={this.state.default.RenderedHTML} />
                    </Col>
                </Row>
                <hr />
                 <Row className="margin-bottom">
                    <Col>
                        <h2><i dangerouslySetInnerHTML={{ __html: this.state.default.CodeExample }} /></h2>
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
                <div>
                    <h3 dangerouslySetInnerHTML={{ __html: this.state.moduleDetails.accessiblity.heading }}/>
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
                                                <li dangerouslySetInnerHTML={{ __html: steps.step }}/>
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
                        <h3><i dangerouslySetInnerHTML={{ __html: this.state.default.GitLink }} /></h3>
                        <a href={this.state.moduleDetails.GitLink} target="_blank" rel="noopener noreferrer" dangerouslySetInnerHTML={{ __html: this.state.moduleDetails.GitLink }} />
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Details;
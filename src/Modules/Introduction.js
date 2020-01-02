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
        console.log('Lang.default.Home.levelA.table', Lang.default.Home.standards.levelA.table);
        return (
            <Row>
                <Col>
                    <hr />
                    <PageIntro
                        heading={Lang.default.Home.heading}
                        subheading={Lang.default.Home.subheading}
                        paragraph={Lang.default.Home.discription}
                        list={Lang.default.Home.typeOfDisabilities}
                    />
                    <hr />
                    <div className="discriptions margin-bottom">
                        <PageIntro
                            sec_heading={Lang.default.Home.guideline.heading}
                            subheading={Lang.default.Home.guideline.subheading}
                            paragraph={Lang.default.Home.guideline.discription}
                            list={Lang.default.Home.guideline.principle}
                        />
                        <hr />
                        <PageIntro
                            sec_heading={Lang.default.Home.levelsOfConformance.heading}
                            subheading={Lang.default.Home.levelsOfConformance.subheading}
                            paragraph={Lang.default.Home.levelsOfConformance.discription}
                            list={Lang.default.Home.levelsOfConformance.principle}
                        />
                        <hr />
                        <PageIntro
                            sec_heading={Lang.default.Home.bestPractices.heading}
                            subheading={Lang.default.Home.bestPractices.subheading}
                            paragraph={Lang.default.Home.bestPractices.discription}
                            list={Lang.default.Home.bestPractices.principle}
                        />
                        <hr />
                        <PageIntro
                            sec_heading={Lang.default.Home.manualAccessibility.heading}
                            subheading={Lang.default.Home.manualAccessibility.subheading}
                            paragraph={Lang.default.Home.manualAccessibility.discription}
                            list={Lang.default.Home.manualAccessibility.waysToTest}
                        />
                        <hr />
                        <PageIntro
                            sec_heading={Lang.default.Home.standards.levelA.heading}
                            table={Lang.default.Home.standards.levelA.table}
                        />
                        <hr />
                        <PageIntro
                            sec_heading={Lang.default.Home.standards.levelAA.heading}
                            table={Lang.default.Home.standards.levelAA.table}
                        />
                    </div>
                    {/* others */}
                </Col>
            </Row>
        );
    }
}
export default Introduction;
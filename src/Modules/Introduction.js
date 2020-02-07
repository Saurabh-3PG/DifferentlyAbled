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
        // console.log('Lang.modules.home.levelA.table', Lang.modules.home.standards.levelA.table);
        return (
            <Row>
                <Col>
                    <hr />
                    <PageIntro
                        heading={Lang.modules.home.heading}
                        subheading={Lang.modules.home.subheading}
                        paragraph={Lang.modules.home.discription}
                        list={Lang.modules.home.typeOfDisabilities}
                    />
                    <hr />
                    <div className="discriptions margin-bottom">
                        <PageIntro
                            sec_heading={Lang.modules.home.guideline.heading}
                            subheading={Lang.modules.home.guideline.subheading}
                            paragraph={Lang.modules.home.guideline.discription}
                            list={Lang.modules.home.guideline.principle}
                        />
                        <hr />
                        <PageIntro
                            sec_heading={Lang.modules.home.levelsOfConformance.heading}
                            subheading={Lang.modules.home.levelsOfConformance.subheading}
                            paragraph={Lang.modules.home.levelsOfConformance.discription}
                            list={Lang.modules.home.levelsOfConformance.principle}
                        />
                        <hr />
                        <PageIntro
                            sec_heading={Lang.modules.home.bestPractices.heading}
                            subheading={Lang.modules.home.bestPractices.subheading}
                            paragraph={Lang.modules.home.bestPractices.discription}
                            list={Lang.modules.home.bestPractices.principle}
                        />
                        <hr />
                        <PageIntro
                            sec_heading={Lang.modules.home.manualAccessibility.heading}
                            subheading={Lang.modules.home.manualAccessibility.subheading}
                            paragraph={Lang.modules.home.manualAccessibility.discription}
                            list={Lang.modules.home.manualAccessibility.waysToTest}
                        />
                        <hr />
                        <PageIntro
                            sec_heading={Lang.modules.home.standards.levelA.heading}
                            table={Lang.modules.home.standards.levelA.table}
                        />
                        <hr />
                        <PageIntro
                            sec_heading={Lang.modules.home.standards.levelAA.heading}
                            table={Lang.modules.home.standards.levelAA.table}
                        />
                    </div>
                    {/* others */}
                </Col>
            </Row>
        );
    }
}
export default Introduction;
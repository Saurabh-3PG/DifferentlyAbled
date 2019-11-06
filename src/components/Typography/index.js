
import React from 'react';
import { Row, Image } from 'react-bootstrap';
import headingUsingDiv from '../../Images/heading-using-div.png';
import headingUsinghTag from '../../Images/heading-using-hTag.png';
import paragraph from '../../Images/paragraph.png';
import listdefault from '../../Images/list-hTag.png';

class Typography extends React.Component {

    render(props) {
        return (
            <div id="typography">
                <Row className="heading">
                    <h1>Adding Heading</h1>
                    <p>
                        There are six heading elements — <code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>, <code>&lt;h3&gt;</code>, <code>&lt;h4&gt;</code> , <code>&lt;h5&gt;</code >, and <code>&lt;h6&gt;</code >. Each element represents a different level of content in the document; <code>&lt;h1&gt;</code > represents the main heading, <code>&lt;h2&gt;</code > represents subheadings, <code>&lt;h3&gt;</code > represents sub-subheadings, and so on.
                    </p>
                    <h2>Different ways of creating headings</h2>
                        <ol>
                            <li>
                                Using default heading tag ie: h1 h2 h3 ... h6

                                <h3>Using default html header tag, we donot required to add any additional aria to make it heading</h3>
                            <Image src={headingUsinghTag} alt="heading Using html heading Tag" />

                            </li>
                            <li>Converting any div level element to header using html aria attributes
                                <div role="heading" aria-level="3">Creating header using aria attributes.</div>
                            <Image src={headingUsingDiv} alt="heading Using aria attribute" />
                            </li>
                        </ol>
                </Row>
                <Row className="paragraph">
                    <h1>Adding Paragraphs</h1>
                    
                    <p>
                        Paragraph styles are used to add meaning to body copy. A theme usually has at least a primary and secondary style for it's body copy, with sometimes additional styles to add emphasis or deemphasis depending on use.
                    </p>

                    <Image src={paragraph} alt="paragraph" />
                </Row>
                <Row className="list">
                    <h1>Adding List</h1>
                    <h2>Different ways of creating headings</h2>
                    <ol>
                        <li>
                            Adding list using default HTML list tags
                            <Image src={listdefault} alt="list" />
                        </li>
                        <li>
                            Forcing any element to behave as list using aria attributes
                            <Image src={listdefault} alt="list" />
                        </li>
                    </ol>
                </Row>
            </div>
        );
    }
}
export default Typography;

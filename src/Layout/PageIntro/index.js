import React from 'react';
import { Row, Col } from 'react-bootstrap';



class PageIntro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    } 
    render(props) {
    let heading = <h1 dangerouslySetInnerHTML={{ __html: this.props.heading}} />;
        let sec_heading = <h2 dangerouslySetInnerHTML={{ __html: this.props.sec_heading}} />;
        let subheading = <div><i dangerouslySetInnerHTML={{ __html: this.props.subheading }}/></div>;
        let paragraph = <p dangerouslySetInnerHTML={{ __html: this.props.paragraph}} />;
        let list, table = null
        if (this.props.list){
            list = <ul>{
                this.props.list.map(list => {
                    return (
                        <li key={list.item} dangerouslySetInnerHTML={{ __html: list.item}} />
                    )
                }
                )}</ul>
        }
        if (this.props.table) {
            list = <table>{
                this.props.table.map(table => {
                    return (
                        <tr className={table.class}>
                            <td dangerouslySetInnerHTML={{ __html: table.guideline }} />
                            <td dangerouslySetInnerHTML={{ __html: table.summary }} />
                        </tr>
                    )
                }
                )}</table>
        }
        return (
            <Row>
                <Col>
                    {this.props.heading ? heading : null}
                    {this.props.sec_heading ? sec_heading : null}
                    {this.props.subheading ? subheading : null}
                    <br />
                    {this.props.paragraph ? paragraph : null}
                    {list}
                    {table}
                </Col>
            </Row>
        );
    }
}
export default PageIntro;
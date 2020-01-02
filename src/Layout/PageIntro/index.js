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
        let sec_heading = <h2>{this.props.sec_heading}</h2>;
        let subheading = <div><b><i>{this.props.subheading}</i></b></div>;
        let paragraph = <p>{this.props.paragraph}</p>;
        let list, table = null
        if (this.props.list){
            list = <ul>{
                this.props.list.map(list => {
                    return (
                        <li key={list.item}>{list.item}</li>
                    )
                }
                )}</ul>
        }
        if (this.props.table) {
            list = <table>{
                this.props.table.map(table => {
                    return (
                        <tr className={table.class}>
                            <td>{table.guideline}</td>
                            <td>{table.summary}</td>
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
                    {this.props.paragraph ? paragraph : null}
                    {list}
                    {table}
                </Col>
            </Row>
        );
    }
}
export default PageIntro;
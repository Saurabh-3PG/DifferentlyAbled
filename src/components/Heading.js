import React from "react";

class PageIntro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render(props) {
    let heading;
    if (this.props.headingLevel === 1) {
      heading = <h1>{this.props.headingDiscription}</h1>;
    } else if (this.props.headingLevel === 2) {
      heading = <h2>{this.props.headingDiscription}</h2>;
    }
    return { heading };
  }
}
export default PageIntro;

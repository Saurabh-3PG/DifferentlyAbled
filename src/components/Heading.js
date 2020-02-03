import React from "react";

class Heading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render(props) {
    let heading;
    if (this.props.level === 1) {
      heading = <h1>{this.props.title}</h1>;
    } else if (this.props.level === 2) {
      heading = <h2>{this.props.title}</h2>;
    }
    return { heading };
  }
}
export default Heading;

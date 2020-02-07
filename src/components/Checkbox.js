import React from "react";
import PropTypes from "prop-types";

export class Checkbox extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      checked: props.checked || false
    };
  }

  handleChange = e => {
    // console.log(e.target.checked);
    this.setState({checked: !e.target.checked});
    if(this.props.onChange) {
      this.props.onChange(!e.target.checked);
    }
  };

  render() {
    const { id, checked, label } = this.props;
    this.setState.checked = checked
    return (
      <label>
        <input
          id={id}
          type="checkbox"
          checked={this.state.checked}
          aria-checked={this.state.checked}
          onChange={this.handleChange}
          onKeyPress={this.handleChange}
        />
        {label}
      </label>
    );
  }
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func
};

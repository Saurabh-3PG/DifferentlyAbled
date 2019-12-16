import React from "react";
import PropTypes from "prop-types";

export class Checkbox extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      checked: props.checked || false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const isChecked = event.target.checked;
    this.setState({
      checked: isChecked
    }, () => {
      if(this.props.onChange) {
        this.props.onChange(!isChecked);
      }
    });
  }

  render() {
    const { id, label } = this.props;
    console.log('checkbox render');
    return (
      <label>
        <input
          id={id}
          type="checkbox"
          name="test"
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

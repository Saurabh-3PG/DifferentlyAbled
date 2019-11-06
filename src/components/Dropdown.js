import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

const validateOptionsProps = (props, propName, componentName) => {
  if (props[propName]) {
    const value = props[propName];

    if (!Array.isArray(value) && typeof value !== 'object') {
      return new Error(`Invalid prop '${propName}' of 
                        type ${typeof value} supplied to '${componentName}', expected array or object.`);
    }
  }
};

export class Dropdown extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
    change: PropTypes.func,
    initialValue: PropTypes.any,
    value: PropTypes.any,
    children: PropTypes.array,
    parser: PropTypes.func,
    options: validateOptionsProps,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    customClass: PropTypes.string
    // name: PropTypes.string,
    // tooltipOffset: PropTypes.number,
    // tooltip: PropTypes.string
  };

  static defaultProps = {
    parser: parseInt,
    isAriaLabelRequired: true
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: this.props.initialValue
    };
  }

  handleChange(event) {
    let value = this.props.parser(event.target.value);

    this.setState({
      value
    });

    if (this.props.change) {
      this.props.change(value);
    }
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  buildMenu() {
    if (!this.props.options) {
      return this.props.children;
    }

    if (Array.isArray(this.props.options)) {
      return this.props.options.map((node, key) => <option key={key} value={node.value}>{node.label}</option>);
    } else {
      return map(this.props.options, (value, key) => <option key={key} value={key}>{value}</option>);
    }
  }

  render () {
    return (
      <select className={this.props.customClass ? (`${this.props.customClass} form-control`) : 'form-control'}
        onChange={this.handleChange}
        value={this.props.hasOwnProperty('value') ? this.props.value : this.state.value}
        disabled={this.props.disabled ? 'disabled' : ''}
        tabIndex='0'
        // aria-label={`${this.props.label}, ${this.props.tooltip} `}
        aria-label={`${this.props.label}`}
        // data-tip data-for={`tooltip-${this.props.name}`} data-event='focus' data-event-off='keydown blur'
        // data-offset={`{'top': ${this.props.tooltipOffset || 10}}`}
      >
        { this.buildMenu() }
      </select>
    );
  }
}

export default Dropdown;

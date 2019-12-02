import React from 'react';
import PropTypes from 'prop-types';

export class Slider extends React.Component {
  static propTypes = {
    step: PropTypes.number,
    name: PropTypes.string,
    onChange: PropTypes.func,
    onUpdate: PropTypes.func,
    initialValue: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    tabIndex: PropTypes.number,
    format: PropTypes.object,
    scale: PropTypes.number,
    disabled: PropTypes.bool,
    valueNow: PropTypes.func,
    label: PropTypes.string,
    id: PropTypes.string
  };

  static defaultProps = {
    step: 1,
    min: 0,
    max: 100,
    scale: 1,
    disabled: false
  };

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.initialValue / this.props.scale
    };
  }

  handleChangeInputRange(event) {
    let currentValue = event.target.value;
    this.setState({
      value: currentValue
    });
    if (this.props.onUpdate) {
      this.props.onUpdate([`${currentValue}`]);
    }
    if(this.props.onChange) {
    this.props.onChange(currentValue * this.props.scale);
    }
  }

  render() {
    let min = this.props.min / this.props.scale;
    let max = this.props.max / this.props.scale;
    return <div>
      <input
        type='range'
        id={this.props.id}
        aria-valuenow={this.state.value}
        aria-valuetext={this.props.valueNow}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-label={this.props.label}
        min={min}
        max={max}
        disabled={this.props.disabled}
        step={this.props.step / this.props.scale}
        onChange={(event) => this.handleChangeInputRange(event)}
        value={this.state.value}
      />
    </div>;
  }
}

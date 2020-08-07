import React from 'react';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

class SliderComponent extends React.Component {
    constructor(props) {
      super(props);
      console.log(props)
      this.state = {
        min: this.props.min,
        max: this.props.max,
        fromYear: this.props.min,
        toYear: this.props.max
      };
    }
  
    onSliderChange = value => {
      //log(value);
      this.props.handler(value)
      this.setState({
        fromYear: +value[0] || this.state.min,
        toYear: +value[1] || this.state.max
      });
    };
  
    render() {
      return (
        <div>
          <label>Selected Years: ({this.state.fromYear} - {this.state.toYear})</label>
          <br />
          <Range
            defaultValue={[this.state.min, this.state.max]}
            min={this.state.min}
            max={this.state.max}
            onChange={this.onSliderChange}
          />
        </div>
      );
    }
  }

  export default SliderComponent;
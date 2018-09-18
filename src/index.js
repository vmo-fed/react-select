import React from "react";
import ReactDOM from "react-dom";
import Select  from '../';

class HelloMessage extends React.Component {
  constructor(props) {
    super(props);

    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(item) {
    console.log('Selected value: ' + item);
  }

  render() {
    return (
      <div>
        <Select onSelect={this.onSelect} data={['1', '2', '3', '4']} initValue="请选择..." />
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="Jane" />, mountNode);

import React from "react";
import ReactDOM from "react-dom";
import Select  from '../';

class HelloMessage extends React.Component {
  constructor(props) {
    super(props);

    this.onSelect = this.onSelect.bind(this);
  }

  onSelect({name, value}) {
    console.log('Selected name: ' + name);
    console.log('Selected name: ' + value);
  }

  render() {
    const data = [
      {name: '1', value: 'value 1'},
      {name: '2', value: 'value 2'},
      {name: '3', value: 'value 3'},
    ];
    return (
      <div>
        <Select onSelect={this.onSelect} data={data} initValue="请选择..." />
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="Jane" />, mountNode);

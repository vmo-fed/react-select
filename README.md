# react-select

### 安装

```shell
npm i @vmo-fed/react-select -S
```

### 使用

```jsx
import Select from '@vmo-fed/react-select';

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
```

[在线DEMO](https://codesandbox.io/s/jlll407869)

[在线文档](https://vmo-fed.github.io/react-select/doc/#/react-select/doc/react-select)

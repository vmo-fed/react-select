# react-tab

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
```

[在线DEMO](https://codesandbox.io/s/jlll407869)

[在线文档](https://vmo-fed.github.io/react-select/doc/#/react-select/doc/react-select)

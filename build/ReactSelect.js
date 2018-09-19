import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import jss from 'jss';
import preset from 'jss-preset-default';
import ReactOutsideHandle from 'react-outside-handle';
jss.setup(preset());
const styles = {
  common: {
    'border-radius': '4px',
    border: '1px solid rgb(196, 202, 212)'
  },
  selectBtn: {
    extend: 'common',
    'user-select': 'none',
    padding: '2px 8px',
    'line-height': '20px'
  },
  selectMenu: {
    overflow: 'hidden',
    'margin-top': '5px'
  },
  selectOption: {
    padding: '4px 8px',
    cursor: 'pointer',
    transition: 'all 0.1s ease',
    'user-select': 'none',
    '&:hover': {
      'background-color': '#626fd4',
      color: '#fff'
    }
  },
  closeBtn: {
    float: 'right',
    'margin-top': '1px',
    cursor: 'pointer'
  }
};
const {
  classes
} = jss.createStyleSheet(styles).attach();
const propTypesTabList = {
  /** 下拉以及关闭按钮点击事件的处理函数，值为选中的值或'' */
  onSelect: PropTypes.func.isRequired,

  /** 下拉选项的值 */
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string
  })).isRequired
};
const defaultPropsTabList = {
  initValue: '请选择'
};

class ReactSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      selectValue: ''
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleClickOuter = this.handleClickOuter.bind(this);
    this.handleClickOption = this.handleClickOption.bind(this);
    this.handleInitValue = this.handleInitValue.bind(this);
  }

  handleSelect() {
    this.setState(state => ({
      isShow: !state.isShow
    }));
  }

  handleClickOuter() {
    this.setState({
      isShow: false
    });
  }

  handleClickOption(item) {
    this.props.onSelect({
      name: item.name,
      value: item.value
    });
    this.setState({
      isShow: false,
      selectValue: item.name
    });
  }

  handleInitValue(e) {
    e.stopPropagation();
    this.setState({
      isShow: false,
      selectValue: this.props.initValue
    });
    this.props.onSelect('');
  }

  renderOption() {
    if (!this.state.isShow || !this.props.data.length) {
      return null;
    }

    return React.createElement("div", {
      className: `${classes.common} ${classes.selectMenu}`
    }, this.props.data.map((item, index) => {
      return React.createElement("div", {
        className: `${classes.selectOption}`,
        onClick: e => this.handleClickOption(item),
        key: index
      }, item.name);
    }));
  }

  renderCloseBtn() {
    if (!this.state.selectValue || this.state.selectValue === this.props.initValue) {
      return null;
    }

    return React.createElement("svg", {
      onClick: this.handleInitValue,
      className: `${classes.closeBtn}`,
      height: "20",
      width: "20",
      viewBox: "0 0 20 20",
      "aria-hidden": "true",
      focusable: "false"
    }, React.createElement("path", {
      d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
    }));
  }

  render() {
    return React.createElement(ReactOutsideHandle, {
      handleClick: this.handleClickOuter
    }, React.createElement("div", {
      className: `${classes.selectBtn}`,
      onClick: this.handleSelect
    }, React.createElement("span", null, this.state.selectValue || this.props.initValue), this.renderCloseBtn()), this.renderOption());
  }

}

ReactSelect.propTypes = propTypesTabList;
ReactSelect.defaultProps = defaultPropsTabList;
export default ReactSelect;

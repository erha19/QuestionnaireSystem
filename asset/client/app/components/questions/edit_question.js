/** @jsx React.DOM */

var React = require('react');

var typeLabels = {
  yes_no: '判断题',
  multiple_choice: '多项选择',
  single_choice:'单项选择',
  essay: '描述题'
};

var EditQuestion = React.createClass({
  propTypes: {
    type: React.PropTypes.string.isRequired,
    onRemove: React.PropTypes.func.isRequired
  },

  getTypeLabel: function () {
    return typeLabels[this.props.type];
  },

  render: function () {
    var className = 'edit-question well well-active ' + (this.props.className || "");

    return (
      <div className={className}>
        <div className='type'>
          {this.getTypeLabel()}
          <a className='remove' onClick={this.handleRemove}>
            <span className='glyphicon glyphicon-remove'/>
          </a>
        </div>
        <div>{this.props.children}</div>
      </div>
    );
  },

  handleRemove: function () {
    if (confirm('确认删除该' + this.getTypeLabel())) {
      this.props.onRemove(this.props.key);
    }
  }
});

module.exports = EditQuestion;

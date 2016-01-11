/** @jsx React.DOM */

var React = require('react');

var ModuleButton = require('./module_button');

var DraggableQuestions = React.createClass({
  render: function () {
    return (
      <ul className="modules list-unstyled">
        <li><ModuleButton text='判断题' questionType='yes_no'/></li>
        <li><ModuleButton text='单项选择题' questionType='single_choice'/></li>
        <li><ModuleButton text='多项选择题' questionType='multiple_choice'/></li>
        <li><ModuleButton text='简答题' questionType='essay'/></li>
      </ul>
    );
  },

  shouldComponentUpdate: function () {
    return false;
  }
});

module.exports = DraggableQuestions;

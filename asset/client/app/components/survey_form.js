/** @jsx React.DOM */

var React = require('react');

var SurveyForm = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    introduction: React.PropTypes.string.isRequired
  },

  render: function () {
    return (
      <div>
        <h2>问卷标题</h2>
        <input
          className='title'
          type='text'
          value={this.props.title}
          onChange={this.handleTitleChange} />

        <h2>简单介绍</h2>
        <textarea
          className='introduction'
          value={this.props.introduction}
          onChange={this.handleIntroductionChange} />
      </div>
    );
  },

  handleTitleChange: function (ev) {
    this.props.onChange({ title: ev.target.value });
  },

  handleIntroductionChange: function (ev) {
    this.props.onChange({ introduction: ev.target.value });
  }
});

module.exports = SurveyForm;

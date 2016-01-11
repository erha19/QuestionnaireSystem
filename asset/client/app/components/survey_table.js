/** @jsx React.DOM */

var React = require("react");
var SurveyTableRow = require('./survey_table_row');

var SurveyTable = React.createClass({

  propTypes: {
    surveys: React.PropTypes.array.isRequired
  },

  render: function () {
    var rows = this.props.surveys.map(function(survey, i) {
      return <SurveyTableRow key={i} survey={survey}/>;
    });

    return (
      <table className="table survey-table">
        <thead>
          <tr>
            <th>标题</th>
            <th>发布于</th>
            <th>最后修改</th>
            <th>填写人数</th>
            <th>状态</th>
            <th>分享</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
});

module.exports = SurveyTable;

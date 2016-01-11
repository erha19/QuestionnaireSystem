/** @jsx React.DOM */

var React = require("react");
var Promise = require('es6-promise').Promise;
var AsyncState = require('react-router').AsyncState;

var SurveyTable = require('./survey_table');

var ListSurveys = React.createClass({
  mixins:[AsyncState],

  statics:{
    getInitialAsyncState: function(path, query, setState){
      return new Promise(function(resolve, reject){
        setTimeout(function () {
          setState({
            surveys:[
              {
                id: '1',
                uri: '1',
                editUri: '1',
                title: '一份很随意的问卷',
                publishedDate: new Date(),
                modifiedDate: new Date(),
                activity: [121,32,54,12,546]
              }
            ]
          })
          resolve();
        }, 100);
      });
    }
  },

  render: function(){
    if(!this.state.surveys){
      return <div>加载中 ... </div>
    }

    return (
      <div className='list-surveys'>
        <h1>问卷列表</h1>
        <SurveyTable surveys={this.state.surveys}/>
      </div>
    );
  }
});

module.exports = ListSurveys;

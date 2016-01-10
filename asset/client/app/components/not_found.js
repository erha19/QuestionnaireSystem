/** @jsx React.DOM */
var React = require('react');

var NotFound = React.createClass({
  render:function(){
    return <div className="page-not-found">
      <h1>404</h1>
      <p>页面变成蝴蝶飞走啦~</p>
    </div>;
  }
});

module.exports = NotFound;
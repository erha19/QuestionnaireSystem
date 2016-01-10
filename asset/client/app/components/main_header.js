/** @jsx React.DOM */

var React = require("react");
var Link = require('react-router').Link;

var MainNav = require('./main_nav');

var MainHeader = React.createClass({
  render: function () {
    return (
      <header className='main-header navbar navbar-static-top container'>
        <div className='container-fluid'>
          <Link to="list" className='navbar-brand logo'>问卷调查分析系统</Link>
          <MainNav />
        </div>
      </header>
    );
  }
});

module.exports = MainHeader;

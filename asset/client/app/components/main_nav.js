/** @jsx React.DOM */

var React = require("react");
var Link = require('react-router').Link;

var MainNav = React.createClass({
  render: function () {
    return (
      <nav className='main-nav' role='navigation'>
        <ul className='nav navbar-nav'>
          <li><Link to="list">所有问卷</Link></li>
          <li><Link to="add">添加问卷</Link></li>
        </ul>
      </nav>
    );
  }
});

module.exports = MainNav;

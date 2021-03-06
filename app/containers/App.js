import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
// import {getLoginData} from '../actions/app';
import AppNav from '../components/AppNav';

if (process.env.NODE_ENV !== 'production') {
  require('../../static/style.css');
}

export const App = React.createClass({

  render() {
    return (
      <div>
        <Helmet title='EPSX'/>
        <AppNav />
        {this.props.children}
      </div>
    );
  },

});

function mapStateToProps(state) {
  return {
    appData: state.app
  };
}

export default connect(mapStateToProps)(App);


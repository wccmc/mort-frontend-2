import React, { useState, useEffect } from 'react';
import Screens from './Screens';
import { connect } from 'react-redux';
import Header from './Components/Header/Header'

const Routing = (props) => {

  const display = () => {
    const { Financial, General, Result, Veteran, } = Screens
    const { location = 'General', routes } = props // coming from Redux


    switch (location) {
      // to update routes order update the redux initial state
      case routes[0]:
        return <General />

      case routes[1]:
        return <Veteran />

      case routes[2]:
        return <Financial />

      case routes[3]:
        return <Result />

      default:
        // <PageNotFound /> // Future idea (low priority)
        break;
    }
  }

  return (
    <div>
      <Header />
      {display()}
    </div>
  )
}

const mapStateToProps = ({ location, routes }) => ({ location, routes })

export default connect(mapStateToProps)(Routing)

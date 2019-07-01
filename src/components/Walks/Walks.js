import React from 'react';

import Walk from '../Walk/Walk';

import './Walks.scss';

class WalkSchedule extends React.Component {

  render() {
    const makeWalks = this.props.walks.map(walk => (
      <Walk key={ walk.id } walk={ walk } deleteWalk={this.props.deleteWalk}/> // for each walk return a Walk component that returns a walk component with a prop of the walk
    ));
    return (
      <div className = "column Walks d-flex flex-wrap">
        { makeWalks }
      </div>
    )
  }
}

export default WalkSchedule

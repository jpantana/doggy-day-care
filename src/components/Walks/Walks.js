import React from 'react';

import Walk from '../Walk/Walk';

import './Walks.scss';

class WalkSchedule extends React.Component {

  render() {
    const makeWalks = this.props.walks.map((walk, i) => (
      <Walk key={ walk.id } i={ i } walk={ walk } walks={this.props.walks} deleteWalk={this.props.deleteWalk} toggle={this.props.toggle}/> // for each walk return a Walk component that returns a walk component with a prop of the walk
    ));
    return (
      <div className = "column Walks d-flex flex-wrap">
        { makeWalks }
      </div>
    )
  }
}

export default WalkSchedule

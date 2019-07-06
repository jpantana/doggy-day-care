import React from 'react';
import PropTypes from 'prop-types';

import walkShape from '../../helpers/propz/walkShape';
import Walk from '../Walk/Walk';

import './Walks.scss';

class WalkSchedule extends React.Component {
  static propTypes = {
    Walks: PropTypes.arrayOf(walkShape.walkShape),
  }
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

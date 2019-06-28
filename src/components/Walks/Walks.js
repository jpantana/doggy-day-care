import React from 'react';

import walksData from '../../helpers/data/walksData';

import Walk from '../Walk/Walk';

import './Walks.scss';

class WalkSchedule extends React.Component {
  state = {
    walks: [],
  }

  componentDidMount() {
    walksData.getWalks()
      .then(walks => this.setState({ walks }))
      .catch(err => console.error('no walks for you', err));
  }

  render() {
    const makeWalks = this.state.walks.map(walk => (
      <Walk key={ walk.id } walk={ walk } /> // for each walk return a Walk component that returns a walk component with a prop of the walk
    ));
    return (
      <div className = "column Walks d-flex flex-wrap">
        { makeWalks }
      </div>
    )
  }
}

export default WalkSchedule

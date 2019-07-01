import React from 'react';
import PropTypes from 'prop-types';

import walkShape from '../../helpers/propz/walkShape';

import './Walk.scss';

class Walk extends React.Component {
  static propTypes = {
    walk: walkShape.walkShape,
    deleteWalk: PropTypes.func.isRequired,
  }

  deleteWalkEvent = (e) => {
    const { walk, deleteWalk } = this.props;
    e.preventDefault();
    deleteWalk(walk.id);
  };

  render() {
    const { walk } = this.props;
    return (
      <div className="Walk justify-content-center">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{walk.dogName}</h5>
            <h5 className="card-title">{walk.date}</h5>
            <p className="card-text">{walk.employeeName}</p>
            <button className="btn btn-danger" onClick={this.deleteWalkEvent}>X</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Walk;

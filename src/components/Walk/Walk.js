import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

// import walksData from '../../helpers/data/walksData';
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
    console.error(deleteWalk);
  };

  editEvent = (e) => {
    e.preventDefault();
    const { walk, toggle } = this.props;
    toggle(walk);
  };
  render() {
    const { walk } = this.props;
    const { i } = this.props;
    return (
      <div className="Walk justify-content-center">
        <div className="card">
          <button id={"editBtn" + i } className="btn btn-danger m-auto w-25 br-5 content-danger rounded" onClick={this.editEvent}>edit</button>
          <div className="card-body">
            <h5 className="card-title">{walk.dogName}</h5>
            <h5 className="card-title">{moment(walk.date).format('MMMM Do, h:mm a')}</h5>
            <p className="card-text">{walk.employeeName}</p>
            <button className="btn btn-danger" onClick={this.deleteWalkEvent}>X</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Walk;

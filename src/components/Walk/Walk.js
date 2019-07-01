import React from 'react';

import walkShape from '../../helpers/propz/walkShape';

import './Walk.scss';

class Staff extends React.Component {
  static propTypes = {
    walk: walkShape.walkShape,
  }

  render() {
    const { walk } = this.props;
    return (
      <div className="Walk justify-content-center">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{walk.dogId}</h5>
            <h5 className="card-title">{walk.date}</h5>
            <p className="card-text">{walk.employeeId}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Staff;

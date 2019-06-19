import React from 'react';

import staffShape from '../../helpers/propz/Shapes';

import './Staff.scss';

class Staff extends React.Component {
  static propTypes = {
    employee: staffShape.staffShape,
  }

  render() {
    const { employee } = this.props;
    return (
      <div className="Staff col-3 justify-content-center">
        <div className="card">
          <img className="card-img-top" src={employee.image} alt="a staff"/>
          <div className="card-body">
            <h5 className="card-title">{employee.name}</h5>
            <p className="card-text">{employee.position}</p>
            <p className="card-text">{employee.hireDate}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Staff;

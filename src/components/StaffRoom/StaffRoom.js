import React from 'react';
import PropTypes from 'prop-types';

import staffShape from '../../helpers/propz/Shapes';

import Staff from '../Staff/Staff';

import './StaffRoom.scss';

class StaffRoom extends React.Component {
  static propTypes = {
    employees: PropTypes.arrayOf(staffShape.staffShape),
  }
  render() {
    const { employees } = this.props;
    const makeEmployees = employees.map(employee => (
      <Staff key={ employee.id } employee={ employee } />
    ));
    return (
      <div className = "StaffRoom d-flex flex-wrap">
        { makeEmployees }
      </div>
    )
  }
}
export default StaffRoom;

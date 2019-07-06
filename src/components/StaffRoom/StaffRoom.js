import React from 'react';
import PropTypes from 'prop-types';

import Staff from '../Staff/Staff';
import staffShape from '../../helpers/propz/staffShape';

import './StaffRoom.scss';

class StaffRoom extends React.Component {
  static propTypes = {
    staff: PropTypes.arrayOf(staffShape.staffShape)
  }
  render() {
    const makeEmployees = this.props.staff.map(employee => (
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

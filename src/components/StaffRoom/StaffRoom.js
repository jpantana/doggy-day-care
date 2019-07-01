import React from 'react';

import Staff from '../Staff/Staff';

import './StaffRoom.scss';

class StaffRoom extends React.Component {

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

import React from 'react';

import employeesData from '../../helpers/data/employeesData';

import Staff from '../Staff/Staff';

import './StaffRoom.scss';

class StaffRoom extends React.Component {
  state = {
    staff: [],
  }

  componentDidMount() {
    employeesData.getEmployees()
      .then(staff => this.setState({ staff }))
      .catch(err => console.error('no employees', err));
  }

  render() {
    const makeEmployees = this.state.staff.map(employee => (
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

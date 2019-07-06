import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import PropTypes from 'prop-types';

import { UncontrolledDropdown, Button, Modal, ModalHeader, ModalBody, ModalFooter, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import dogShape from '../../helpers/propz/dogShape';
import staffShape from '../../helpers/propz/staffShape';
import walkShape from '../../helpers/propz/walkShape';


import dogsData from '../../helpers/data/dogsData';
import employeesData from '../../helpers/data/employeesData';
import walksData from '../../helpers/data/walksData';

import DogPen from '../DogPen/DogPen';
import StaffRoom from '../StaffRoom/StaffRoom';
import WalkSchedule from '../Walks/Walks';

import './Home.scss';

class Home extends React.Component {
  static propTypes = {
    dogs: PropTypes.arrayOf(dogShape.dogShape),
    walks: PropTypes.arrayOf(walkShape.walkShape),
    staff: PropTypes.arrayOf(staffShape.staffShape)
  }
  state = {
    dogs: [],
    staff: [],
    walks: [],
    modal: false,
    dogDropdownOpen: false,
    staffDropdownOpen: false,
    value1: "Employee",
    value2: "Doggy",
    employeeId: '',
    dogId: '',
    walkId: '',
  }

  toggle = this.toggle.bind(this);
  toggle2 = this.toggle2.bind(this);
  toggle3 = this.toggle3.bind(this);

  componentDidMount() {
    dogsData.getDogs()
      .then(dogs => this.setState({ dogs }))
      .catch(err => console.error('no dogs for you', err));
    employeesData.getEmployees()
      .then(staff => this.setState({ staff }))
      .catch(err => console.error('no employees for you', err));
    this.getWalks();
  }

  getWalks = () => {
    walksData.getWalks()
    .then(walks => this.setState({ walks }))
    .catch(err => console.error('no walks for you', err));
  };

  deleteWalk = (walkId) => {
    walksData.deleteWalk(walkId)
      .then(() => this.getWalks())
      .catch(err => console.error('nothing was deleted', err));
      this.setState({walks: []});
  };
  
  toggle(walk) {
    if (walk.id !== undefined) {
      this.setState({
        value1: walk.employeeName,
        value2: walk.dogName,
        employeeId: walk.employeeId,
        dogId: walk.dogId,
        date: walk.date,
        walkId: walk.id,
      });
    }
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  toggle2(e) {
    e.preventDefault();
    this.setState(prevState => ({
      staffDropdownOpen: !prevState.staffDropdownOpen
    }));
  }

  toggle3(e) {
    e.preventDefault();
    this.setState(prevState => ({
      dogDropdownOpen: !prevState.dogDropdownOpen
    }));
  }

  whichStaffer = (e) => {
    e.preventDefault();
    this.setState({
      value1: e.target.name,
      employeeId: e.target.value
    });
  }; 

  whichDog = (e) => {
    e.preventDefault();
    this.setState({
      value2: e.target.name,
      dogId: e.target.value
    });
  }; 

  makeNewAndEditWalks = (walk) => {
    const newWalk = { dogName: this.state.value2, employeeName: this.state.value1, employeeId: this.state.employeeId, dogId: this.state.dogId };
    newWalk.date = document.getElementById('walkDateTime').value;
    newWalk.uid = firebase.auth().currentUser.uid;
    // walkId is setState so this condition tests if firebase has already created a walkId
    // newWalk is the object that has been updated, so it passes now updated info to axios put func
    if (this.state.walkId !== '') {
      walksData.putWalk(this.state.walkId, newWalk)
        .then(() => {
          this.setState({ value1: 'Employee', value2: 'Dog', employeeId: '', dogId: '', modal: false, walkId: '', });
          this.getWalks();
          }).catch(err => console.error('no edit to walk', err));
    } else {
      walksData.postWalk(newWalk)
      .then(() => {
        this.setState({ value1: 'Employee', value2: 'Dog', employeeId: '', dogId: '', modal: false });
        this.getWalks();
      })
      .catch(err => console.error('no new order posted', err));
    }
  };

  saveNewWalk = (walk) => {
    this.makeNewAndEditWalks(walk);
  };

  render() {
    const { dogs } = this.state;
    const { staff } = this.state;
    const { walks } = this.state;

    const myStaffSelectionNames = staff.map(employee => <DropdownItem key={employee.id} value={employee.id} name={employee.name} onClick={this.whichStaffer}>{employee.name}</DropdownItem>);
    const myDogSelectionNames = dogs.map(dog => <DropdownItem key={dog.id} name={dog.name} value={dog.id} onClick={this.whichDog}>{dog.name}</DropdownItem>);
    return (
    <div>
      <div>
        <Button color="success" className="addNewWalk" onClick={this.toggle}>{this.props.buttonLabel}Add New Walk</Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Schedule a walk...</ModalHeader>
          <ModalBody>
            <div className="form-group row">
              <label htmlFor="example-datetime-local-input" className="col-2 col-form-label">Date and time</label>
              <div className="col-10">
                <input className="form-control" type="datetime-local" defaultValue="2019-07-19T10:00:00" id="walkDateTime" />
              </div>
            </div>
              <UncontrolledDropdown isOpen={this.state.staffDropdownOpen} onClick={this.toggle2}>
                <DropdownToggle caret>{this.state.value1}</DropdownToggle>
                  <DropdownMenu>
                    { myStaffSelectionNames }
                  </DropdownMenu>
              </UncontrolledDropdown>
                <UncontrolledDropdown isOpen={this.state.dogDropdownOpen} onClick={this.toggle3}>
                <DropdownToggle caret>{this.state.value2}</DropdownToggle>
                    <DropdownMenu>
                      { myDogSelectionNames }
                    </DropdownMenu>
              </UncontrolledDropdown>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.saveNewWalk}>Schedule</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
      <div className="Home">
        <div className="row justify-content-center">
          <div className="col-4"><DogPen dogs={ dogs }/></div>
          <div className="col-4"><WalkSchedule walks={ walks } deleteWalk={ this.deleteWalk } toggle={this.toggle}/></div>
          <div className="col-4"><StaffRoom staff={ staff }/></div>
        </div>
      </div>
    </div>
    );
  }
}

export default Home;

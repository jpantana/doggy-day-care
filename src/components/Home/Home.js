import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter ,Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import dogsData from '../../helpers/data/dogsData';
import employeesData from '../../helpers/data/employeesData';
import walksData from '../../helpers/data/walksData';

import DogPen from '../DogPen/DogPen';
import StaffRoom from '../StaffRoom/StaffRoom';
import WalkSchedule from '../Walks/Walks';

import './Home.scss';

class Home extends React.Component {
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
  }; // ask Zoe why it won't re render when you delete the last walk (and expect 0)

  toggle() {
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
    console.error(e.target);
    this.setState({
      value2: e.target.name,
      dogId: e.target.value
    });
  }; 

  makeNew = (walk) => {
    const newWalk = { dogName: this.state.value2, employeeName: this.state.value1, employeeId: this.state.employeeId, dogId: this.state.dogId };
    newWalk.date = document.getElementById('walkDateTime').value;
    newWalk.uid = firebase.auth().currentUser.uid;
    console.error('new walk', newWalk);
    walksData.postWalk(newWalk)
      .then(() => {
        this.setState({ value1: 'Employee', value2: 'Dog', employeeId: '', dogId: '', modal: false });
        this.getWalks();
      })
      .catch(err => console.error('no new order posted', err));
  };

  saveNewWalk = (walk) => {
    console.error('something', walk);
    // if (Object.keys(this.state.orderEditing).length > 0) {
    //   this.updateExisting(walk);
    // } else {
      this.makeNew(walk);
    // }
  };




  render() {
    const { dogs } = this.state;
    const { staff } = this.state;
    const { walks } = this.state;

    const myStaffSelectionNames = staff.map(employee => <DropdownItem key={employee.id} onClick={this.handleStaffChange} name={employee.name} value={employee.id} onClick={this.whichStaffer}>{employee.name}</DropdownItem>);
    const myDogSelectionNames = dogs.map(dog => <DropdownItem key={dog.id} onClick={this.handleDogChange} value={dog.id} name={dog.name} onClick={this.whichDog}>{dog.name}</DropdownItem>);
    // try making a function that populates an input with employee and dog
    return (
    <div>
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}Add New Walk</Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Schedule a walk...</ModalHeader>
          <ModalBody>
            <div class="form-group row">
              <label for="example-datetime-local-input" class="col-2 col-form-label">Date and time</label>
              <div class="col-10">
                <input class="form-control" type="datetime-local" value="2011-08-19T13:45:00" id="walkDateTime" />
              </div>
            </div>
              <Dropdown isOpen={this.state.staffDropdownOpen} onClick={this.toggle2}>
                <DropdownToggle caret>{this.state.value1}</DropdownToggle>
                  <DropdownMenu>
                    { myStaffSelectionNames }
                  </DropdownMenu>
              </Dropdown>
                <Dropdown isOpen={this.state.dogDropdownOpen} onClick={this.toggle3}>
                <DropdownToggle caret>{this.state.value2}</DropdownToggle>
                    <DropdownMenu>
                      { myDogSelectionNames }
                    </DropdownMenu>
              </Dropdown>
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
          <div className="col-4"><WalkSchedule walks={ walks } deleteWalk={ this.deleteWalk }/></div>
          <div className="col-4"><StaffRoom staff={ staff }/></div>
        </div>
      </div>
    </div>
    );
  }
}

export default Home;

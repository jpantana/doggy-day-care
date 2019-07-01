import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import dogsData from '../../helpers/data/dogsData';
import employeesData from '../../helpers/data/employeesData';

import DogPen from '../DogPen/DogPen';
import StaffRoom from '../StaffRoom/StaffRoom';
import WalkSchedule from '../Walks/Walks';

import './Home.scss';

class Home extends React.Component {
  toggleStaff = this.toggleStaff.bind(this); // ask Zoe why i need this??
  toggleDogs = this.toggleDogs.bind(this); // ask Zoe why i need this??
  // handleChange = this.handleChange.bind(this);
  state = {
    dogs: [],
    staff: [],
    employee: '',
    dogDropdownOpen: false,
    staffDropdownOpen: false,
    value: '',
  }

  componentDidMount() {
    dogsData.getDogs()
      .then(dogs => this.setState({ dogs }))
      .catch(err => console.error('no dogs for you', err));
    employeesData.getEmployees()
      .then(staff => this.setState({ staff }))
      .catch(err => console.error('no employees for you', err));
  }

  toggleStaff(e) {
    e.preventDefault();
    this.setState(prevState => ({
      staffDropdownOpen: !prevState.staffDropdownOpen
    }));
  }
  toggleDogs(e) {
    e.preventDefault();
    this.setState(prevState => ({
      dogDropdownOpen: !prevState.dogDropdownOpen
    }));
  }

  handleStaffChange = (e) => {
    e.preventDefault();
    const theseEmployees = this.state.staff;
    const theEmployee = theseEmployees.filter(employee => employee.id === e.target.value ? employee : '');
    // const newWalk = {
    //   dogName: '',
    //   employeeName: theEmployee[0].name,
    //   employeeId: theEmployee[0].id,
    //   dogId: '',
    //   date: '',
    // }
    return theEmployee[0];
  };

  handleDogChange = (e) => {
    e.preventDefault();
    const theseDogs = this.state.dogs;
    const theDog = theseDogs.filter(dog => dog.id === e.target.value ? dog : '');
    return theDog[0];
  };


  render() {
    const { dogs } = this.state;
    const { staff } = this.state;

    const myStaffSelectionNames = staff.map(employee => <DropdownItem key={employee.id} onClick={this.handleStaffChange} value={employee.id}>{employee.name}</DropdownItem>);
    const myDogSelectionNames = dogs.map(dog => <DropdownItem key={dog.id} onClick={this.handleDogChange} value={dog.id}>{dog.name}</DropdownItem>);
    // try making a function that populates an input with employee and dog
    return (
    <div>
      <Form className="Form">
        <FormGroup>
          <Label for="exampleEmail">Staff</Label>
          <Dropdown isOpen={this.state.staffDropdownOpen} onClick={this.toggleStaff}>
            <DropdownToggle caret>
              Staff
            </DropdownToggle>
              <DropdownMenu>
                { myStaffSelectionNames }
              </DropdownMenu>
          </Dropdown>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">{ this.handleDogChange() }</Label>
          <Dropdown isOpen={this.state.dogDropdownOpen} onClick={this.toggleDogs}>
           <DropdownToggle caret>
              Dog Names
            </DropdownToggle>
              <DropdownMenu>
                { myDogSelectionNames }
              </DropdownMenu>
          </Dropdown>  
        </FormGroup>     
        <Button className="formSubmitBtn">Submit</Button>
      </Form>
      <div className="Home">
        <div className="row justify-content-center">
          <div className="col-4"><DogPen dogs={ dogs }/></div>
          <div className="col-4"><WalkSchedule /></div>
          <div className="col-4"><StaffRoom staff={ staff }/></div>
        </div>
      </div>
    </div>
    );
  }
}

export default Home;

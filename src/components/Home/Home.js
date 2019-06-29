import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import dogsData from '../../helpers/data/dogsData';
import employeesData from '../../helpers/data/employeesData';

import DogPen from '../DogPen/DogPen';
import StaffRoom from '../StaffRoom/StaffRoom';
import WalkSchedule from '../Walks/Walks';


import './Home.scss';

class Home extends React.Component {
  toggle = this.toggle.bind(this); // ask Zoe why i need this??
  state = {
    dogs: [],
    staff: [],
    employee: '',
    dropdownOpen: false,
  }

  componentDidMount() {
    dogsData.getDogs()
      .then(dogs => this.setState({ dogs }))
      .catch(err => console.error('no dogs for you', err));
    employeesData.getEmployees()
      .then(staff => this.setState({ staff }))
      .catch(err => console.error('no employees for you', err));
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  
  handleEmployeeChange(e) {
    this.setState({value: e.target.value})
  }

  render() {
    const { dogs } = this.state;
    const { staff } = this.state;

    const myStaffSelectionNames = staff.map(employee => <DropdownItem className="dropdown-item" key={employee.id} value={employee.name}>{employee.name}</DropdownItem>);
    const myDogSelectionNames = dogs.map(dog => <DropdownItem className="dropdown-item" key={dog.id}>{dog.name}</DropdownItem>);

    return (
    <div>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Staff</Label>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
              Staff
            </DropdownToggle>
              <DropdownMenu>
                { myStaffSelectionNames }
              </DropdownMenu>
          </Dropdown>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Dogs</Label>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
           <DropdownToggle caret>
              Dog Names
            </DropdownToggle>
              <DropdownMenu>
                { myDogSelectionNames }
              </DropdownMenu>
          </Dropdown>  
        </FormGroup>     
        <Button>Submit</Button>
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

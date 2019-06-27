import React from 'react';

import DogPen from '../components/DogPen/DogPen';
import dogsData from '../helpers/data/dogsData';
import employeesData from '../helpers/data/employeesData';
import StaffRoom from '../components/StaffRoom/StaffRoom';

import './App.scss';

class App extends React.Component {
  state = {
    dogs: [],
    staff: [],
  }

  componentDidMount() {
    // this.setState ({ dogs: myDogs })
    employeesData.getEmployees()
      .then(staff => this.setState({ staff }))
      .catch(err => console.error('no employees', err));
    dogsData.getDogs()
      .then(dogs => this.setState({ dogs }))
      .catch(err => console.error('no dogs for you', err));
    
    // this.setState ({ staff: myEmployees })
  }

  render() {
    const { dogs } = this.state;
    const { staff } = this.state;
    return (
      <div className="App">
        <div className="">Dog Pen</div>
        <DogPen dogs={ dogs } />
        <div className="">Employees</div>
        <StaffRoom staff={ staff } />
      </div>
    );
  }
}

export default App;

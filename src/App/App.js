import React from 'react';

import DogPen from '../components/DogPen/DogPen';
import myDogs from './dogs.js';
import StaffRoom from '../components/StaffRoom/StaffRoom';
import myEmployees from './employees';

import './App.scss';

class App extends React.Component {
  state = {
    dogs: [],
    staff: [],
  }

  componentDidMount() {
    this.setState ({ dogs: myDogs })
    this.setState ({ staff: myEmployees })
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

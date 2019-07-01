import React from 'react';

import Dog from '../Dog/Dog';

import './DogPen.scss';

class DogPen extends React.Component {

  render() {
    // const { dogs } = this.props;
    const makeDogs = this.props.dogs.map(dog => (
      <Dog key={ dog.id } dog={ dog } /> // for each dog return a Dog component that returns a dog component with a prop of the dog
    ));
    return (
      <div className = "DogPen d-flex flex-wrap">
        { makeDogs }
      </div>
    )
  }
}

export default DogPen

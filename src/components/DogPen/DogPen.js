import React from 'react';

import dogsData from '../../helpers/data/dogsData';

import Dog from '../Dog/Dog';

import './DogPen.scss';

class DogPen extends React.Component {
  state = {
    dogs: [],
  }

  componentDidMount() {
    dogsData.getDogs()
      .then(dogs => this.setState({ dogs }))
      .catch(err => console.error('no dogs for you', err));
  }

  render() {
    // const { dogs } = this.props;
    const makeDogs = this.state.dogs.map(dog => (
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

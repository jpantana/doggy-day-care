import React from 'react';
import PropTypes from 'prop-types';

import dogShape from '../../helpers/propz/Shapes';

import Dog from '../Dog/Dog';

import './DogPen.scss';

class DogPen extends React.Component {
  static propTypes = {
    dogs: PropTypes.arrayOf(dogShape.dogShape),
  }
  render() {
    const { dogs } = this.props;
    const makeDogs = dogs.map(dog => (
      <Dog key={ dog.id } dog={ dog } /> // for each dog return a Dog component that returns a dog compent with a prop of the dog
    ));
    return (
      <div className = "DogPen d-flex flex-wrap">
        { makeDogs }
      </div>
    )
  }
}

export default DogPen

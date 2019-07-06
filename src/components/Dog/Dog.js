import React from 'react';
  import PropTypes from 'prop-types';

import dogShape from '../../helpers/propz/dogShape';

import './Dog.scss';

class Dog extends React.Component {
  static propTypes = {
    dogs: PropTypes.arrayOf(dogShape.dogShape),
  }
  render() {
    const { dog } = this.props;
    return (
      <div className="Dog justify-content-center">
        <div className="card">
          <img className="card-img-top" src={dog.image} alt={`${dog.name} being doggish`}/>
          <div className="card-body">
            <h5 className="card-title">{dog.name}</h5>
            <p className="card-text">{dog.breed}</p>
            <p className="card-text">{dog.talents}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Dog;

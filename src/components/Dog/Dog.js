import React from 'react';

import dogShape from '../../helpers/propz/dogShape';

import './Dog.scss';

class Dog extends React.Component {
  static propTypes = {
    dog: dogShape.dogShape,
  }
  render() {
    const { dog } = this.props;
    return (
      <div className="Dog col-3 justify-content-center">
        <div className="card">
          <img className="card-img-top" src={dog.image} alt="a dog"/>
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

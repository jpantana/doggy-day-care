import React from 'react';

import DogPen from '../DogPen/DogPen';
import StaffRoom from '../StaffRoom/StaffRoom';
import WalkSchedule from '../Walks/Walks';

import './Home.scss';

class Home extends React.Component {
  render() {
    return (
    <div>
        <form className="Form">
          <div className="form-group">
            <label for="exampleInputEmail1"></label>
            <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Which Employee?
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#"></a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1"></label>
            <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Which Dog?
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Dogs</a>
                    <a className="dropdown-item" href="#">Dog2</a>
                    <a className="dropdown-item" href="#">Dog3</a>
                  </div>
                </div>
          </div>
          <div className="form-check">
            <input type="date" className="form-check-input" id="date" />
            <label className="form-check-label dateInput" for="exampleCheck1">Date Of Walk</label>
          </div>
          <button type="submit" className="btn btn-primary formSubmitBtn">Submit</button>
        </form>
      <div className="Home">
        <div className="row justify-content-center">
          <div className="col-4"><DogPen /></div>
          <div className="col-4"><WalkSchedule /></div>
          <div className="col-4"><StaffRoom /></div>
        </div>
      </div>
    </div>
    );
  }
}

export default Home;

import React from 'react';

import DogPen from '../DogPen/DogPen';
import StaffRoom from '../StaffRoom/StaffRoom';
import WalkSchedule from '../Walks/Walks';

import './Home.scss';

class Home extends React.Component {
  render() {
    return (
    <div>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Which Employee?
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#"></a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Which Dog?
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Dogs</a>
                    <a class="dropdown-item" href="#">Dog2</a>
                    <a class="dropdown-item" href="#">Dog3</a>
                  </div>
                </div>
          </div>
          <div class="form-check">
            <input type="date" class="form-check-input" id="date" />
            <label class="form-check-label" for="exampleCheck1">Date Of Walk</label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      <div className="Home">
        <div className="row justify-content-center">
          <div className="col-4"><DogPen /></div>
          <div className="col-4"><StaffRoom /></div>
          <div className="col-4"><WalkSchedule /></div>
        </div>
      </div>
    </div>
    );
  }
}

export default Home;

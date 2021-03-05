import * as React from 'react';
import axios from 'axios';

export default class Rooms extends React.Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: (this.state.count + 1)
    });
  };

  decrement = () => {
    this.setState({
      count: (this.state.count - 1)
    });
  };

  rooms() {
    return
  }

  //ballmasterObj: Array<any> = [];
  getUrl(){
  const promise1 = new Promise((resolve, reject) => {
    let rooms = [];
    axios.get('https://localhost:44387/Rooms')
      .then(function (response) {
        //Success here
        resolve(rooms = response.data.map((item, index) => (
          <tr className="roomLine" key={item.id}>
            {item.name}
          </tr>
        )));
      })
      .catch(function (error) {
        console.log('An error has occurred : ' + error);
      })
      .then(function () {
        //Always executed 
        console.log(rooms);
        //return rooms;
      });

    return rooms;
  });
  
  promise1.then((value) => {
    console.log(value);
    // expected output: "foo"
  });
  
  console.log(promise1);
  // expected output: [object Promise]
  }





  /*getUrl() {
    let rooms = [];
    axios.get('https://localhost:44387/Rooms')
      .then(function (response) {
        //Success here
        rooms = response.data.map((item, index) => (
          <tr className="roomLine" key={item.id}>
            {item.name}
          </tr>
        ));

      })
      .catch(function (error) {
        console.log('An error has occurred : ' + error);
      })
      .then(function () {
        //Always executed 
        console.log(rooms);
        //return rooms;
      });

    return rooms;
  }*/

  render() {
    return (
      <div className='Rooms'>
        <h1>{this.state.count}</h1>
        <p>My false data ! {this.getUrl()} </p>

      </div>
    );
  }
}
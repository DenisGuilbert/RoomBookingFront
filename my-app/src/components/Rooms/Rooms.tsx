import * as React from 'react';

export default class Rooms extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }

  state = {
    showComponent: false
  };

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
        {this.state.showComponent ? <NewComponent /> : null}
        <button onClick={this.onButtonClick}>Button</button>        
      </div>
    );
  }
}

class NewComponent extends React.Component {
  render() {

    const newComponentStyle = {
      color: "white",
      backgroundColor: "lightBlue",
      padding: "10px",
      fontFamily: "Arial",
      fontSize : "30px",
      height : '50px',
      border : '1px solid black'
    };
    return (      
      <div style={newComponentStyle}>new component</div>
    );
  }
}
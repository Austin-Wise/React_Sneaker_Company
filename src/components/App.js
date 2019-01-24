import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import './App.css';

class App extends React.Component {

  state = {
    shoes: {},
    orders
  }

  addshoe = shoe => {
    /*TO UPDATE STATE:
      use the existing setState api.
      1. Take a copy of the existing state. You never want to reach into state
         and manipulate it directly -> called mutation. can cause issues with 
         performance, things updating out of order, etc.
         
         '...' <- object spread: clean way to take a copy of an object.
         In this case, will take a copy of everything in this instance of State
    */
    const shoes = { ...this.state.shoes }

    /*
      2. Add our new shoe to that shoes variable
         To create unique keys, we are appending Date.now to the end of each shoe,
         which counts the number of milliseconds from 1970. 
         Assuming you dont add data during the same ms...
    */
    shoes[`shoe${Date.now()}`] = shoe;
    console.log("Adding a shoe!");
    /*
      3. Set the new shoes object to state
         Call a method that is built in called this.setState, you passs in the 
         piece you wish to update, and it will take the copied old shoes, and 
         append to it the new shoe.. which will trigger a change in react... 
         if displayed anywhere, will update. 
    */
    this.setState({
      /*
           If property and value are the same, you can simply pass one instance.
           rather than shoes: shoes -new-> shoes
      */
      //shoes: shoes
      shoes
    });
  }

  loadSampleShoes = () => {
    this.setState({ shoes: sampleShoes });
  }

  render() {
    return (
      <div className="SneakerCo">
        <div className="menu">
          <Header tagline="Find your Kicks" />
        </div>
        <Order />
        <Inventory addshoe={this.addshoe} loadSampleShoes={this.loadSampleShoes} />
        {/*To pass the method addshoe down into AddshoeForm, you
          pass it as a property!*/}
      </div>
    );
  }
}

export default App;

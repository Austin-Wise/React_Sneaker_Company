import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import sampleShoes from '../sample-shoes';
import Shoe from './Shoe';
import Order from './Order';
import base from '../base';

class App extends React.Component {

  state = {
    shoes: {},
    order: {}
  };
  componentDidMount() {
    const { params } = this.props.match;
    this.ref = base.syncState(`${params.storeId}/shoes`, {
      context: this,
      state: 'shoes'
    })
  };

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
  //Prevent Memory Leaks by backing out each time you change a store.

  addShoe = shoe => {
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

  addToOrder = (key) => {
    //1. take a copy of state
    const order = { ...this.state.order }
    //2. either add to the order, or update to it.
    order[key] = order[key] + 1 || 1;
    //3. Call setState to update our state object
    this.setState({ order });
  }


  render() {
    return (
      <div className="SneakerCo">
        <div className="menu">
          <Header tagline="Your Choice Shoe Warehouse" />
          <ul className="shoes">
            {/* render out the array of shoes. As you cant map out an object, you use Object.keys...
            which gives you all of the keys to reference the size of the array we want...
            Error: Each child in an array or iterator should have a unique "key" prop.
                ^^--React needs to be fast... it will still work as is, but it will continue to throw
                    errors.. You need a unique identifier, so we'll give the property of Key   and what better
                    to use than the key for the unique identifier. */}

            {Object.keys(this.state.shoes).map(key => (
              <Shoe key={key} index={key} details={this.state.shoes[key]} addToOrder={this.addToOrder} />
            ))}
            {/*How to access the key if it is not available: you have to pass it a second time AS A PROP 
            as something other than the key... as it is reserved*/}

          </ul>
        </div>
        {/*You can also pass everything down by using the spread operator {...this.state} but for scalability reasons...
      you may not want to pass down everything you run into*/}
        <Order {...this.state} />
        <Inventory addShoe={this.addShoe} loadSampleShoes={this.loadSampleShoes} />
        {/*To pass the method addshoe down into AddshoeForm, you
          pass it as a property!*/}
      </div>
    );
  }
}

export default App;

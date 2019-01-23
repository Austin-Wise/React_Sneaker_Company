import React from "react";
//every component needs React imported
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  /*Atm, methods that come with react are within the react.component, 
    however when making our own components that extend react.component
    and furthermore creating an additional layer by creating methods 
    REMOVES the 'this' default binding. To fix this, we have a few options.
    */
  //OPTION 1.
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  //   /*This overwrites the method on it and attaches a binding to the
  //   goToStore (as) the instance of the storePicker */
  // }

  myInput = React.createRef();

  //OPTION 2.
  /*Instead of declaring a method on the component, we declare a property 
  which is to be set to an arrow function. Properties are bound to an 
  instance rather than to NOTHING.   */


  goToStore = event => {
    //1. Stop the form from submitting
    event.preventDefault();
    //2. Get the Text from that Input
    //    Dont touch the DOM!
    //    There are some use cases, however, in touching the DOM
    //    i.e refs ~ touching the DOM to get the element
    //    syncing the objects by State.
    //console.log(this.myInput);
    //Now that we're getting the element itself, how do we get it's value?
    //.current gets the object returned, and value gets the value of the value "key"
    const storeName = this.myInput.current.value;
    //3. Change the page to /store/whatever-they-entered
    /*check inside the dev tools -> inside the Props.
      in history, check for push, which activates 
      push the url to /store/:storename*/
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    /*Notice.. Return () is not seen as a method, its a keyword.
    If you are wanting to indent properly, etc.. you need
    to put the JSX into parenths. to prevent automatic semi-colons..
    the automatic bit is doen by ASI (automatic Semi-colon Insertion)
    Why does this work? BEDMAS.. brackets, exp., div., mult., add., sub.
    */
    return (
      <React.Fragment>
        {/*React.Fragment isnt actually shown in the DOM..
        it is useful when dealing with components that may 
        require sibling elements... this may be seen as an 
        alternative to a wrapper...*/}
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter a Store</h2>
          <input
            type="text"
            ref={this.myInput}
            placeholder="Store Name"
            defaultValue={getFunName()}
            required
          />
          <button type="submit">Visit Store -></button>
        </form>
      </React.Fragment>
    );
  }
}

//Values of inputs must always be directly attached to states. Instead, if you
//want some default value, you can use 'defaultValue=""'

export default StorePicker;

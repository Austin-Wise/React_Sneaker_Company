import React from "react";

//Stateless Functions (Dumb Components) are components that only have a render method and prop types
//    They are components that are FED IN Data. Just displays stuff, no 'self awareness'

//For functions, there is no 'this'.. the function gets one argument called "props".
//so... props.tagline, etc...  because it is all being called in by Header

//Destructuring props into individual variables by const Header = ({ tagline, age }) => ( ... <span>{tagline}</span> ... )
const Header = props => (
    <header className="top">
        <h1>
            Fresh Kicks Superstore
    </h1>
        <h3 className="tagline">
            <span>{props.tagline}</span>
        </h3>
    </header>
);

export default Header;

// class Header extends React.Component {
//   render() {
//     return (
//       <header className="top">
//           <h1>
//              Fresh Kicks Superstore
//           </h1>
//         <h3 className="tagline">
//           <span>{this.props.tagline}</span>
//         </h3>
//       </header>
//     );
//   }
// }

/*
  this.props.tagline
  this: the component instance, whatever got passed in when it was used
        i.e --> <Header tagline="Whats New" age={300} awesome={true} />
        another instance --> <Header tagline="Wes is Cool" age={20} awesome={true} />
  props: the object inside the component which containns all of the properties.

*/

/*
  Difference between Prop and State:
  State is the Data's Home
  Props is how it moves to where it needs to be displayed,
    also how we are going to get the data into our component.


  props:
  <img src="" alt=""/> <-- src and alt would be considered props

  if you want to pass in anything into props that is not a string,
  you need to use curly braces... remember, curly braces signify changing
  back to javascript from jsx


  state:


*/

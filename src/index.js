import React from "react";
import { render } from "react-dom";
//render is what is shown in the view. 'react-dom' signifies that
//we are rendering it TO THE DOM

//rather than these, we can render out the Router tag, as they are indirectly used there...
// import StorePicker from "./components/StorePicker.js";
// import App from "./components/App.js";

//bring in CSS for the entire application
/*because we are set up for create-react-app, 
Webpack config is smart enough to know this is not a .js file, 
so its going to load in the css and stick it into a style tag,
where it can be hotloaded as it changes.
*/
import Router from "./components/Router";
import "./css/style.css";

render(<Router />, document.querySelector("#main"));

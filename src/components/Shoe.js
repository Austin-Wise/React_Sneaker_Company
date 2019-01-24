import React from "react";
import { formatPrice } from '../helpers';

class Shoe extends React.Component {
    render() {
        /* destructuring -> instead of writing <img src={this.props.details.image} every time, 
        you can instead use destructuring to contain the variable names under a single const. 
        That is, if it has the exact same prefix. */

        const { image, name, price, desc, status } = this.props.details;
        const isAvailable = status === 'available';
        /*isAvailable is set to boolean*/
        return (
            <li className="menu-shoe">
                <img src={image} alt={name} />
                <h3 className="shoe-name">{name}
                    <span className="price">{formatPrice(price)}</span>
                {/*Rather than showing only cents, we'll use the helper.js -> formatPrice to show the proper price. */}
                </h3>
                <p>{desc}</p>
                <button disabled={!isAvailable}>{isAvailable ? 'Add to Order' : 'Sold Out'}</button>
                {/*Using a Ternary operator here to change the text inside the button based on (!)Disabled*/}
            </li>
        )
    }
}

export default Shoe;

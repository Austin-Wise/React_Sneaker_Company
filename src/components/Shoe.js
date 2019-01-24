import React from "react";
import { formatPrice } from '../helpers';

class Shoe extends React.Component {
    render() {
        // destructuring -> instead of writing <img src={this.props.details.image} every time, you can instead use destructuring to contain
        const { image, name, price, desc, status } = this.props.details;
        return (
            <li className="menu-shoe">
                <img src={image} alt={name} />
                <h3 className="shoe-name">{name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button>Add to Cart</button>
            </li>
        )
    }
}

export default Shoe;

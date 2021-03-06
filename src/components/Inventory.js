import React from "react";
import AddShoeForm from './AddShoeForm';

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        <AddShoeForm addShoe={this.props.addShoe} />
        {/* 
            rather than this.addShoe, we are using this.props.addShoe
            here because the addShoe method does not reside here, it is
            simply being passed through via props.
        */}
        <button className="loadSampleShoes" onClick={this.props.loadSampleShoes}>Load Samples Shoes</button>
        {/* LoadSampleShoes loads shoes so you dont have to... if you want.. */}
      </div>
    );
  }
}

export default Inventory;

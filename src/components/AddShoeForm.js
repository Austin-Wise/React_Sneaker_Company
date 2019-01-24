import React from 'react';
import Noty from 'noty';

class AddShoeForm extends React.Component {

    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createShoe = (e) => {
        //1. Stop form from submitting
        e.preventDefault();
        if (this.nameRef.current.value === "" ||
            this.priceRef.current.value === "" ||
            this.descRef.current.value === "" ||
            this.imageRef.current.value === "") {
            new Noty({
                theme: 'mint',
                type: 'error',
                text: 'you have empty fields!'
            }).show()
            return false;
        }

        //2. Create Shoe object
        const shoe = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value
        }


        //3. Pulling in the Shoe from App.js
        this.props.addShoe(shoe);
        console.log(shoe);

        //refresh the form
        //  console.log(e.currentTarget);
        e.currentTarget.reset();
    }

    /* 
    Pulling info out of inputs:
    Option 1: Use Ref for each of the inputs.
        (Shown Here)
    Option 2: Listen for a key-up event.

    
    */
    render() {
        return (
            <form className="shoe-edit" onSubmit={this.createShoe}>
                <input name="name" type="text" ref={this.nameRef} placeholder="name" />
                <input name="price" type="text" ref={this.priceRef} placeholder="price" />

                <select name="status" ref={this.statusRef}>
                    <option value="available">In Stock!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>

                <textarea name="desc" ref={this.descRef} placeholder="desc" />
                <input name="image" ref={this.imageRef} type="text" placeholder="image" />
                <button type="submit">+ Add Shoe</button>
            </form>
        )
    }
}

export default AddShoeForm
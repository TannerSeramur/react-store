import React from 'react';

class StorePicker extends React.Component{

    storeInput = React.createRef();

    goToStore = event =>{
        event.preventDefault();
        const storeName = this.storeInput.value.value;
        this.props.history.push(`/store/${storeName}`);
    }
    render(){
        return (
        <React.Fragment>
            {/* This is a store picker */}
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder="Store Name" ref={this.storeInput}/>
                <button type="submit">Visit Store</button>
            </form>
        </React.Fragment>
        )  
    }
}

export default StorePicker;
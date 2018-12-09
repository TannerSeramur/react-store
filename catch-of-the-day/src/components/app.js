import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFish from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component{
    state = {
        fishes: {},
        order: {}
    }
    componentDidMount(){
        this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        })   
    }

    componentWillUnmount(){
        base.removeBinding(this.ref);
    }

    addFish = fish => {
        // take copy of existing state
        const fishes = { ...this.state.fishes };
        // add our new fish to fishes
        fishes[`fish${Date.now()}`] = fish;
        // set the new fishes object to state
        this.setState({fishes});
    }

    loadSampleFish = () => {
        this.setState({ fishes: sampleFish });
    }

    addToOrder = key => {
        const order = {...this.state.order};
        order[key] = order[key] + 1 || 1;
        this.setState({ order });
    }

    render(){
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Daily"/>
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => (
                            <Fish 
                                key={key} 
                                index={key} 
                                details={this.state.fishes[key]} 
                                addToOrder={this.addToOrder}
                            />
                        ))}
                    </ul>
                </div>
                <Order {...this.state} />
                <Inventory addFish={this.addFish} loadSampleFish={this.loadSampleFish}/>
                
            </div>
        )
    }
}

export default App;
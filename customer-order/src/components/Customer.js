import React, { Component } from 'react'
import DisplayUser from './DisplayUser'
import { connect } from 'react-redux'
//import {bindActioncreators} from 'redux'
//import {getCustomer} from '../actions/index'
import * as actions from '../actions'

class Customer extends Component {
    componentDidMount() {
        console.log("DidMount")
        console.log(this.props.customers)
    }
    componentWillReceiveProps() {
        console.log("WillReceiveProps")
        console.log(this.props.customers)
    }
    componentWillUpdate() {
        console.log("WillUpdate")
        console.log(this.props.customers)
    }
    componentDidUpdate() {
        console.log("DidUpdate")
        console.log(this.props.customers)
    }
    componentWillUnmount() {
        console.log("WillUnmount")
        console.log(this.props.customers)
    }
    allusers(){
        return (this.props.customers === undefined) ? [] : this.props.customers.map((customer) => {
        console.log("all ser");
        console.log(this.props.customers);
        <DisplayUser key={'customer=' + customer.id}
            myId={customer.id}
            myName={customer.name}
        >
        </DisplayUser>
    });
}
    render() {

        console.log(this.props.customers)
        console.log("customer")
        const { onGetCustomer} = this.props
        // let allusers = []
        


        return (
            <div>
                <ul>
                    {this.allusers()}

                </ul>
                <button onClick={onGetCustomer}>Submit</button>
                <input type="text" value={this.props.customers}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
     console.log("mapstatetoprop", state)
    return {
        
        customers: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onGetCustomer: () => dispatch(actions.getCustomer()),
    }
}

//export default connect(mapStateToProps)(Customer);
const VisibleCounter = connect(
    mapStateToProps,
    mapDispatchToProps
)(Customer);


export default VisibleCounter;
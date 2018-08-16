import React, { Component } from 'react'
import DisplayUser from './DisplayUser'
import { connect } from 'react-redux'
//import {bindActioncreators} from 'redux'
//import {getCustomer} from '../actions/index'
import * as actions from '../actions'

export default class Customer extends Component {
    componentWillMount() {
        console.log("WillUnmount")
        console.log(this.props.customers)
    }
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
    render() {


        const {getC, customers} =this.props
        console.log("in render "+ customers)
    
        let allusers = []
        allusers= (customers === undefined) ? [] : customers.map((customer) => {
            console.log("all ser");
            console.log(customers);
            <DisplayUser key={'customer=' + customer.id}
                myId={customer.id}
                myName={customer.name}
            >
            </DisplayUser>
        });
        


        return (
            <div>
                <ul>
                    {allusers}

                </ul>
                <button onClick={getC}>Submit</button>
                <input type="text" value={customers}/>
            </div>
        );
    }
}

// function mapStateToProps(state) {
//      console.log("mapstatetoprop", state.customers)
//     return {
        
//         customers: state.customers
//     }
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         // onGetCustomer: () => dispatch(actions.getCustomer()),
//         onGetCustomer: () => dispatch({type:'User_get'})
//     }
// }

//export default connect(mapStateToProps)(Customer);
// const VisibleCounter = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Customer);


// export default VisibleCounter;
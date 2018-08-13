import React, {Component} from 'react'
import DisplayUser from './DisplayUser'
import {connect} from 'react-redux'
//import {bindActioncreators} from 'redux'
//import {getCustomer} from '../actions/index'
import * as actions from '../actions'

class Customer extends Component {
    render() { 
        
        console.log(this.props.customers)
        console.log("customer")
        const {onGetCustomer, customers} = this.props
        let allusers=[]
        allusers=(this.props.customers===undefined) ? [] : this.props.customers.map((customer)=>(
            <DisplayUser key={'customer=' + customer.id}
            myId={customer.id}
            myName={customer.name} 
            >
            </DisplayUser>
        ));
        
        return ( 
            <div>
            <ul>
                {allusers}
                    
            </ul>
            <button onClick={onGetCustomer}>Submit</button>
            </div>
         );
    }
}
 
function mapStateToProps(state){
    return{
        customers: state.customers
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onGetCustomer: event => dispatch(actions.getCustomer()),
    }
}

//export default connect(mapStateToProps)(Customer);
const VisibleCounter = connect(
    mapStateToProps,
    mapDispatchToProps
)(Customer);


export default VisibleCounter;
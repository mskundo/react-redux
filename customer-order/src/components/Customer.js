import React, {Component} from 'react'
import DisplayUser from './DisplayUser'
import {connect} from 'react-redux'
//import {bindActioncreators} from 'redux'
//import {getCustomer} from '../actions/index'

class Customer extends Component {
    render() { 
        let allusers=[]
        allusers=this.props.customers.map((customer)=>(
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
            </div>
         );
    }
}
 
function mapStateToProps(state){
    return{
        customers: state.customers
    }
}


export default connect(mapStateToProps)(Customer);
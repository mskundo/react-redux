import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class SaveUser extends Component{
    componentWillMount(){
        this.state={
            name:'',
            addressLine1:'',
            addressLine2:'',
            postCode:'',
            age:''
        }
        this.addName=this.addName.bind(this)
        this.addAddressLine1=this.addAddressLine1.bind(this)
        this.addAddressLine2=this.addAddressLine2.bind(this)
        this.addPostCode=this.addPostCode.bind(this)
        this.addAge=this.addAge.bind(this)
        //this.addCustomer=this.addCustomer.bind(this)
    }

    addName(e){
        console.log(e.target.value)
        this.setState({name:e.target.value})
    }

    addAddressLine1(e){
        console.log(e.target.value)
        this.setState({addressLine1:e.target.value})
    }

    addAddressLine2(e){
        console.log(e.target.value)
        this.setState({addressLine2:e.target.value})
    }

    addPostCode(e){
        console.log(e.target.value)
        this.setState({postCode:e.target.value})
    }

    addAge(e){
        console.log(e.target.value)
        this.setState({age:e.target.value})
    }

    // addCustomer(e){
    //     console.log(this.state)
    // }

       
    
    render(){
        return(
            <div>
                 <form>
                    Name: <input type="text" value={this.state.name} onChange={this.addName}/><br/>
                    AddressLine1: <input type="text" value={this.state.addressLine1} onChange={this.addAddressLine1}/><br/>
                    AddressLine2:<input type="text" value={this.state.addressLine2} onChange={this.addAddressLine2}/><br/>
                    Post Code: <input type="text" value={this.state.postCode} onChange={this.addPostCode}/><br/>
                    Age: <input type="text" value={this.state.age} onChange={this.addAge}/><br/>
                    <button type="submit" onClick={()=>this.props.addCustomer(this.state.name,
                                                                this.state.addressLine1,
                                                                this.state.addressLine2,
                                                                this.state.postCode,
                                                                this.state.age)}>ADD</button>
                    </form>
               
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        // cust: state.customers
    }
}

function mapDispatchToProps (dispatch){
    return {
        addCustomer: (name,addressLine1,addressLine2,postCode,age) => dispatch(actions.addCustomer(name,addressLine1,addressLine2,postCode,age))
    }
}
const VisibleCounter1 = connect(
    mapStateToProps,
    mapDispatchToProps
)(SaveUser);


export default VisibleCounter1;
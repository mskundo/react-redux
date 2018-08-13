import React, {Component} from 'react'
import { connect } from 'react-redux'

class SaveUser extends React.Component{
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
        this.addCustomer=this.addCustomer.bind(this)
    }

    addName(e){
        console.log(e.target.value)
        this.setState({name:this.state.name=e.target.value})
    }

    addAddressLine1(e){
        console.log(e.target.value)
        this.setState({age:this.state.addressLine1=e.target.value})
    }

    addAddressLine2(e){
        console.log(e.target.value)
        this.setState({age:this.state.addressLine2=e.target.value})
    }

    addPostCode(e){
        console.log(e.target.value)
        this.setState({dept:this.state.postCode=e.target.value})
    }

    addAge(e){
        console.log(e.target.value)
        this.setState({dept:this.state.age=e.target.value})
    }

       
    
    render(){
        return(
            <div>
                 <form  >
                    Name: <input type="text" value={this.state.name} onChange={this.addName}/><br/>
                    AddressLine1: <input type="text" value={this.state.addressLine1} onChange={this.addAddressLine1}/><br/>
                    AddressLine2:<input type="text" value={this.state.addressLine2} onChange={this.addAddressLine2}/><br/>
                    Post Code: <input type="text" value={this.state.postCode} onChange={this.addPostCode}/><br/>
                    Age: <input type="text" value={this.state.age} onChange={this.addAge}/><br/>
                    <button className="btn btn-danger" 
                                    type="submit" 
                                    onClick={()=>this.props.addCustomer(this.state.name,
                                                                this.state.addressLine1,
                                                                this.state.addressLine2,
                                                                this.state.postCode,
                                                                this.state.age)}>ADD</button>
                    </form>
               
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        // cust: state.customers
    }
}

const mapDispatchToProps = dispatch => {
    return {
       addCustomer:(name,addressLine1,addressLine2,postCode,age)=>dispatch({type:'User_add',
        customerData:{name:name,addressLine1:addressLine1,addressLine2:addressLine2,postCode:postCode,age:age}})
        // addCustomerNext: () => dispatch({type:'ADD_CUSTOMER'})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SaveUser)
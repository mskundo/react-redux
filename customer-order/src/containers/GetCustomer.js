import {connect} from 'react-redux'
import Customer from '../components/Customer'
import * as actions from '../actions'

function mapStateToProps(state){
    return{
        name:state.DisplayReducer.name
        addressLine1:state.DisplayReducer.name
        addressLine2:state.DisplayReducer.name
        postCode:state.DisplayReducer.name
        age:state.DisplayReducer.name
    }
}
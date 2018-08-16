import { connect } from 'react-redux'
import Customer from '../components/Customer'
import * as actions from '../actions/index'

function mapStateToProps(state) {
    console.log("map state " + state.DisplayReducer.customers)
    return {
        customers: state.DisplayReducer.customers
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getC: () => dispatch(actions.getCustomer()),
    }
}
const GetCustomer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Customer);

export default GetCustomer;
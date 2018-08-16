import React from 'react'

class DisplayUser extends React.Component {
    state = {  }
    render() { 
        return (  
            <div>
                <li> {this.props.myId}, {this.props.myName}</li>
                <button onClick={this.props.onDeleteCustomer}>Delete</button>
           </div>
        );
    }
}
 
export default DisplayUser;
// function mapStateToProps(state) {
//     console.log("mapstatetoprop", state)
//     return {

//         customers: state.customers
//     }
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         onDeleteCustomer: (id) => dispatch(actions.deleteCustomer(id)),
//     }
// }

// //export default connect(mapStateToProps)(Customer);
// const VisibleCounter2 = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(DeleteUser);


// export default VisibleCounter2;
import React, {Component} from 'react'

class Customer extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>Name:</td>
                            <td>Address Line 1:</td>
                            <td>Address Line 2:</td>
                            <td>Post Code</td>
                            <td>Age</td>
                        </tr>

                        <tr>
                            <td><input type="text"/></td>
                            <td><input type="text"/></td>
                            <td><input type="text"/></td>
                            <td><input type="text"/></td>
                            <td><input type="text"/></td>
                        </tr>
                    </tbody>
                </table>
                    
            </div>
         );
    }
}
 
export default Customer;
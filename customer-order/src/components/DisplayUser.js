import React from 'react'

class DisplayUser extends React.Component {
    state = {  }
    render() { 
        return (  
            
                <li> {this.props.myId}, {this.props.myName}</li>
           
        );
    }
}
 
export default DisplayUser;
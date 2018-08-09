import React from 'react'

class DisplayUser extends React.Component {
    state = {  }
    render() { 
        return (  
            <div>
                <p> {this.props.myId}, {this.props.myName}, {this.props.myAge}, {this.props.myDept}</p>
            </div>
        );
    }
}
 
export default DisplayUser;
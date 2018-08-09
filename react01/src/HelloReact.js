import React from 'react'


export default class HelloReact extends React.Component{
    render(){
        return(
            <div>
                I am learning {this.props.name} {this.props.type}
            </div>
        );
    }
}
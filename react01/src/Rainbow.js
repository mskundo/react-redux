import React from 'react'

export default class Rainbow extends React.Component{
    render(){

        let col={
            color:this.props.fcolor,
            backgroundColor:this.props.bcolor,
            float:'left'
        }
        return(
            <h1 style={col}>{this.props.children}</h1>
        );
    }
}
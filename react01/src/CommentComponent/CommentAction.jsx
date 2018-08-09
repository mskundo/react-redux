import React from 'react';
import ReactDom from 'react-dom';

export default class CommentAction extends React.Component{

    constructor(){
        super()
        this.state={
            upvoteCounter:0,
            message:"welcome",
            rply:""
        }
        this.upVote=this.upVote.bind(this)
        this.downVote=this.downVote.bind(this)
        this.reply=this.reply.bind(this)
        this.giveReply=this.giveReply.bind(this)
        this.saveReply=this.saveReply.bind(this)
    }

    upVote(){
        console.log("upvote")
        this.setState({upvoteCounter: this.state.upvoteCounter+1})
    }

    downVote(){
        //this.state.upvoteCounter--
        this.setState({upvoteCounter: this.state.upvoteCounter-1})
    }

    reply(){
        if((this.state.upvoteCounter)!==0){
        this.setState({message: this.state.message=this.state.rply +"!!! Thanks for voting " + this.state.upvoteCounter })
        //this.setState({rply: this.state.rply=this.name.value})
        }else{
            this.setState({message: this.state.message="Please vote"})
        }
    }

    componentWillMount(){
        console.log("will mount")
    }

    giveReply(e){
        console.log(e.target.value)
        this.setState({rply: this.state.rply=e.target.value})
    }

    saveReply(e){
        console.log(e.target.value)
        ReactDom.findDOMNode(this.refs.InputField).focus()
        this.setState({rply:""})
    }

    render(){
        return(
            <div>
                <button onClick={this.upVote}>Up Vote</button>
                <button onClick={this.downVote}>Down Vote</button>
                <br />
                <input type="text" onChange={this.giveReply} ref="InputField" value={this.state.rply}/>
                <button onClick={this.reply}>Reply</button>
                <button onClick={this.saveReply} >Clear</button>
                <h3>{this.state.upvoteCounter}</h3>
                <h3>{this.state.message}</h3>
                <h3>{this.state.rply}</h3>
            </div>
        );
    }
}
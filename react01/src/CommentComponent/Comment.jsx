import React from 'react'
import  CommentAction  from './CommentAction';
import  CommentText  from './CommentText';
import  CommentAuthor  from './CommentAuthor';

export default class Comment extends React.Component{
    render(){
        return(
            <div>
                <CommentAuthor />
                <CommentText />
                <CommentAction />
            </div>
        );
    }
}
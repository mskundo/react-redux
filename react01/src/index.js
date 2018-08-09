import React from 'react';
import ReactDOM from 'react-dom';
import HelloReact from './HelloReact';
import Rainbow from './Rainbow';
import Comment from './CommentComponent/Comment';
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HelloReact name="madhu" type="easy"></HelloReact>, document.getElementById('root'));
ReactDOM.render(<div>
    <Rainbow fcolor="green" bcolor="cyan">h</Rainbow><Rainbow>i</Rainbow></div>, document.getElementById('color'));
ReactDOM.render(<div>
    <Rainbow fcolor="green" bcolor="cyan">R</Rainbow>
    <Rainbow fcolor="green" bcolor="cyan">e</Rainbow>
    <Rainbow fcolor="green" bcolor="cyan">a</Rainbow>
    <Rainbow fcolor="green" bcolor="cyan">c</Rainbow>
    <Rainbow fcolor="green" bcolor="cyan">t</Rainbow>
    
    </div>, document.getElementById('js'));
ReactDOM.render(<div><br /><br /> <br /><Comment /></div>,document.getElementById('js'));
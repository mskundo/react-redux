import React from 'react'
import axios from 'axios'

export default class Home extends React.Component{

    constructor(){
        super()
        this.state={
            name:'',
            age:'',
            dept:''
        }

        this.addName=this.addName.bind(this)
        this.addUserName=this.addUserName.bind(this)
        this.addEmail=this.addEmail.bind(this)
        this.add=this.add.bind(this)
    }

    addName(e){
        console.log(e.target.value)
        this.setState({name:this.state.name=e.target.value})
    }

    addUserName(e){
        console.log(e.target.value)
        this.setState({age:this.state.age=e.target.value})
    }

    addEmail(e){
        console.log(e.target.value)
        this.setState({dept:this.state.dept=e.target.value})
    }

    add(e){
        e.preventDefault()
        console.log(this.state)
        axios.post("http://localhost:8080/006KotlinSpringBootCRUD-0.0.1-SNAPSHOT/employee/save", this.state).then((res)=>{
            console.log(res.data)
            console.log("success")
        }
    )
    }

    render(){
        return(
            <div>
                <h1>Home</h1>
                <p>On the applications front, Pivotal uses the Spring Framework
                     to help customers create Java applications. On the data side, 
                     EMC's Greenplum data storage system has been integrated with 
                     Hadoop. And to make these applications run in cloud environments, 
                     Pivotal has the open source Cloud Foundry application development 
                     project.</p>
                
                <div>
                    <form  onSubmit={this.add}>
                    Name: <input type="text" value={this.state.name} onChange={this.addName}/><br/>
                    Age: <input type="text" value={this.state.age} onChange={this.addUserName}/><br/>
                    Dept: <input type="text" value={this.state.dept} onChange={this.addEmail}/><br/>
                    <button type="submit">Add</button>
                    </form>
                </div>
            </div>
        );
    }
}

























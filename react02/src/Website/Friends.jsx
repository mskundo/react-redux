import React from 'react'
import axios from 'axios'
import DisplayUser from './DisplayUser'

export default class Friends extends React.Component{
    constructor(){
        super()
        this.state={
            remoteUsers:[]
        }
        this.getRemoteUsers=this.getRemoteUsers.bind(this)
    }
    componentDidMount(){
        console.log("helo")
        this.getRemoteUsers()
    }
    getRemoteUsers(){
        axios.get("http://localhost:8080/006KotlinSpringBootCRUD-0.0.1-SNAPSHOT/employee/all").then((res) =>{
            console.log("Axios call")
            console.log(res)
            console.log(res.data)
            this.setState({remoteUsers:res.data})
            console.log("state")
            console.log(this.state.remoteUsers)
        })
    }
    render(){

        const allusers=this.state.remoteUsers.map((user)=>(
            <DisplayUser key={'user=' + user.id}
            myId={user.id}
            myName={user.name} 
            myAge={user.age}
            myDept={user.dept}>
            </DisplayUser>
        ))
        return(
            <div>
                <h1>Friends</h1>
                {/* <ul>
                    <li>Joey</li>
                    <li>pheobe</li>
                    <li>Ross</li>
                    <li>Monika</li>
                    
                </ul> */}
                {allusers}
               
            </div>
        )
    }
}
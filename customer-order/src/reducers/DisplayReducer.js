import React from 'react'
import axios from 'axios'

export default function DisplayReducer(state = {customers : []}, action) {
     //let customers = state.customers
     let xyz = state.customers
    switch (action.type) {
        
        case 'User_get':
            axios.get("https://customer-service-madhu.cfapps.io/customers").then((res)=>{
                console.log("response" + res.data)
                xyz= res.data
                console.log("customers xyz " + xyz)
            })
            console.log("dhjdfh")
            return {
                ...state,
                customers : xyz
            }
            
     
        case 'User_add':
            console.log(action.payload)
            axios.post("https://customer-service-madhu.cfapps.io/customers", action.payload)
            return state
      
        // case 'User_delete':
        //     axios.post("https://customer-service-madhu.cfapps.io/customers"+"/"+id)
        //     return state


        default:
            return state

    }


    //return[
    //     {
    //         "id":1,
    //         "name":"madhu",
    //         "addressLane1":"Gunupur",
    //         "addressLane2":"Odisha",
    //         "age":22,
    //         "postCode":765022
    //     },
    //     {
    //         "id":2,
    //         "name":"Ruchi",
    //         "addressLane1":"Gunupur1",
    //         "addressLane2":"Odisha1",
    //         "age":22,
    //         "postCode":789788
    //     }
    // ]
}

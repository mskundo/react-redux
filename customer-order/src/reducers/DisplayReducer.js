import React from 'react'
import axios from 'axios'
let c=[]
export default function DisplayReducer(state = {
    customers: []
}, action) {
    let customers = state.customers
    switch (action.type) {
        case 'User_get':
            return (axios.get("https://customer-service-madhu.cfapps.io/customers").then((res) => {
                console.log(res.data)
                c= res.data
                customers = c
                console.log(customers)
                //this.display(customers)
                
            }))
        
            case 'User_add':
                return (axios.get("https://customer-service-madhu.cfapps.io/customers").then((res) => {
                    console.log(res.data)
                    console.log("Successfully added")
        }))
        

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


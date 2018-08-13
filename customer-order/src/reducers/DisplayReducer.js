
import axios from 'axios'
//const c=[]
export default function CountReducer(state={
    customers:[]}, action){
        switch(action.type){
            case 'User_get':
            axios.get("https://customer-service-madhu.cfapps.io/customers").then((res)=>{
                return res.data
            })
            
                default:
                return state
            

        }
    // return[
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
        

export const getCustomer=()=>{
  
    return{
        type:'User_get',
        //payload : customers
    }
}

export const addCustomer=(customer)=>{
  
    return{
        type:'User_add',
        //payload : customers
    }
}
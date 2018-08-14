export const getCustomer=()=>{
  
    return{
        type:'User_get',
        //payload : customers
    }
}

export const addCustomer=(name,addressLine1,addressLine2,postCode,age)=>{
    console.log(name)
    const customerData={
        name:name,
        addressLine1:addressLine1,
        addressLine2:addressLine2,
        postCode:postCode,
        age:age
    }
    return{
        type:'User_add',
        payload:customerData
    }

}
export function doIncrement(value){    
    return {
        type:"INC",
        payload:value
    }
}

export function addPatient(name){    
    return {
        type:"ADD",
        payload:name
    }
}

export function deletePatient(name){    
    return {
        type:"DELETE",
        payload:name
    }
}

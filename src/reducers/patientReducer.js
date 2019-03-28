const initialState = {
    counter: 0,
    name:"",
    names:[
        {name:"Richard"}, 
        {name:"John"}, 
        {name:"Lizelle"}
    ]
}

function patientReducer(state=initialState, action){
    switch(action.type){
        case "INC":
            return Object.assign({}, state, {counter: state.counter + action.payload});
        case "ADD":
            return Object.assign({}, state, {
                names: [...state.names, {name: action.payload}]
            });
        case "DELETE":
            let names = state.names.filter(x=>x != action.payload);
            return Object.assign({}, state, {names})
        default:
            return state;
    }
}

export default patientReducer;
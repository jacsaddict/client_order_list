const initOrderState = {
    item :["原味鬆餅","巧克力鬆餅","鬆餅"],
    quantity :[0,0,0],
    price : [30,35,40]
};


export function order(state = initOrderState, action){


    switch(action.type){
        case '@ORDER/ADD':
            state.quantity[action.id] ++;
            return{
                ...state,
                
                //quantity : [1,0,0]
                //y : y+1
                //...state(quantity[action.id]): state(quantity[action.id])+1
            };
        default:
            return state;
    }
}

const initOrderState = {
    item :["原味鬆餅","巧克力鬆餅","鬆餅"],
    quantity :[0,0,0],
    price : [30,35,40],
    present : []
};


export function order(state = initOrderState, action){
    switch(action.type){
        case '@ORDER/ADD':
            state.quantity[action.id] ++;
            return{
                ...state,
            };

        case '@ORDER/MINUS':
            state.quantity[action.id] --;
            return{
                ...state,
            };
        case '@ORDER/ADDTOCART':

          var UpdatPresent = state.present.filter(function(item){
            return item.name !== state.item[action.id];
          })

          if(state.quantity[action.id] > 0)
          {
            UpdatPresent.push({name:state.item[action.id],
                                quantity:state.quantity[action.id]});
          }
            return{
              ...state,
              present : UpdatPresent
            };
         case '@ORDER/DELETEPANCAKE':
            var UpdatPresent = state.present.filter(function(item){
              return item.name !== action.item;
            })
            for (var i = 0; i < state.item.length; i++) {
              if(state.item[i] === action.item){
                state.quantity[i] = 0;
              }
            }
            return{
              ...state,
              present: UpdatPresent
            };
        default:
            return state;
    }
}





const initOrderState2 = {
    item2 : ["紅茶","綠茶"],
    quantity2: [0,0],
    price2: [10,15],
    present2: []
};

export function order2(state = initOrderState2, action){
  switch(action.type){
      case '@ORDER2/ADD_DRINK':
          state.quantity2[action.id]++;
          return{
              ...state
          };
      case '@ORDER2/MINUS_DRINK':

          state.quantity2[action.id]--;
          return{
            ...state
          };
      case '@ORDER2/ADDTOCART_DRINK':

        var UpdatPresent = state.present2.filter(function(item){
          return item.name !== state.item2[action.id];
        })

        if(state.quantity2[action.id] > 0)
        {
          UpdatPresent.push({name:state.item2[action.id],
                              quantity:state.quantity2[action.id]});
        }

          return{
            ...state,
            present2 : UpdatPresent
          };
      case '@ORDER2/DELETEDRINK':
          var UpdatPresent = state.present2.filter(function(item){
            return item.name !== action.item;
          })
          for (var i = 0; i < state.item2.length; i++) {
            if(state.item2[i] === action.item){
              state.quantity2[i] = 0;
            }
          }
          return{
            ...state,
            present2: UpdatPresent
          };
      default:
          return state;
  }
}





const initRecordState = {
  records : []
};

export function record(state = initRecordState,action){
  switch(action.type){
    case '@RECORD/SUBMIT':
        // console.log(action.p1);
        // console.log(action.p2);
        var UpdatRecords = [];
        // for(var i = 0; i < action.p1.length; i++)
        // {
        //     UpdatRecords.push({
        //           name:action.p1.name[i],
        //           quantity:action.p1.quantity[i]
        //     });
        // }
        // for(var i = 0; i < action.p2.length; i++)
        // {
        //     UpdatRecords.push({
        //           name:action.p2.name[i],
        //           quantity:action.p2.quantity[i]
        //     });
        // }

        // UpdatRecords.push({name:action.p1.name,
        //                    name2:action.p2.name,
        //                    quantity:action.p1.quantity,
        //                    quantity2:action.p2.quantity});
      
        if(action.p1.length !== 0 || action.p2.length !== 0){
          state.records = [...state.records,action.p1,action.p2];
          console.log("in if");
        }
      return{
        ...state
        // records : UpdatRecords
      };
    default:
        return state;
  }
}

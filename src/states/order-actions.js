export function add(id){
  return {
        type: '@ORDER/ADD',
        id
  };
}


export function minus(id){
  return {
        type: '@ORDER/MINUS',
        id
  };
}

export function add_to_cart(id){
  return {
        type: '@ORDER/ADDTOCART',
        id
  };
}

export function delete_from_cart_pancake(item){
  return {
        type: '@ORDER/DELETEPANCAKE',
        item
  };
}

////////////////   drink     /////////////////
export function add_drink(id){
    return{
      type: '@ORDER2/ADD_DRINK',
      id
    };
}
export function minus_drink(id){
    return{
        type: '@ORDER2/MINUS_DRINK',
        id
    };
}
export function add_to_cart_drink(id){
    return{
      type: '@ORDER2/ADDTOCART_DRINK',
      id
    }
}
export function delete_from_cart_drink(item){
  return {
        type: '@ORDER2/DELETEDRINK',
        item
  };
}




////////////////    Record     //////////////

export function submit(p1,p2){
    return{
        type: '@RECORD/SUBMIT',
        p1,
        p2
    }
}

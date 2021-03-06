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
export function clear_pancake(){
    return{
        type: '@ORDER/CLEARPANCAKE'
    }
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
export function clear_drink(){
    return{
        type : '@ORDER2/CLEARDRINK'
    };
}





////////////////    Record     //////////////

export function submit(p1,p2,name,phone,email,time){
    return{
        type: '@RECORD/SUBMIT',
        p1,
        p2,
        name,
        phone,
        email,
        time
    }
}



/////////////    MainButton     //////////////

export function main_display(){
    return{
      type: '@MAINBUTTON/MAINDISPLAY'
    }
}

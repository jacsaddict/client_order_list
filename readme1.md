<!-- 
actions


 -->
//PostForm

export function DropdownSelect(mood){               //控制dropSelect的開關
  return {
        type: '@POST_FORM/DROPDOWNSELECT',
        mood: mood
  };
}

export function PostInput(value){                   //輸入貼文裡面的文字
  return {
        type: '@POST_FORM/POSTINPUT',
        value: value
  };
}

export function MoodToggle(ins){                    //控制moodToggle的開關
  return {
        type: '@POST_FORM/MOODTOGGLE',
        ins
  };
}

export function Danger(ins){                        //判斷貼文目前輸入的情況，看符不符合規格
  return {
        type: '@POST_FORM/DANGER',
        ins
  };
}

export function Clean(){                            //清除一些state的值
  return {
        type: '@POST_FORM/CLEAN'
  };
}



//MainRe

export function NavbarToggle(){                   //控制NavbarToggle的開關
  return {
        type: '@MAIN/NAVBARTOGGLE'
  };
}

export function SearchInput(value){               //輸入搜尋的文字
  return {
        type: '@MAIN/SEARCHINPUT',
        value: value
  };
}


export function TodayList(searchText){            //把listPost的寫成一個high-level的dispatch function
    return (dispatch, getState) => {
        dispatch(startTodayList());

        return listPosts(searchText).then(posts => {
            dispatch(endTodayList(posts));
        }).catch(err => {
            console.error('Error getting weather', err);
        });
    }
}

//TodayRe

function startTodayList(){                         //把postLoading設成true
    return {
          type: '@TODAY/STARTTODAYLIST'
    };
}
  
function endTodayList(posts){                      //把post.js的api傳回來的值更新到state
    return {
          type: '@TODAY/ENDTODAYLIST',
          posts
    };
}


//Tool

export function tip(ins,id){                    //判斷目前點擊到哪一個post，控制那個post的toolTip的開關
    return {
          type: '@TOOL/TIP',
          ins,
          id
    };
}


<!-- 

reducers


 -->


 const initPostFormState = {                                  //PostForm裡面所需的state
    inputValue: null,
    inputDanger: false,
    moodToggle: false,
    mood : 'na'
};

export function postForm(state = initPostFormState, action){
    switch(action.type){
        case '@POST_FORM/DROPDOWNSELECT':
            return{
                ...state,
                mood: action.mood
            };
        case '@POST_FORM/POSTINPUT':
            return{
                ...state,
                inputValue: action.value
            };
        case '@POST_FORM/MOODTOGGLE':
            return{
                ...state,
                moodToggle: action.ins
            };
        case '@POST_FORM/DANGER':
            return{
                ...state,
                inputDanger: action.ins

            };
        case '@POST_FORM/CLEAN':
            return{
              ...state,
              inputValue: '',
              mood: 'na'
            };
        default:
            return state;
    }
}


const initMainReState = {                                       //navbar裡面的state
    navbarToggle: false,
    searchText: ''
};

export function MainRe(state = initMainReState, action){
    switch(action.type){
        case '@MAIN/NAVBARTOGGLE':
            return{
                ...state,
                navbarToggle: !state.navbarToggle
            };
        case '@MAIN/SEARCHINPUT':
            return{
                ...state,
                searchText: action.value
            };
        default:
          return state;
    }
}



const initTodayReState = {                            //Today裡面跟postList相關的state
    postLoading: false,
    posts: []
};

export function TodayRe(state = initTodayReState, action){
    switch(action.type){
        case '@TODAY/STARTTODAYLIST':
            return{
                ...state,
                postLoading: true
            };
        case '@TODAY/ENDTODAYLIST':
            return{
                ...state,
                posts: action.posts,
                postLoading: false
            };
        default:
          return state;
    }
}



const initToolState = {                                       //PostItem裡面的state
    tooltipOpen:false,
    toolid:''
}


export function Tool(state = initToolState, action){
    switch(action.type){
        case '@TOOL/TIP':
            return{
                ...state,
                tooltipOpen: action.ins,
                toolid: action.id
            };
        default:
          return state;
    }

}

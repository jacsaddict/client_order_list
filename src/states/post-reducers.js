const initPostFormState = {
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


const initMainReState = {
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



const initTodayReState = {
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



const initToolState = {
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

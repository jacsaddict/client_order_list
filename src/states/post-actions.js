import {listPosts} from 'api/posts.js';

//PostForm

export function DropdownSelect(mood){
  return {
        type: '@POST_FORM/DROPDOWNSELECT',
        mood: mood
  };
}

export function PostInput(value){
  return {
        type: '@POST_FORM/POSTINPUT',
        value: value
  };
}

export function MoodToggle(ins){
  return {
        type: '@POST_FORM/MOODTOGGLE',
        ins
  };
}

export function Danger(ins){
  return {
        type: '@POST_FORM/DANGER',
        ins
  };
}

export function Clean(){
  return {
        type: '@POST_FORM/CLEAN'
  };
}



//MainRe

export function NavbarToggle(){
  return {
        type: '@MAIN/NAVBARTOGGLE'
  };
}

export function SearchInput(value){
  return {
        type: '@MAIN/SEARCHINPUT',
        value: value
  };
}


export function TodayList(searchText){
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

function startTodayList(){
    return {
          type: '@TODAY/STARTTODAYLIST'
    };
}

function endTodayList(posts){
    return {
          type: '@TODAY/ENDTODAYLIST',
          posts
    };
}


//Tool

export function tip(ins,id){
    return {
          type: '@TOOL/TIP',
          ins,
          id
    };
}

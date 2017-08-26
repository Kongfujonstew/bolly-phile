import * as reducers from './reducers';


const defaultState = {
  loggedIn: false,
  showMemberLogin: false,
  memberName: 'SteveTesto',
  nameEntry: '',
  passEntry: '',
  searchEntry: 'Search from the Bolly-phile library',
  showSearch: true,
  searchResults: [],
  liveBollyResults: [],
  currentBolly: {},
  bollyIsLive: false,
  bollyOwner: false,
  messages: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    //Home
    case 'LOGIN' :
      return reducers.login(state, action);
    case 'LOGOUT' :
      return reducers.logout(state, action);
    case 'SHOW_MEMBER_LOGIN' :
      return reducers.showMemberLogin(state, action);
    case 'SHOW_CREATE_NEW_LOGIN' :
      return reducers.showCreateNewLogin(state, action);
    case 'CHANGE_MEMBER_NAME' :
      return reducers.changeMemberName(state, action);
    //Member
    case 'SHOW_SEARCH' :
      return reducers.showSearch(state, action);
    case 'SHOW_LIVE_BOLLY_SEARCH' :
      return reducers.showLiveBollySearch(state, action);
    //Search (YT)
    case 'SET_SEARCH_ENTRY' :
      return reducers.setSearchEntry(state, action);
    case 'SET_SEARCH_RESULTS' :
      return reducers.searchYoutube(state, action);
    case 'SELECT_SEARCH_RESULT' :
      return reducers.selectSearchResult(state, action);
    default:
      return state;
  }
}


import * as reducers from './reducers';


const defaultState = {
  loggedIn: false,
  showMemberLogin: false,
  memberName: 'SteveTesto',
  nameEntry: '',
  passEntry: '',
  showSearch: true,
  searchResults: [],
  liveBollies: [],
  currentBolly: {},
  bollyLive: false,
  bollyOwner: false,
}

export default (state = defaultState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
}


// export default function (state = {
//   isDeleting: false,
//   error: '',
// }, action) {
//   switch (action.type) {
//     case 'DELETE_PAGE_PENDING':
//       return {
//         isDeleting: true,
//       };
//     case 'DELETE_PAGE_REJECTED':
//       return {
//         isDeleting: false,
//         error: action.payload.response.statusText,
//       };
//     case 'DELETE_PAGE_FULFILLED':
//       return {
//         isDeleting: false,
//       };
//     default:
//       return state;
//   }
// }
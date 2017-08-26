
//Home
export const login = (state, action) => {
  const newState = {};
  Object.assign(newState, state, {loggedIn: true});
  return newState;
};

export const logout = (state, action) => {
  const newState = {};
  Object.assign(newState, state, {loggedIn: false});
  return newState;
};

export const showMemberLogin = (state, action) => {
  const newState = {};
  Object.assign(newState, state, {showMemberLogin: true});
  return newState;
};

export const showCreateNewLogin = (state, action) => {
  const newState = {};
  Object.assign(newState, state, {showMemberLogin: false});
  console.log('returning newState: ', newState);
  return newState;
};

export const changeMemberName = (state, action) => {
  const newState = {};
  Object.assign(newState, state, {memberName: action.memberName});
  return newState;
};


//Member

export const showSearch = (state, action) => {
  const newState = {};
  Object.assign(newState, state, {showSearch: true});
  return newState;
};

export const showLiveBollySearch = (state, action) => {
  const newState = {};
  Object.assign(newState, state, {showSearch: false});
  return newState;
};



//Search (Youtube)

export const setSearchEntry = (state, action) => {
  const newState = {};
  Object.assign(newState, state, {searchEntry: action.searchEntry});
  return newState;
};

export const setSearchResults = (state, action) => {
  const newState = {};
  Object.assign(newState, state, {searchResults: action.searchResults});
  return newState;
};

export const selectSearchResult = (state, action) => {
  const newState = {};
  Object.assign(newState, state, {currentBolly: action.currentBolly});
  return newState;
};




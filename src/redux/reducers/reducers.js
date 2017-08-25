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

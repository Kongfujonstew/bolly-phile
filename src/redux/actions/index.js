import * as actions from './actions';

export const login = () => {
  return {
    type: actions.LOGIN
  };
};

export const logout = () => {
  return {
    type: actions.LOGOUT
  }
};

export const showMemberLogin = () => {
  return {
    type: actions.SHOW_MEMBER_LOGIN
  };
};

export const showCreateNewLogin = () => {
  console.log('creating showcreateNewaction')
  return {
    type: 'SHOW_CREATE_NEW_LOGIN'
  };
};

export const changeMemberName = (name) => {
  console.log('creating change member name action')
  return {
    type: 'CHANGE_MEMBER_NAME',
    memberName: name
  };
};

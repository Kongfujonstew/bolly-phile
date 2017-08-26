import * as actions from './actions';
const API_KEY = '../../../evariables'


//Home
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

//Member

export const showLiveBollies = () => {
  console.log('create SLB action');
  return {
    type: 'SHOW_LIVE_BOLLY_SEARCH'
  }
}

export const showSearch = () => {
  return {
    type: 'SHOW_SEARCH'
  }
}


//Search

export const setSearchEntry = (e) => {
  e.preventDefault();
  return {
    type: 'SET_SEARCH_ENTRY',
    searchEntry: e.target.value
  }
}

export const searchYoutube = (query) => {
  console.log('searching youtube')
  query = query + 'hindu movie';
  let that = this; // necessary???
  let searchResults = [];

  axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      key: API_KEY,
      q: query,
      maxResults: 5,
      part: 'snippet',
      type: 'video',
      videoEmbeddable: true
    }
  })
  .then((response) => {
    console.log(response);
    //create the new searchResults array of filter bollies here

    return {
      type: 'SET_SEARCH_RESULTS',
      searchResults: searchResults
    }
  })
  .catch(function (error) {
    console.log('error: ', error);
  })
}

const selectSearchSearchResults = (bolly) => {
  return {
    type: 'SELECT_SEARCH_RESULTS',
    currentBolly: bolly
  }
}



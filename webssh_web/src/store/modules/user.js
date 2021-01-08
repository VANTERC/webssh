const user = {
  state: {
    userInfo: {
      userName: '',
      userId: '',
      token: ''
    }
  },
  getters: {
    UserInfo: state => {
      return state.userInfo;
    }
  },
  mutations: {
    SET_USERINFO: (state, val) => {
      state.userInfo = val;
      sessionStorage.setItem('userInfo', JSON.stringify(val));
    }
  },
  actions: {}
};
export default user;
